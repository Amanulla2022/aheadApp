import React from "react";
import ghost from "../images/ghost-voilet.png";
import workWithUsData from "../data/workWithUsData";

const WorkWithUs = () => {
  return (
    <div className="md:px-20 my-32">
      <section className="mt-16 rounded-2xl  bg-violet-100 p-12 px-16">
        <div className="flex  justify-between items-center text-5xl font-bold">
          <span className="">Work with us</span>
          <span className="text-violet-800">ahead</span>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-20 overflow-hidden">
          <div className="grow">
            <div className="rounded-2xl bg-white  pt-8 max-w-[30rem] shadow-lg">
              <img width={60} height={60} src={ghost} alt="ghost" />
              <div className="flex flex-col gap-3 p-4">
                <h2 className="font-bold">About</h2>
                <p className="font-normal">
                  At ahead our goal is to make self-improvement fun and lasting.
                  We know there's a way how to make it work. And thst's what
                  aHead is all about!
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-8 p-4 rounded-2xl  mt-8 bg-orange-50">
                <h2 className="font-bold">Product</h2>
                <p className="font-normal">
                  Sure, you could spend ages reading books or sitting in
                  seminars on how to become a better spouse, parent, or manager
                  - like we did...
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-h-[75vh] overflow-y-auto overflow-x-hidden md:pr-6 custom-scrollbar">
            {workWithUsData.map((item, index) => (
              <div
                className="p-4 bg-white rounded-2xl space-y-6 w-full md:w-[20rem]"
                key={index}
              >
                <h2 className="font-bold">{item.title}</h2>
                <p className="font-normal">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;
