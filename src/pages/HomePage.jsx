import React, { Suspense, useEffect } from "react";
import Hero from "../Components/Hero";
import Testimonials from "../Components/Testimonials";
import PricingCard from "../Components/PricingCard";
import ChefCard from "../Components/ChefCard";
import FaqSection from "../Components/FaqSection";

const HomePage = () => {
  useEffect(() => {
    document.title = "Tastycrate | Home";
  }, []);
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section className="py-20 -z-30">
        <Testimonials />
      </section>
      <section className="pb-20">
        <Suspense
          fallback={
            <span className="loading loading-spinner text-secondary"></span>
          }
        >
          <PricingCard />
        </Suspense>
      </section>
      <section className="pb-20">
        <ChefCard />
      </section>
      <section className="pb-20">
        <FaqSection />
      </section>
    </main>
  );
};

export default HomePage;
