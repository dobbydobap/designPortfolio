import React, { useEffect, useState } from "react";
import nameLogo from "../assets/images/nameLogo.png";
import blue from "../assets/images/blue.png";
import red from "../assets/images/red.png";
import yellow from "../assets/images/yellow.png";
import green from "../assets/images/green.png";

function Header() {
  const [userAvatar, setUserAvatar] = useState(blue);

  useEffect(() => {
    const selectedUser = localStorage.getItem("selectedUser");

    // Set the avatar based on the user type
    if (selectedUser === "Recruiter") {
      setUserAvatar(blue);
    } else if (selectedUser === "Aspiring Developer") {
      setUserAvatar(red);
    } else if (selectedUser === "Stalker") {
      setUserAvatar(yellow);
    } else if (selectedUser === "Investor") {
      setUserAvatar(green);
    } else {
      setUserAvatar(blue); 
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
      <div className="flex items-center justify-between px-15 py-4">
        <div className="flex items-center">
          <img src={nameLogo} alt="Shaurya Verma" className="h-8 md:h-10" />
        </div>

        <nav className="hidden md:flex space-x-6"></nav>

        <div className="flex items-center space-x-4">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="h-8 w-8 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
