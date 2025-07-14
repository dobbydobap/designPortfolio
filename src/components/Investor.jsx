import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import shaurya from "../assets/images/shaurya.jpg";

function Investor() {
  const handlePitchClick = () => {
    console.log("Pitch button clicked");
  };

  const handleDetailsClick = () => {
    console.log("Details button clicked");
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <Hero
        backgroundImage={shaurya}
        heading="Big Bets on the Next Big Thing?"
        description="I'm building something exciting in ed-tech. Let's talk numbers, vision, and how you can be part of something game-changing."
        primaryButtonText="View Pitch Deck"
        secondaryButtonText="Learn More"
        onPrimaryButtonClick={handlePitchClick}
        onSecondaryButtonClick={handleDetailsClick}
      />
      
    </div>
  );
}

export default Investor;