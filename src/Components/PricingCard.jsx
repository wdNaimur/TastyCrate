import React, { Suspense, use } from "react";
import SinglePriceCard from "./SinglePriceCard";

const pricingPromise = fetch("/data/pricingCard.json").then((res) =>
  res.json()
);
const PricingCard = () => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <div className="max-w-2xl mx-auto  text-center">
        <span className="font-bold tracking-wider uppercase text-secondary">
          Pricing
        </span>
        <h2 className="text-4xl font-bold lg:text-5xl text-primary">
          Choose your best plan
        </h2>
      </div>
      <div className="flex flex-wrap gap-10 container mx-auto justify-center px-4 my-20">
        {pricingData.map((price) => (
          <SinglePriceCard key={price.id} price={price} />
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
