import mongoose from "mongoose";
//This is the contact Schema for MongoDB using Mongoose
const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      maxlength: [200, "Subject cannot exceed 200 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [2000, "Message cannot exceed 2000 characters"],
    },
    budget: {
      type: String,
      enum: ["under-5k", "5k-10k", "10k-25k", "25k-plus", ""],
      default: "",
    },
    status: {
      type: String,
      enum: ["new", "read", "replied", "archived"],
      default: "new",
    },
    ipAddress: {
      type: String,
      default: "",
    },
    userAgent: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // This adds createdAt and updatedAt fields
  }
);

// Create indexes for better query performance
ContactSchema.index({ email: 1 });
ContactSchema.index({ createdAt: -1 });
ContactSchema.index({ status: 1 });

// Add a method to get formatted date
ContactSchema.methods.getFormattedDate = function () {
  return this.createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Prevent re-compilation during development
export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
