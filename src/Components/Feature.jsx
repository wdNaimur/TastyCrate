import React from "react";

const Feature = ({ feature }) => {
  return (
    <li className="flex items-start space-x-2 text-inherit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="flex-shrink-0 w-6 h-6 text-secondary"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="text-base-100">{feature}</span>
    </li>
  );
};

export default Feature;
