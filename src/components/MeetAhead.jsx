import React from "react";
import flower from "../images/flower.png";
import firstPlace from "../images/1st-place.png";
import ghost from "../images/ghost-voilet.png";

const MeetAhead = () => {
  return (
    <section className="px-20 relative mt-7 mb-32">
      <img
        className="absolute -top-4 right-32 h-8 w-8 z-10"
        src={flower}
        alt="flower"
      />
      <div className="overflow-hidden relative flex flex-col rounded-xl bg-pink-100 md:h-[450px] h-full">
        <div className="flex flex-col mt-20 ml-20 gap-3">
          <div>
            <p className="text-md text-left">Built Out of Frustration</p>
          </div>
          <div>
            <p className="text-3xl font-bold">Meet the ahead app</p>
          </div>
        </div>
        <div
          className="absolute h-48 w-48 bg-pink-200 top-[50%] md:top-[70%] left-[5%] rounded-full z-0 "
          style={{
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div className="flex md:flex-row flex-col ">
          <div className="basis-1/2 flex flex-col justify-center items-center mt-10 -ml-32 gap-3 relative">
            <div
              className="absolute h-32 w-32 bg-white top-[60%] left-[50%] rounded-full z-0 border-8 border-gray-200"
              style={{
                transform: "translate(-50%, -50%)",
              }}
            ></div>

            <img className="h-8 w-8 z-10" src={firstPlace} alt="flower" />
            <img className="h-24 w-16 z-10" src={ghost} alt="ghost" />
          </div>
          <div className="basis-1/2 flex flex-col items-center ">
            <div className="flex flex-col gap-12 w-4/5 items-center ">
              <div className="mt-20 md:mt-0">
                <p className="text-lg">
                  A personalized pocket coach that provides bite-sized,
                  science-driven tools to boost emotional intelligence.
                </p>
              </div>
              <div>
                <p className="text-lg">
                  Think of it as a pocket cheerleader towards a better, more
                  fulfilling life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetAhead;
