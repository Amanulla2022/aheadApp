import React from "react";
import steps from "../data/abou-you/stepsData";
import people from "../data/abou-you/peopleData";

const WhatPeopleThinksAboutYou = () => {
  return (
    <section className="my-16 rounded-xl bg-blue-50 md:p-10 mx-8 md:mx-24">
      <h3 className="text-center text-gray-600 text-lg font-semibold">
        Let your friends, family, and co-workers (anonymously) rate your social
        skills
      </h3>
      <h1 className="text-5xl font-bold text-center mt-4">
        Ever wondered what others think of you?
      </h1>
      <div className="mt-8 flex justify-center relative">
        <div className="absolute top-6 w-3/4 border-t border-yellow-700 h-4 border-dashed"></div>
        <div className="flex justify-evenly w-[70rem] z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <img className="h-12 w-12" src={step.img} alt={step.alt} />
              <p className="text-center mt-2">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <div className="shadow-2xl bg-white rounded-xl w-[50rem] p-6 py-24 relative">
          <div className="flex justify-between">
            {people.map((person, index) => (
              <div
                key={index}
                className={`h-4 w-4 rounded-full bg-${person.color} relative z-10`}
              >
                <p
                  className={`absolute text-white p-2 bg-${person.color} rounded ${person.position}`}
                >
                  {person.label}
                </p>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-gray-400 absolute top-1/2 w-[85%] md:w-[92%] z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default WhatPeopleThinksAboutYou;
