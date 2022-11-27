import React from "react";

function Logo({ state, name }) {
  return (
    <span
      className={
        state
          ? `text-opacity-100 text-xs text-gray-500 transition duration-500 ease-in text-opacity-100`
          : `text-gray-400 text-xs transition duration-500 ease-out text-opacity-0`
      }
    >
      {name}
    </span>
  );
}

export default Logo;
