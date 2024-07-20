import React from "react";

const StartTest = () => {
  return (
    <section className="mt-20 flex flex-col gap-3 text-center p-8 items-center">
      <p className="text-center">We take Privacy seriously</p>
      <p className="font-bold text-3xl">Before you get started</p>
      <p className="text-xl font-normal">
        &quot;We Won't share your answers with anyone.
        <br /> (and won't tell you which friends said what about you).&quot;
      </p>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="">Made with Love...</p>
        <p className="fancy-font">Amanulla Mulla</p>
      </div>
      <button className="rounded-3xl p-2 w-28 text-white bg-black">
        Start Test
      </button>
      <p className="text-sm mt-4">Take only 5 minutes</p>
    </section>
  );
};

export default StartTest;
