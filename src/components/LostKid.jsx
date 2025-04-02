import React from "react";
import Header from "./header";
import Hero from "./Hero";
import red from "../assets/images/red.png";

function LostKid() {
  const handleMentorClick = () => {
    console.log("Mentor button clicked");
  };

  const handleResourcesClick = () => {
    console.log("Resources button clicked");
  };

  return (
    <>
      <div>
        <Header />
        <Hero
          backgroundImage="https://picsum.photos/1280/720"
          heading="College Hunt Driving You Crazy?"
          description="Scaler School of Technology is the dream? I've got test series, mock interviews, and all the guidance you need to make it happen."
          primaryButtonText="Start Preparing"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={handleMentorClick}
          onSecondaryButtonClick={handleResourcesClick}
        />
      </div>
    </>
  );
}

export default LostKid; 