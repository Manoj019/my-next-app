import React from "react";
import ToolTip from "../../../../components/Ui/ToolTip";
const childReports = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold mb-4 p-4">Child Reports <ToolTip text="This is the description box. Any description of different lengths will be displayed">
        <button className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-black text-[12px]  font-light">
          i
        </button>
      </ToolTip></h1>
      
      <div className="">
        <div className=" w-full grid grid-cols-3 gap-4 p-4  ">
          {" "}
          {/**container 1 */}
          <div className="  w-full col-span-4  bg-gray-200 rounded-sm flex justify-between items-center p-4 ">
            01
            <img
              src="/angledown.svg"
              alt="Toggle"
              className={`w-5 h-5  transition-transform duration-300`}
            />
          </div>
          <div className=" w-full col-span-4 bg-gray-200 rounded-sm flex justify-between items-center p-4">
            02
            <img
              src="/angledown.svg"
              alt="Toggle"
              className={"w-5 h-5 transition-transform duration-300"}
            />
          </div>
        </div>
        <div className="p-4">
          {" "}
          {/**container 2 */}
          <h1 className="text-lg font-semibold mb-4">Child Reports <ToolTip text="This is the description box. Any description of different lengths will be displayed">
        <button className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-black text-[12px]  font-light">
          i
        </button>
      </ToolTip> </h1>
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Left Half */}
            <div className="grid gap-4">
              <div className="bg-gray-200 rounded-sm flex justify-between items-center p-4">
                03
                <img
                  src="/angledown.svg"
                  alt="Toggle"
                  className="w-5 h-5 transition-transform duration-300"
                />
              </div>
              <div className="bg-gray-200 rounded-sm flex justify-between items-center p-4">
                04
                <img
                  src="/angledown.svg"
                  alt="Toggle"
                  className="w-5 h-5 transition-transform duration-300"
                />
              </div>
            </div>
            {/* Right Half */}
            <div className="grid gap-4">
              <div className="bg-gray-200 rounded-sm flex justify-between items-center p-4">
                05
                <img
                  src="/angledown.svg"
                  alt="Toggle"
                  className="w-5 h-5 transition-transform duration-300"
                />
              </div>
              <div className="bg-gray-200 rounded-sm flex justify-between items-center p-4">
                06
                <img
                  src="/angledown.svg"
                  alt="Toggle"
                  className="w-5 h-5 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default childReports;
