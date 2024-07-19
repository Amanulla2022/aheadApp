import React from "react";
import sadGhost from "../images/ghost-sad.png";
import data from "../data/improvementData";

const WrongWithSelfImprovement = () => {
  return (
    <section className="px-20 mt-10 mb-24">
      <div className="flex flex-col justify-start items-start">
        <p className="text-lg md:text-xl font-bold text-black">
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
