import React from "react";
import headerLogo from "../images/ahead-logo.jpg";

const Header = () => {
  return (
    <header className="flex justify-between h-20 items-center py-12 px-10 w-screen">
      <img
        className="h-20 w-20 rounded-2xl"
        src={headerLogo}
        alt="Header Logo"
      />
      <ul className="flex gap-6 items-center">
        <li className="cursor-pointer font-semibold ">Emotions</li>
        <li className="cursor-pointer font-semibold ">Manifesto</li>
        <li className="cursor-pointer font-semibold ">Self awareness test</li>
        <li className="cursor-pointer font-semibold ">Work with us</li>
      </ul>
      <button className="cursor-pointer text-white bg-black rounded-full px-4 py-2 font-semibold">
        Download App
      </button>
    </header>
  );
};

export default Header;
