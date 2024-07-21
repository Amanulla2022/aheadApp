import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const StartTest = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionProps = useSpring({
    opacity: sectionInView ? 1 : 0,
    scale: sectionInView ? 1 : 0.5,
    config: { duration: 1000 },
  });

  const textProps = useSpring({
    opacity: sectionInView ? 1 : 0,
    transform: sectionInView ? "translateX(0)" : "translateX(-10px)",
    config: { duration: 1300 },
  });

  return (
    <section
      ref={sectionRef}
      className="mt-20 flex flex-col gap-3 text-center p-8 items-center"
    >
      <p className="text-center">We take Privacy seriously</p>
      <p className="font-bold text-3xl">Before you get started</p>
      <p className="text-xl font-normal">
        &quot;We Won't share your answers with anyone.
        <br /> (and won't tell you which friends said what about you).&quot;
      </p>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="">Made with Love...</p>
        <animated.p style={textProps} className="fancy-font">
          Amanulla Mulla
        </animated.p>
      </div>

      <animated.section
        style={sectionProps}
        className="rounded-3xl p-2 w-28 text-white bg-black"
      >
        Start Test
      </animated.section>
      <p className="text-sm mt-4">Take only 5 minutes</p>
    </section>
  );
};

export default StartTest;
