import React from "react";
import rightHero from "../assets/right-hero.png";
import Button from "../UI/Button";
import heroImage from "../assets/hero.png";
const Hero = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="pb-10">
        <div className="lg:grid lg:grid-cols-2 items-center flex flex-col">
          <div className="justify-self-center max-w-2xl text-primary xl:ps-40 lg:ps-30">
            <h1 className="mb-5 text-5xl font-bold text-secondary lg:text-left text-center lg:pt-0 pt-20">
              WHAT’S NEW AT <br />
              <span className="text-primary">
                Tasty
                <span className="font-light ">crate</span>
              </span>
            </h1>
            <p className="mb-5 max-w-xl lg:text-left text-center">
              Curated snacks and treats, delivered monthly. Taste the world with
              every Tastycrate box.
            </p>
            <div className="lg:text-left text-center">
              <Button>Get Started</Button>
            </div>
          </div>

          <div className="justify-self-end lg:w-full w-[80%]">
            <img src={rightHero} alt="Food" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
