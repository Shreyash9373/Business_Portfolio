"use client";
import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const About = () => {

  const leftColumn = useRef();
  const rightColumn = useRef();
  const aboutUs = useRef();
  const storyRef = useRef();

  useScrollReveal([
    { ref: aboutUs, options: { y: 50, opacity: 0, duration: 0.6, } },
  ])

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2023 - Present",
      description:
        "Developing custom web applications for healthcare, e-commerce, and business management sectors.",
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2022 - 2023",
      description:
        "Built responsive user interfaces and improved user experience for various web applications.",
    },
  ];

  return (
    <SectionWrapper id="about" background="white">
      <div className="max-w-6xl mx-auto" ref={aboutUs}>
        {/* Section Header */}
        <div className="text-center mb-16" ref={aboutUs}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in modern web
            technologies and a track record of delivering scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Experience */}
          <div ref={leftColumn} className="space-y-8">
            {/* Personal Story */}
            <div ref={storyRef}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm a passionate full-stack developer with over 3 years of
                  experience building web applications that solve real-world
                  problems. My journey started with a curiosity about how
                  websites work, and it has evolved into a deep expertise in
                  modern web technologies.
                </p>
                <p>
                  I specialize in creating scalable, user-friendly applications
                  using technologies like React, Node.js, and cloud platforms.
                  My experience spans across various industries including
                  healthcare, e-commerce, and business management systems.
                </p>
                <p>
                  When I'm not coding, I enjoy staying updated with the latest
                  tech trends, contributing to open-source projects, and helping
                  other developers in their journey.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      {index !== experiences.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-200 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {exp.title}
                        </h4>
                        <span className="text-sm text-blue-600 font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div ref={rightColumn} className="space-y-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {/* Frontend */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Frontend Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "JavaScript",
                      "HTML5",
                      "CSS3",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Backend Development
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express", "NestJS", "RESTful APIs"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Database & Tools */}
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">
                    Database & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "MongoDB",
                      "PostgreSQL",
                      "MySQL",
                      "VPS",
                      "AWS",
                      "Docker",
                      "Git",
                      "Redis",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Strengths */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Strengths
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Problem Solving",
                    description:
                      "Breaking down complex challenges into manageable solutions",
                  },
                  {
                    title: "Clean Code",
                    description:
                      "Writing maintainable, scalable, and well-documented code",
                  },
                  {
                    title: "User-Centric Design",
                    description:
                      "Creating interfaces that prioritize user experience",
                  },
                  {
                    title: "Continuous Learning",
                    description:
                      "Staying updated with latest technologies and best practices",
                  },
                ].map((strength, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {strength.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
