import React from "react";
import vacancies from "../data/vacancies";

const Vacancies = () => {
  return (
    <section className="mt-20 py-8 px-24 h-auto">
      <h1 className="text-5xl font-bold">Open Vacancies</h1>
      <div className="mt-12 flex flex-wrap justify-between gap-12">
        {vacancies.map((vac, index) => (
          <div
            key={index}
            className="bg-pink-50 p-6 rounded-lg shadow-md flex-grow basis-1/4"
          >
            <h2 className="text-2xl font-bold mb-2">{vac.jobTitle}</h2>

            <li className="text-lg">{vac.position}</li>
            <li className="text-lg">{vac.location}</li>
            <li className="text-lg">{vac.pay}</li>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vacancies;
