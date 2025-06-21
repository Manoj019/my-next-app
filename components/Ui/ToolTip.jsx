"use client";
import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <div
          className="
            absolute top-full ml-10 p-1 mt-1 left-2/2 -translate-x-1/2
            bg-black text-white text-xs px-3 py-1 rounded shadow-lg 
            whitespace-nowrap z-50
          "
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
