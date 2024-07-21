import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import sadGhost from "../images/ghost-sad.png";
import data from "../data/improvementData";

const WrongWithSelfImprovement = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ghostRef, inView: ghostInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleProps = useSpring({
    opacity: titleInView ? 1 : 0,
    transform: titleInView ? "translateX(0)" : "translateX(-50%)",
    config: { duration: 1500 },
  });

  const ghostProps = useSpring({
    opacity: ghostInView ? 1 : 0,
    transform: ghostInView ? "translateX(0)" : "translateX(50%)",
    config: { duration: 1500, delay: 300 },
  });

  return (
    <section id="self-awareness-test" className="px-20 mt-10 mb-24">
      <div className="flex flex-col justify-start items-start">
        <animated.p
          className="text-lg md:text-xl font-bold text-black"
          style={titleProps}
          ref={titleRef}
        >
          Wrong with self improvement & how we're fixing it.
        </animated.p>
        <div className="flex gap-4">
          <animated.h1
            className="md:text-6xl text-3xl pb-3 font-bold text-black"
            style={titleProps}
            ref={titleRef}
          >
            Self Improvement. Ugh.
          </animated.h1>
          <animated.img
            className="md:h-24 h-16 w-16 md:w-24"
            src={sadGhost}
            alt="sad ghost"
            style={ghostProps}
            ref={ghostRef}
          />
        </div>
      </div>
      <div className="flex flex-col overflow-y-auto justify-center items-center h-80 space-y-4 cursor-pointer pt-60">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="hover:text-black text-gray-400 rounded-lg md:px-6 w-full md:w-2/3 relative"
          >
            {index !== data.length - 1 && (
              <div className="absolute left-[22px] top-5 h-full border-l-2 border-gray-400"></div>
            )}
            <div className="relative pl-8">
              <div className="absolute left-3 md:-left-3 h-8 w-8">🟣</div>
              <p className="text-xl font-bold">{item.title}</p>
              <p className="mt-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WrongWithSelfImprovement;
