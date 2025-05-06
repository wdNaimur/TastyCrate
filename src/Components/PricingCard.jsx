import React, { Suspense, use } from "react";
import SinglePriceCard from "./SinglePriceCard";
import SectionHeading from "../UI/SectionHeading";

const pricingPromise = fetch("/data/pricingCard.json").then((res) =>
  res.json()
);
const PricingCard = () => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <SectionHeading subHeading="PRICING" heading="Choose your best plan" />
      <div className="flex flex-wrap gap-10 container mx-auto justify-center px-4 mb-20">
        {pricingData.map((price) => (
          <SinglePriceCard key={price.id} price={price} />
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
