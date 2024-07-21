import React, { useState } from "react";
import vacancies from "../data/vacancies";

const Vacancies = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="mt-20 py-8 px-24 h-auto">
      <h1 className="text-5xl font-bold">Open Vacancies</h1>
      <div className="mt-12 flex flex-wrap justify-between gap-12">
        {vacancies.map((vac, index) => (
          <div
            key={index}
            className={`cursor-pointer bg-pink-50 p-6 rounded-lg shadow-md flex-grow basis-1/4 transition-all duration-300 ${
              hoveredIndex === index ? "md:h-60 h-80" : "md:h-40 h-60"
            } relative`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h2 className="text-2xl font-bold mb-2">{vac.jobTitle}</h2>
            <ul className="list-disc pl-5">
              <li className="text-lg">{vac.position}</li>
              <li className="text-lg">{vac.location}</li>
              <li className="text-lg">{vac.pay}</li>
            </ul>
            {hoveredIndex === index && (
              <button className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded">
                More Details
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vacancies;
