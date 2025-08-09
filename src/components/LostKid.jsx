import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import LostKidSection from "./sections/LostKidSection";
import shaurya from "../assets/images/shaurya2.jpeg";
import varshitha from "../assets/images/cards/varshitha.jpg";

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
        backgroundImage={varshitha}
        heading="Don't know what to do next?"
        description="I've been there. Prepare for SST or just want to chill? Whatever it is I have got you covered."
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