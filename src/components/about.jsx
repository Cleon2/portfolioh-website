import React from "react";

function About({ aboutRef }) {
  return (
    <div ref={aboutRef} className="flex flex-col mx-10 md:mx-20 pt-20 pb-6">
      <h1 className="text-4xl md:text-5xl mb- 1 md:mb-3">About Me</h1>
      <p className="text-base md:text-xl mt-2 font-medium break-words md:w-4/12">
        Currently a Year 1 CS undergraduate at NUS. I'm passionate about
        entrepreneurship, and enjoy applying my technical skills to solve real
        world problems!
      </p>
    </div>
  );
}

export default About;
