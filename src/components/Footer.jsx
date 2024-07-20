import React from "react";
import logo from "../images/ahead-logo.jpg";
import apple from "../images/apple-image.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer id="footer" className="mt-16 border-gray-300  py-12 px-12 border-t">
      <p className="text-xl font-bold text-violet-700 flex justify-center">
        <a href="#home">
          <img className="h-16 w-16 rounded-lg" alt="logo" src={logo} />
        </a>
      </p>
      <p className="text-xl font-bold text-violet-700 text-center">ahead</p>
      <div className="flex gap-8 items-center justify-center mt-5 font-semibold">
        <p className="flex justify-center items-center gap-2">
          <FaLocationDot className="bg-blue-300 p-1 text-xl rounded-full" />
          A/P Ainapur, Belguam Karnataka
        </p>
        <p className="flex justify-center items-center gap-2">
          <MdEmail className="bg-blue-300 p-1 text-xl rounded-full" />
          amanmulla167@gmail.com
        </p>
      </div>
      <div className="my-10 flex justify-center items-center  gap-10">
        <div className="flex gap-2 bg-black text-white rounded-lg px-2">
          <img
            className="cursor-pointer h-14 w-14"
            src={apple}
            alt="Apple Play Store"
          />

          <div className="flex flex-col">
            <p>Download on the </p>
            <p>App Store</p>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500">
        &copy; 2024 Ahead App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
