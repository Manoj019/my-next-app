"use client";
import React, { useState } from "react";

const TrackPo = () => {
  const [formData, setFormData] = useState({
    "Enter PO Number": "",
  });
  const [searchRessult, setSearchResults] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://your-api.com/search", {
        params: formData,
      });
      setSearchResults(res.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold text-start text-teal-950 font-sans mb-6 ml-13">
        Track PO
      </h1>
      <div className="bg-white shadow-md rounded-md p-5 w-300  mx-auto flex flex-wrap gap-4 justify-between mt-6">
        <div className="flex flex-col w-[180px]">
          <label className="flex items-center font-medium mb-1">
            Enter PO Number<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            name="Enter PO Number"
            value={formData["Enter PO Number"]}
            onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex items-end w-[180px]">
          <button
            onClick={fetchData}
            className="w-full bg-teal-950 font-sans  text-white py-2 px-4 rounded-full"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackPo;
