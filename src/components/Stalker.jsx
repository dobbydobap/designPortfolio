import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import StalkerSection from "./sections/StalkerSection";
import shaurya from "../assets/images/shaurya3.jpg";
import varshitha from "../assets/images/cards/varshitha.jpg";

function Stalker() {
  const handleProjectsClick = () => {
    window.open("https://www.linkedin.com/in/varshitha-kolupuri/", "_blank");
  };

  const handleMoreInfoClick = () => {
    window.open("", "_blank");
  };

  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <Hero
        backgroundImage={varshitha}
        heading="Caught You Snooping!"
        description="Well, since you're here, why not just look around?"
        primaryButtonText="GitHub"
        secondaryButtonText="Learn More"
        onPrimaryButtonClick={handleProjectsClick}
        onSecondaryButtonClick={handleMoreInfoClick}
      />

      <StalkerSection />
      
    </div>
  );
}

export default Stalker;