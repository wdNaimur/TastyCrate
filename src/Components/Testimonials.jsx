import React from "react";
import { useLoaderData } from "react-router";
import SingleTestimonial from "./SingleTestimonial";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const testimonialData = useLoaderData();

  return (
    <div className="py-20">
      <Marquee>
        {testimonialData.map((data) => (
          <SingleTestimonial key={data.id} data={data} />
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
