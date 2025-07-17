import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import shaurya from "../assets/images/shaurya.jpg";
import InvestorSection from "./sections/InvestorSection";

function Investor() {
  const handlePitchClick = () => {
    window.open("https://www.linkedin.com/in/astro-dude/", "_blank");
  };
  
  const handleDetailsClick = () => {
    window.open("https://calendly.com/sagittariusshaurya5/30min", "_blank");
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <Hero
        backgroundImage={shaurya}
        heading="Big Bets on the Next Big Thing?"
        description="I'm building something exciting in ed-tech. Let's talk numbers, vision, and how you can be part of something game-changing."
        primaryButtonText="LinkedIn"
        secondaryButtonText="Schedule a Call"
        onPrimaryButtonClick={handlePitchClick}
        onSecondaryButtonClick={handleDetailsClick}
      />
      <InvestorSection />
      
    </div>
  );
}

export default Investor;