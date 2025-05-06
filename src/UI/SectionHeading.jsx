import React from "react";

const SectionHeading = ({ subHeading, heading }) => {
  return (
    <div className="max-w-2xl mx-auto text-center my-12 lg:my-16">
      <span className="font-bold tracking-wider uppercase text-secondary">
        {subHeading}
      </span>
      <h2 className="text-4xl font-bold lg:text-5xl text-primary">{heading}</h2>
    </div>
  );
};

export default SectionHeading;
