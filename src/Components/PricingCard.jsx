import React, { Suspense, use } from "react";
import SinglePriceCard from "./SinglePriceCard";
import SectionHeading from "../UI/SectionHeading";
import { Element } from "react-scroll";

const pricingPromise = fetch("/data/pricingCard.json").then((res) =>
  res.json()
);
const PricingCard = () => {
  const pricingData = use(pricingPromise);

  return (
    <Element name="Pricing-Section">
      <div className="mb-10">
        <SectionHeading subHeading="PRICING" heading="Choose your best plan" />
      </div>

      <div className=" xl:grid xl:grid-cols-3 flex flex-wrap flex-2/3 xl:gap-14 lg:gap-y-20 md:gap-10 gap-8 md:gap-y-20 container mx-auto justify-center px-4">
        {pricingData.map((price) => (
          <SinglePriceCard key={price.id} price={price} />
        ))}
      </div>
    </Element>
  );
};

export default PricingCard;
