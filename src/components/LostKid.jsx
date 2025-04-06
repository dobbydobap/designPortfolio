import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import LostKidSection from "./sections/LostKidSection";

function LostKid() {
  const handleApplyClick = () => {
    console.log("Apply button clicked");
  };

  const handleMoreInfoClick = () => {
    console.log("More Info button clicked");
  };

  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <Hero
        backgroundImage="https://picsum.photos/1280/720"
        heading="College Hunt Driving You Crazy?"
        description="I've been there. Let me show you how Scaler School of Technology changed everything for me."
        primaryButtonText="Apply Now"
        secondaryButtonText="Learn More"
        onPrimaryButtonClick={handleApplyClick}
        onSecondaryButtonClick={handleMoreInfoClick}
      />
      <LostKidSection />
    </div>
  );
}

export default LostKid;