"use client";

import React, { useState, useEffect } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  const toggleTooltip = () => setShow((prev) => !prev);

  return (
    <div
      className="relative inline-block cursor-pointer  outline-dotted outline-1 rounded-full "
      onClick={toggleTooltip}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          className="
            absolute left-1/2 bottom-full mb-2 -translate-x-1/2
            whitespace-nowrap rounded-xl bg-slate-100 
            px-3 py-1.5 text-sm text-neutral-400 z-10 shadow-md transition-all
          "
        >
          {text}
        </span>
      )}
    </div>
  );
};
export default Tooltip;
