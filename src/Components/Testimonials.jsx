import React from "react";
import { useLoaderData } from "react-router";
import SingleTestimonial from "./SingleTestimonial";
import Marquee from "react-fast-marquee";
import SectionHeading from "../UI/SectionHeading";

const Testimonials = () => {
  const testimonialData = useLoaderData();

  return (
    <>
      <SectionHeading
        subHeading="Testimonial"
        heading="What our customers say"
      />
      <Marquee pauseOnHover={true}>
        {testimonialData.map((data) => (
          <SingleTestimonial key={data.id} data={data} />
        ))}
      </Marquee>
    </>
  );
};

export default Testimonials;
