import "../App.css";

import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

function Hero({
  backgroundImage,
  heading,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  primaryButtonIcon = FaPlay,
  secondaryButtonIcon = FaInfoCircle
}) {
  const PrimaryIcon = primaryButtonIcon;
  const SecondaryIcon = secondaryButtonIcon;

  return (
    <div className="relative h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 100%)',
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-4 md:px-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          {heading}
        </h1>
        <p className="text-lg mb-6 text-gray-300">
          {description}
        </p>
        <div className="flex gap-4">
          <button 
            onClick={onPrimaryButtonClick}
            className="bg-white text-black px-6 py-4 flex items-center gap-2 rounded hover:bg-white/60 transition"
          >
            <PrimaryIcon /> <span className="text-black font-bold">{primaryButtonText}</span>
          </button>
          <button 
            onClick={onSecondaryButtonClick}
            className="bg-black/30 text-white px-6 py-4 flex items-center gap-2 rounded hover:bg-black/20 transition-all duration-100"
          >
            <SecondaryIcon /> {secondaryButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
