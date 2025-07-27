import React from "react";
import Button from "../ui/Button";
import SectionWrapper from "../ui/SectionWrapper";

const Hero = () => {
  const techImgUrl = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React
    "https://assets.vercel.com/image/upload/v1662090959/nextjs/Icon_light_background.png", // Next.js
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/500px-Node.js_logo.svg.png", // Node.js
    "https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png", // Express
    "https://nestjs.com/img/logo-small.svg", // NestJS
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", // Tailwind CSS
    "https://www.mongodb.com/assets/images/global/favicon.ico", // MongoDB
    "https://www.postgresql.org/media/img/about/press/elephant.png", // PostgreSQL
  ];
  return (
    <SectionWrapper
      id="home"
      background="gradient"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-blue-600 font-medium text-lg">Hi there! 👋</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              I'm <span className="text-gradient">Shreyas</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
              Full-Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            I am specialized in building modern web applications with
            cutting-edge technologies. From healthcare management systems to
            complex e-commerce platforms, I create scalable solutions that drive
            business growth and enhance user experiences.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Happy Clients
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#projects" size="lg">
              View My Work
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Let's Talk
            </Button>
          </div>

          {/* Tech Stack Preview */}
          <div className="space-y-3">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
              Technologies I Work With
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "NestJS",
                "Tailwind CSS",
                "MongoDB",
                "PostgreSQL",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 text-sm rounded-full border border-gray-200 hover:border-blue-300 transition-colors duration-200"
                >
                  {tech}
                  {
                    <img
                      src={techImgUrl[index]}
                      alt={tech}
                      className="w-6 h-6 inline-block ml-2"
                    />
                  }
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image/Animation */}
        <div className="hidden lg:flex lg:justify-end ">
          <div className="relative">
            {/* Profile Image Placeholder */}
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 md:w-88 md:h-88 bg-white rounded-full flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl">🚀</span>
            </div>
            <div className="absolute top-1/2 -left-8 w-10 h-10 bg-red-400 rounded-full flex items-center justify-center shadow-lg animate-ping">
              <span className="text-sm">💡</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500">Scroll Down</span>
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div> */}
    </SectionWrapper>
  );
};

export default Hero;
