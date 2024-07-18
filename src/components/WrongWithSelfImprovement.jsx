import React from "react";
import sadGhost from "../images/ghost-sad.png";
import data from "../data/improvementData";

const WrongWithSelfImprovement = () => {
  return (
    <section className="px-20 mt-10 mb-24">
      <div className="flex flex-col justify-start items-start">
        <p className="text-lg  md:text-xl font-bold text-black">
          Wrong with self improvement & how we're fixing it.
        </p>
        <div className="flex gap-4">
          <h1 className="md:text-6xl text-3xl pb-3 font-bold text-black">
            Self Improvement. Ugh.
          </h1>
          <img
            className="md:h-24 h-16 w-16 md:w-24"
            src={sadGhost}
            alt="sad ghost"
          />
        </div>
      </div>
      {data.map((item) => (
        <div key={item.id} className="flex justify-center w-full mt-4">
          <div className="max-w-[40rem] relative pl-8">
            <div style={{ left: "-12px" }} className="absolute">
              🟣
            </div>
            <p className="text-xl font-bold">{item.title}</p>
            <p className="mt-3">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WrongWithSelfImprovement;
