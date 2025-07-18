import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import StalkerSection from "./sections/StalkerSection";
import shaurya from "../assets/images/shaurya3.jpg";

function Stalker() {
  const handleProjectsClick = () => {
    window.open("https://www.instagram.com/_shauryanium.perfrauleinide_/", "_blank");
  };

  const handleMoreInfoClick = () => {
    window.open("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXc3d28xeDg1bDJ2dzZqb2dkMDJ3djNpZDN0NDljeGwyOGN3NWRjMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vxBUmPA1bq0RyWi4et/giphy.gif", "_blank");
  };

  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <Hero
        backgroundImage={shaurya}
        heading="Caught You Snooping!"
        description="Well, since you're here, why not just look around?"
        primaryButtonText="Instagram"
        secondaryButtonText="Learn More"
        onPrimaryButtonClick={handleProjectsClick}
        onSecondaryButtonClick={handleMoreInfoClick}
      />

      <StalkerSection />
      
    </div>
  );
}

export default Stalker;