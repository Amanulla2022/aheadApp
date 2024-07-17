import React from "react";
import phoneImage from "../images/phone-image.png";
import appleLogo from "../images/apple-image.png";
import starIcon from "../images/starIcon.svg";
import voiletGhost from "../images/ghost-voilet.png";
import angryGhost from "../images/ghost-red.png";
import sadGhost from "../images/ghost-sad.png";

const Home = () => {
  return (
    <div className="flex justify-center items-center bg-violet-100 relative rounded-3xl flex-row overflow-hidden w-full">
      <div className="flex items-start justify-start flex-col w-1/2 px-10 relative">
        <div className="w-full">
          <p className="text-lg">Ahead app</p>
        </div>
        <div>
          <p className="mt-5 text-5xl font-bold">
            Master Your Life by Mastering Emotions
          </p>
        </div>
        <div className="mt-10 flex gap-10">
          <div className="flex gap-2 bg-black text-white rounded-lg px-2">
            <img
              className="cursor-pointer h-14 w-14"
              src={appleLogo}
              alt="Apple Play Store"
            />
            <div className="flex flex-col">
              <p>Download on the </p>
              <p>App Store</p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="flex">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <img
                    key={index}
                    className="h-5 w-5 mr-1"
                    src={starIcon}
                    alt="Star Icon"
                  />
                ))}
            </div>
            <p className="text-gray-500">100+ AppStore reviews</p>
          </div>
        </div>
      </div>

      {/* dashed circle */}
      <div className="w-1/2 flex justify-center items-center relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute h-3/4 w-3/4 border-4 border-white border-dashed  rounded-[50%]">
            <img
              className="absolute bottom-10 left-10 h-16 w-16 rounded-2xl"
              src={voiletGhost}
              alt="Violet Ghost"
            />
            <img
              className="absolute top-32 -right-4 h-16 w-16 rounded-2xl"
              src={angryGhost}
              alt="Violet Ghost"
            />
            <img
              className="absolute top-10 left-10 h-16 w-16  rounded-2xl"
              src={sadGhost}
              alt="Violet Ghost"
            />
          </div>
        </div>

        <img className="w-full rounded-xl z-10" src={phoneImage} alt="Phone" />
      </div>
    </div>
  );
};

export default Home;
