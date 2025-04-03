import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import yellow from "../assets/images/yellow.png";

function Stalker() {
  const handleProjectsClick = () => {
    console.log("Projects button clicked");
  };

  const handleMoreInfoClick = () => {
    console.log("More Info button clicked");
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <Hero
        backgroundImage="https://picsum.photos/1280/720"
        heading="Caught You Snooping!"
        description="Well, since you're here, check out my projects, tech stack, and what makes me tick. No judgment, just pure tech love!"
        primaryButtonText="View Projects"
        secondaryButtonText="Learn More"
        onPrimaryButtonClick={handleProjectsClick}
        onSecondaryButtonClick={handleMoreInfoClick}
      />
      
    </div>
  );
}

export default Stalker;