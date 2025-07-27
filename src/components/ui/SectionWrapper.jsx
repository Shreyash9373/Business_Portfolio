import React from "react";

const SectionWrapper = ({
  children,
  id,
  className = "",
  containerClassName = "",
  background = "white",
}) => {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-gray-900",
    gradient: "bg-gradient-to-br from-blue-50 to-purple-50",
  };

  return (
    <section
      id={id}
      className={`py-10 ${backgroundClasses[background]} ${className}`}
    >
      <div className={`container-custom section-padding ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
