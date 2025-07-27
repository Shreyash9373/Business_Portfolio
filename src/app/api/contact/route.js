import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Contact from "../../../models/Contact";

// Helper function to get client IP
function getClientIP(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIP) {
    return realIP.trim();
  }

  return "unknown";
}

// POST /api/contact
export async function POST(request) {
  try {
    // Connect to database
    await dbConnect();

    // Parse request body
    const body = await request.json();
    const { name, email, subject, message, budget } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get client information
    const ipAddress = getClientIP(request);
    const userAgent = request.headers.get("user-agent") || "";

    // Create contact message
    const contactMessage = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      budget: budget || "",
      ipAddress,
      userAgent,
    });

    // Save to database
    const savedMessage = await contactMessage.save();

    // Log successful submission (optional)
    console.log(
      `New contact message from ${email} at ${new Date().toISOString()}`
    );

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully!",
        id: savedMessage._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return NextResponse.json(
        { error: "Validation failed", details: validationErrors },
        { status: 400 }
      );
    }

    // Handle duplicate email (if you want to prevent spam)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "A message from this email was recently submitted" },
        { status: 429 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

// GET /api/contact - For retrieving messages (admin use)
export async function GET(request) {
  try {
    // You might want to add authentication here for admin access
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const limit = parseInt(searchParams.get("limit")) || 50;
    const page = parseInt(searchParams.get("page")) || 1;

    // Build query
    const query = status ? { status } : {};

    // Get messages with pagination
    const messages = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .select("-userAgent -ipAddress"); // Exclude sensitive fields

    const total = await Contact.countDocuments(query);

    return NextResponse.json({
      messages,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
