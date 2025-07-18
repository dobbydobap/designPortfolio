import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import RecruiterSection from "./sections/RecruiterSection";
import shaurya from "../assets/images/shaurya.jpg";

function Recruiter() {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1HDc_UGIK7wdf4d3xHPgfwh64ffH3ktg6/view?usp=sharing", "_blank");
  };

  const handleMoreInfoClick = () => {
    window.open("https://www.linkedin.com/in/astro-dude/", "_blank");
  };

  return (
    <div className="relative w-full min-h-screen">
      <Header />
      <Hero
        backgroundImage={shaurya}
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