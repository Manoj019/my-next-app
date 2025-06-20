"use client";

import React from "react";
import ToolTip from "../../../components/Ui/ToolTip.jsx";
import Accordion from "../../../components/Ui/Accordion.jsx";

const ChildPage = () => {
  console.log("childpage component rendering");
  return (
    //<>
    //    <div class=" flex flex-col justify-end grid grid-cols-3 gap-5 p-4 place-items-center ">
    //   <div class=" w-90 col-span-4  bg-zinc-600 rounded-sm">01</div>
    //   <div class="w-90 col-span-4 bg-zinc-600 rounded-sm">02</div>
    //   <div class="w-90 col-span-4 bg-zinc-600 rounded-sm">03</div>
    //   <div class="w-90 col-span-4 bg-zinc-600 rounded-sm">04</div>
    //   <div class="w-90 col-span-4 bg-zinc-600 rounded-sm">05</div>
    //   <div class="w-90 col-span-4 bg-zinc-600 rounded-sm">06</div>
    //   <div class="w-90 col-span-4 bg-zinc-600 rounded-sm">07</div>
    // </div></>
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <h2 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-2xl font-semibold text-green-800">
        This is the Child Page
      </h2>

      <div className="flex flex-col items-center space-y-4">
        <ToolTip text="This is the description box. Any description of different lengths will be displayed">
          <button className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-black text-[12px]  font-light">
            i
          </button>
        </ToolTip>

        <Accordion />
      </div>
    </div>
  );
};

export default ChildPage;
