"use client";

import React, { useState } from "react";

const data = [
  { tittle: "01", content: "Accordion 1 Content" },
  { tittle: "02", content: "Accordion 2 Content" },
  { tittle: "03", content: "Accordion 3 Content" },
];

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (index) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  return (
    <div className=" w-80 flex items-center justify-center  p-4">
      <div className="space-y-4 w-full max-w-md  rounded-md">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-200  shadow ">
            <button
              className="w-full flex justify-between items-center p-4    "
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-semibold">{item.tittle}</span>
              <img
                src="/angledown.svg"
                alt="Toggle"
                className={`w-3 h-3 transition-transform duration-300 ${
                  isOpen === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isOpen === index && <div className="p-4 ">{item.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
