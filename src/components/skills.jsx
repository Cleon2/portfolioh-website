import React, { useState } from "react";
import Logo from "./logo";

function Skills({ skillsRef }) {
  const [showReact, setReact] = useState(false);
  const [showRedux, setRedux] = useState(false);
  const [showExpress, setExpress] = useState(false);
  const [showNodeJs, setNodeJs] = useState(false);
  return (
    <div
      ref={skillsRef}
      className=" mx-10 mb-10 mt-20 md:mx-20 pt-10 pb-6 grid grid-cols-1 md:grid-cols-2 md:content-center"
    >
      <div className="my-auto">
        <h1 className="text-4xl md:text-5xl mb- 1 md:mb-3">Skills</h1>
        <p className="text-base md:text-xl mt-4 mb-0.5 font-medium">
          Experienced in:
          <div className="mt-4 flex flex-wrap gap-4 flex-row">
            <div className="flex flex-col text-center">
              <img
                src="\assets\react.svg"
                onMouseEnter={() => {
                  setReact(true);
                }}
                onMouseLeave={() => {
                  setReact(false);
                }}
              />
              <Logo state={showReact} name="React" />
            </div>
            <div className="flex flex-col text-center">
              <img
                src="\assets\reduxImage.svg"
                onMouseEnter={() => {
                  setRedux(true);
                }}
                onMouseLeave={() => {
                  setRedux(false);
                }}
              />
              <Logo state={showRedux} name="Redux" />
            </div>
            <div className="flex flex-col text-center">
              <img
                src="\assets\express-js-icon.svg"
                onMouseEnter={() => {
                  setExpress(true);
                }}
                onMouseLeave={() => {
                  setExpress(false);
                }}
              />
              <Logo state={showExpress} name="ExpressJs" />
            </div>
            <div className="flex flex-col text-center">
              <img
                src="\assets\nodejs-seeklogo.com.svg"
                onMouseEnter={() => {
                  setNodeJs(true);
                }}
                onMouseLeave={() => {
                  setNodeJs(false);
                }}
              />
              <Logo state={showNodeJs} name="NodeJs" />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Skills;
