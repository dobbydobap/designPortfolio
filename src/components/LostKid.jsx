import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import LostKidSection from "./sections/LostKidSection";
import shaurya from "../assets/images/shaurya.jpg";

function LostKid() {
  const handleApplyClick = () => {
    window.open("https://vector-nine.vercel.app/", "_blank");
  };

  const handleMoreInfoClick = () => {
    window.open("https://chat.whatsapp.com/H9eTkTOCxa2LQimCk90XXc", "_blank");
  };

  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <Hero
        backgroundImage={shaurya}
        heading="College Hunt Driving You Crazy?"
        description="I've been there. Let me show you how Scaler School of Technology changed everything for me."
        primaryButtonText="Level Up"
        secondaryButtonText="Join chaos"
        onPrimaryButtonClick={handleApplyClick}
        onSecondaryButtonClick={handleMoreInfoClick}
      />
      <LostKidSection />
    </div>
  );
}

export default LostKid;