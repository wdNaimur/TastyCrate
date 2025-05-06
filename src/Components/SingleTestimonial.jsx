import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const SingleTestimonial = ({ data }) => {
  return (
    <div className="px-4 cursor-default">
      <div className="p-6 rounded shadow-md dark:bg-gray-50">
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center mt-4 space-x-4">
            <img
              src={data.image}
              alt={data.name}
              className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
            />

            <div>
              <p className="text-lg font-semibold">{data.name}</p>
              <p className="text-sm dark:text-gray-600">{data.title}</p>
            </div>
          </div>
          <div>
            <FaQuoteRight size={50} className="text-secondary" />
          </div>
        </div>

        <div className="w-sm">{data.testimonial}</div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
