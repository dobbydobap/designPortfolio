import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import RecruiterSection from "./sections/RecruiterSection";
import shaurya from "../assets/images/shaurya.jpg";
import varshitha from "../assets/images/cards/varshitha.jpg";

function Recruiter() {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1gz11Xtc_6AHmeBy4FE2eooo_SZxQNrvv/view", "_blank");
  };

  const handleMoreInfoClick = () => {
    window.open("https://www.linkedin.com/in/varshitha-kolupuri/", "_blank");
  };

  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <Hero
        backgroundImage={varshitha}
        heading="Hiring? Let's Make It Easy!"
        description="You're looking for top talent, and—surprise—it's me. Check out my projects, skills, and why I'm the perfect fit."
        primaryButtonText="Download Resume"
        secondaryButtonText="LinkedIn"
        onPrimaryButtonClick={handleResumeClick}
        onSecondaryButtonClick={handleMoreInfoClick}
      />
      <RecruiterSection />
    </div>
  );
}

export default Recruiter;