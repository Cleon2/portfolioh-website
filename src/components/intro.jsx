import React from "react";

function Intro() {
  return (
    <div className=" mx-10 md:mx-20 pt-20 pb-6 grid grid-cols-1 md:grid-cols-2 md:content-center">
      <div className="my-auto">
        <h1 className="text-4xl md:text-7xl mb- 1 md:mb-3">
          Hey there! I'm <span className="font-bold">Cleon</span>
        </h1>
        <p className="text-base md:text-xl mt-2 mb-0.5 font-medium">
          A computer science undergrad at NUS SOC.
        </p>
      </div>

      <img
        className="w-full object-cover w-5/6 rounded md:w-1/2 md:justify-self-end md:mr-10"
        src="\assets\profileee.jpg"
      />
    </div>
  );
}

export default Intro;
