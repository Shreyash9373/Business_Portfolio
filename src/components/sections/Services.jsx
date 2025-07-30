"use client";
import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { services } from "../../data/services";
import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  const servicesRef = useRef();
  const devProcessRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: devProcessRef.current,
          start: "top 30%",
          scrub: 2,
          pin: true,
        }
      });
      timeline.from(".step", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out(1.7)"
      });
    }, devProcessRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="services" background="gray">
      <div className="max-w-6xl mx-auto" ref={servicesRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive web development services to help bring your
            ideas to life with modern, scalable, and user-friendly solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Service Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Service Title & Description */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  What You Get
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20" ref={devProcessRef}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              My Development Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure your project is delivered on time,
              within budget, and exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your requirements, goals, and target audience",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating detailed project roadmap, wireframes, and technical specifications",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building your solution with clean, scalable code and regular updates",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "Deploying your project and providing ongoing maintenance and support",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto step">
                    {process.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform -translate-y-0.5"></div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
