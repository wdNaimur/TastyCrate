import React from "react";
import Feature from "./Feature";
import { Link } from "react-router";

const SinglePriceCard = ({ price }) => {
  return (
    <div
      className={`flex flex-col xl:w-full lg:w-sm md:w-[47%] rounded-t-2xl rounded shadow text-base-100 hover:-translate-y-3.5 ease-linear transition-all  ${
        price.tag == "Most Popular"
          ? "bg-secondary/80 md:scale-105 -translate-y-2 "
          : " bg-primary/80"
      }`}
    >
      <div>
        <img
          className="w-full object-cover rounded-t-2xl"
          src={price.titleImage}
          alt={price.name}
        />
      </div>
      <div className="space-y-6 p-6">
        <div className="space-y-2 ">
          <h4 className="text-2xl font-bold">{price.name}</h4>
          <span className="text-6xl font-bold">
            {price.price}
            <span className="text-sm tracking-wide">{price.frequency}</span>
          </span>
        </div>

        <ul
          className={`space-y-2 dark:text-gray-600  flex-1 ${
            price.tag == "Most Popular" ? "text-base-100" : "text-primary"
          }`}
        >
          {price.features.map((feature, index) => (
            <Feature key={index} feature={feature} />
          ))}
        </ul>
        <div className="justify-end">
          <Link to={`/pricing/${price.slug}`}>
            <span
              className={`inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded text-base-100 hover:scale-105 ease-linear transition-all active:scale-100 ${
                price.tag == "Most Popular" ? "bg-secondary" : " bg-primary"
              }`}
            >
              View More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePriceCard;
