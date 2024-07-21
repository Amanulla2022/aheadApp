import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import redGhost from "../images/ghost-red.png";
import cardData from "../data/cardData";

const DoesThisSound = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ghostRef, inView: ghostInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: cardRef, inView: cardInView } = useInView({
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

  const cardProps = useSpring({
    opacity: cardInView ? 1 : 0,
    transform: cardInView ? "translateX(0)" : "translateX(50%)",
    config: { duration: 1500, delay: 600 },
  });

  return (
    <section id="manifesto" className="mt-12 mb-32 p-4 md:px-20">
      <div className="flex items-center justify-start mb-5">
        <animated.h1
          className="text-4xl md:text-6xl font-bold px-4"
          style={titleProps}
          ref={titleRef}
        >
          Does this sound familiar...
        </animated.h1>
        <animated.img
          className="h-16 w-16 md:h-24 md:w-24"
          src={redGhost}
          alt="Red Angry Ghost"
          style={ghostProps}
          ref={ghostRef}
        />
      </div>
      <animated.div
        className="flex space-x-4 md:space-x-8 items-center overflow-x-auto p-12 hide-scrollbar"
        style={cardProps}
        ref={cardRef}
      >
        {cardData.map((card) => (
          <animated.div
            key={card.id}
            className={`rounded-2xl ${card.bgColor} min-w-[250px] md:min-w-[350px] p-4 flex flex-col gap-4 transform-gpu hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}
            style={cardProps}
          >
            <img
              src={card.emoji}
              alt="Emoji"
              className="h-6 w-6 md:h-8 md:w-8"
            />
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </animated.div>
        ))}
      </animated.div>
    </section>
  );
};

export default DoesThisSound;
