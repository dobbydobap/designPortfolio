import React from "react";
import Header from "./header";
import Hero from "./Hero";
import yellow from "../assets/images/yellow.png";

function Stalker() {
  const handleConnectClick = () => {
    console.log("Connect button clicked");
  };

  const handleLearnMoreClick = () => {
    console.log("Learn More button clicked");
  };

  return (
    <>
      <div>
        <Header />
        <Hero
          backgroundImage="https://picsum.photos/1280/720"
          heading="Caught You Snooping!"
          description="Since you're here, might as well check out my projects, skills, and maybe even drop a hello. No judgment, I promise."
          primaryButtonText="Discover More"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={handleConnectClick}
          onSecondaryButtonClick={handleLearnMoreClick}
        />
      </div>
    </>
  );
}

export default Stalker;