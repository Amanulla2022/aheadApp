import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import phoneImage from "../images/phone-image.png";
import appleLogo from "../images/apple-image.png";
import starIcon from "../images/starIcon.svg";
import voiletGhost from "../images/ghost-voilet.png";
import angryGhost from "../images/ghost-red.png";
import sadGhost from "../images/ghost-sad.png";
import green from "../images/greenHalf.png";

const Home = () => {
  const [rotations, setRotations] = useState(0);
  const [stopRotations, setStopRotations] = useState(false);

  const { ref: homeRef, inView: homeInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (rotations >= 2) {
      setStopRotations(true);
    }
  }, [rotations]);

  const rotatingProps = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: { duration: 2000 },
    loop: { reverse: true },
    onRest: () => {
      setRotations((prev) => prev + 1);
    },
    reset: !stopRotations && homeInView,
  });

  const ghostProps = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(-360deg)" },
    config: { duration: 1000, bounce: 0.4 },
    loop: rotations < 2 && homeInView,
  });

  return (
    <div
      id="home"
      className="flex justify-center items-center bg-violet-100 relative rounded-3xl flex-col md:flex-row overflow-hidden w-full pt-20 mt-28 md:pt-32"
      ref={homeRef}
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
          <animated.div
            style={{
              ...rotatingProps,
              border: "3px dashed white",
              borderStyle: "dashed",
            }}
            className="absolute rounded-full h-96 w-96 border-dashed border-white"
          >
            {/* red ghost */}
            <animated.div
              style={{ ...ghostProps, top: "55px" }}
              className="absolute h-16 w-12"
            >
              <img
                height={100}
                width={100}
                className="h-full w-full"
                src={sadGhost}
                alt="Sad Ghost"
              />
            </animated.div>

            <animated.div
              style={{
                ...ghostProps,
                right: "-30px",
                top: "50%",
                transform: "translate(-50%,-50%)",
              }}
              className="absolute h-16 w-14"
            >
              <img
                height={100}
                width={100}
                className="h-full w-full"
                src={angryGhost}
                alt="Angry Ghost"
              />
            </animated.div>
            {/* violet ghost */}
            <animated.div
              style={{ ...ghostProps, bottom: "-22px", right: "50%" }}
              className="absolute h-14 w-12"
            >
              <img
                height={100}
                width={100}
                src={voiletGhost}
                alt="Violet Ghost"
              />
            </animated.div>
          </animated.div>
        </div>

        <img className="w-full rounded-xl z-10" src={phoneImage} alt="Phone" />
      </div>
    </div>
  );
};

export default Home;
