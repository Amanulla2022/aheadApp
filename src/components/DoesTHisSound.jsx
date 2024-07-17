import React from "react";
import redGhost from "../images/ghost-red.png";
import cardData from "../data/cardData";

const DoesThisSound = () => {
  return (
    <section className="mt-12 mb-32 p-4 md:px-20">
      <div className="flex items-center justify-start mb-5">
        <h1 className="text-4xl md:text-6xl font-bold px-4">
          Does this sound familiar...
        </h1>
        <img
          className="h-16 w-16 md:h-24 md:w-24"
          src={redGhost}
          alt="Red Angry Ghost"
        />
      </div>
      <div className="flex space-x-4 md:space-x-8 items-center overflow-x-auto p-12 hide-scrollbar">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`rounded-2xl ${card.bgColor} min-w-[250px] md:min-w-[350px] p-4 flex flex-col gap-4 transform-gpu hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out`}
          >
            <img
              src={card.emoji}
              alt="Emoji"
              className="h-6 w-6 md:h-8 md:w-8"
            />
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoesThisSound;
