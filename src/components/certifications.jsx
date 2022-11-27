import React from "react";
function Certifications({ certificateRef }) {
  return (
    <div ref={certificateRef} className=" mb-40 mx-10 md:mx-20">
      <h1 className="mt-10 text-4xl md:text-5xl mb- 1 md:mb-3 ">
        Certifications
      </h1>
      <a
        className="mt-20"
        href="https://www.credly.com/badges/26fffd83-c9b5-4e0f-a651-58c976075a9d?source=linked_in_profile"
        target="_blank"
      >
        <img src="public\assets\coursera.png" className="mt-10"></img>
      </a>
      <div className="flex flex-col mt-5">
        <h1 className="text-xl font-semibold">
          Google Project Management Certificate
        </h1>
        <h3 className="text-gray-500">Coursera</h3>
        <p className="text-gray-500">Issued Mar 2022</p>
      </div>
    </div>
  );
}
export default Certifications;
