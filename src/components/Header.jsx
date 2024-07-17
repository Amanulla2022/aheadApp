import React, { useState } from "react";
import headerLogo from "../images/ahead-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 w-screen bg-white fixed top-0 left-0 right-0 z-20 shadow-md">
      <img
        className="h-12 w-12 rounded-2xl"
        src={headerLogo}
        alt="Header Logo"
      />
      <ul
        className={`flex-col md:flex-row flex gap-6 items-center md:static absolute md:flex ${
          isMenuOpen ? "top-16" : "-top-96"
        } left-0 right-0 bg-white md:bg-transparent transition-all duration-300`}
      >
        <li className="cursor-pointer font-semibold ">Emotions</li>
        <li className="cursor-pointer font-semibold ">Manifesto</li>
        <li className="cursor-pointer font-semibold ">Self awareness test</li>
        <li className="cursor-pointer font-semibold ">Work with us</li>
      </ul>
      <button
        className="md:hidden block cursor-pointer text-black"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <button className="hidden md:block cursor-pointer text-white bg-black rounded-full px-4 py-2 font-semibold">
        Download App
      </button>
    </header>
  );
};

export default Header;
