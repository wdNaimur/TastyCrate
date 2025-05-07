import React, { Suspense, useEffect } from "react";
import Hero from "../Components/Hero";
import Testimonials from "../Components/Testimonials";
import PricingCard from "../Components/PricingCard";

const HomePage = () => {
  useEffect(() => {
    document.title = "Tastycrate | Home";
  }, []);
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className="-z-30">
        <Testimonials />
      </section>
      <section>
        <Suspense
          fallback={
            <span className="loading loading-spinner text-secondary"></span>
          }
        >
          <PricingCard />
        </Suspense>
      </section>
    </main>
  );
};

export default HomePage;
