import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import red from "../assets/images/red.png";

function LostKid() {
  const handleLearnClick = () => {
    window.open("https://vector-nine.vercel.app/", "_blank");
    console.log("Learn More button clicked");
  };

  const handleDetailsClick = () => {
    window.open("https://chat.whatsapp.com/H9eTkTOCxa2LQimCk90XXc", "_blank");
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <Hero
        backgroundImage="https://picsum.photos/1280/720"
        heading="College Hunt Driving You Crazy?"
        description="Been there, done that! Let me show you how I got into Scaler School of Technology and how you can too."
        primaryButtonText="Start Learning"
        secondaryButtonText="Find your tribe"
        onPrimaryButtonClick={handleLearnClick}
        onSecondaryButtonClick={handleDetailsClick}
      />
    </div>
  );
}

export default LostKid;