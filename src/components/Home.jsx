import React from "react";
import phoneImage from "../images/phone-image.png";
import appleLogo from "../images/apple-image.png";
import starIcon from "../images/starIcon.svg";
import voiletGhost from "../images/ghost-voilet.png";
import angryGhost from "../images/ghost-red.png";
import sadGhost from "../images/ghost-sad.png";
import green from "../images/greenHalf.png";

const Home = () => {
  return (
    <div
      id="home"
      className="flex justify-center items-center bg-violet-100 relative rounded-3xl flex-col md:flex-row overflow-hidden w-full pt-20 mt-28 md:pt-32"
    >
      <img
        className="absolute top-0 left-20 h-32 w-32 z-10 green-image"
        src={green}
        alt="Green Leaf"
      />
      <div
        className="absolute h-8 w-8 bg-pink-200 top-[10%]  left-[50%] rounded-full z-0 "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="absolute h-8 w-8 bg-pink-300 md:top-[70%] top-[50%] left-[0] rounded-full z-0 "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="absolute h-8 w-8 bg-red-200 md:top-[20%] top-[10%] left-[40%] rounded-full z-0 "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="absolute h-3 w-3 bg-red-500 md:top-[20%] top-[10%]  left-[40%] rounded-full z-0 "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="absolute h-12 w-12 bg-red-200 top-2 right-[15%] md:right-[30%] rounded-full z-0 "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        className="absolute h-16 w-16 bg-red-500 -bottom-12 left-[40%] rounded-full z-0 "
        style={{
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div className="flex items-start justify-start flex-col w-full md:w-1/2 px-10 relative">
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
      <div className="w-full md:w-1/2 flex justify-center items-center relative z-10">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute h-3/4 w-3/4 border-4 border-white border-dashed rounded-[50%]">
            <img
              className="absolute bottom-10 left-0 md:left-10 md:h-16 h-12 md:w-16 w-12 rounded-2xl"
              src={voiletGhost}
              alt="Violet Ghost"
            />
            <img
              className="absolute top-32 -right-4 h-16 w-16 rounded-2xl"
              src={angryGhost}
              alt="Angry Ghost"
            />
            <img
              className="absolute top-10 left-10 h-16 w-16 rounded-2xl"
              src={sadGhost}
              alt="Sad Ghost"
            />
          </div>
        </div>

        <img className="w-full rounded-xl z-10" src={phoneImage} alt="Phone" />
      </div>
    </div>
  );
};

export default Home;
