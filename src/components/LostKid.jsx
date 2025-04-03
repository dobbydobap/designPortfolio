import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import red from "../assets/images/red.png";

function LostKid() {
  const handleLearnClick = () => {
    console.log("Learn More button clicked");
  };

  const handleDetailsClick = () => {
    console.log("Details button clicked");
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <Hero
        backgroundImage="https://picsum.photos/1280/720"
        heading="College Hunt Driving You Crazy?"
        description="Been there, done that! Let me show you how I got into Scaler School of Technology and how you can too."
        primaryButtonText="Learn More"
        secondaryButtonText="View Details"
        onPrimaryButtonClick={handleLearnClick}
        onSecondaryButtonClick={handleDetailsClick}
      />
      
    </div>
  );
}

export default LostKid; 