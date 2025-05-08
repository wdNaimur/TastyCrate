import React, { useEffect } from "react";
import SectionHeading from "../UI/SectionHeading";

const AboutUs = () => {
  useEffect(() => {
    document.title = "Tastycrate | About Us";
  }, []);

  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 ">
      <div className="flex justify-center">
        <img src="/images/about.png" alt="About Tastycrate" />
      </div>

      <div>
        <div className="mb-5">
          <span className="font-bold tracking-wider uppercase text-secondary">
            WHO WE ARE
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl text-primary">
            About Tastycrate
          </h2>
        </div>

        <p className="text-gray-700 text-base leading-relaxed mb-4">
          At Tastycrate, we believe in making snacking more exciting,
          nutritious, and globally inspired. We curate monthly subscription
          boxes filled with hand-picked snacks from local and international
          kitchens.
        </p>

        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Whether you're a foodie or simply looking to explore new flavors, each
          crate is designed to surprise and satisfy your cravings. We’re
          passionate about supporting small snack producers and delivering a
          moment of joy with every box.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
          <li>Monthly rotating snack themes</li>
          <li>Eco-friendly and reusable packaging</li>
          <li>Customer-first approach with every order</li>
          <li>Fast, reliable shipping worldwide</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
