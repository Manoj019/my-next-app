// SearchDashboard.jsx
"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Tooltip from "@/components/Ui/ToolTip";

const SearchDashboard = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    senderId: "",
    receiverId: "",
    isaControl: "",
  });

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showResult, setShowResult] = useState(false); // State to control visibility of the results section

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/search", {
        params: formData, // axios correctly sends formData as query parameters
      });
      setSearchResults(response.data);
      setShowResult(true); // Show the results section
      setSearchTerm(""); // Clear internal table search term on new API fetch
    } catch (err) {
      console.error("Error fetching data:", err);
      setSearchResults([]); // Clear results on error
      setShowResult(false); // Hide results on error
      // Optionally: Add user-facing error message here (e.g., a toast notification)
    }
  };

  return (
    <div className="min-h-screen px-10 py-6">
      <h1 className="text-2xl font-semibold font-sans text-start text-[#0C344B] mb-6">
        General Search
      </h1>

      {/* Search Form */}
      <div className="bg-white shadow-md rounded-md p-6 w-full mx-auto flex flex-wrap gap-4 justify-between">
        {["startDate", "endDate", "senderId", "receiverId", "isaControl"].map(
          (field, index) => (
            <div className="flex flex-col w-[180px]" key={index}>
              <label className="text-sm  text-gray-700 capitalize">
                {field.replace(/([A-Z])/g, " $1")}{" "}
                {field === "startDate" || field === "endDate" ? (
                  <span className="text-red-500">*</span>
                ) : (
                  ""
                )}
              </label>
              <input
                type={field.includes("Date") ? "date" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          )
        )}

        <div className="flex items-end w-[180px]">
          <button
            onClick={fetchData}
            className="w-full bg-teal-950  font-sans text-white py-2 px-4 rounded-full"
          >
            Search
          </button>
        </div>
      </div>
      {/* Documents Section */}
{showResult && (

 <div className="w-full max-w-7xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold font-sans text-teal-950 mb-4">
          Documents
        </h2>
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search within results..."
              className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-md">
  <table className="min-w-full text-sm text-left border border-slate-400">
    <thead className="bg-gray-100 text-xs uppercase border-b border-slate-400">
      <tr>
        <th className="p-2 border border-slate-200 font-sans text-teal-950">Actions</th>
        <th className="p-2 border border-slate-200 font-sans text-teal-950">Date Processed</th>
        <th className="p-2 border border-slate-200 font-sans text-teal-950">ST</th>
        <th className="p-2 border border-slate-200 font-sans text-teal-950">Document Number</th>
        <th className="p-2 border border-slate-200 font-sans text-teal-950">Sender ID</th>
        <th className="p-2 border border-slate-200 font-sans text-teal-950">Sender Name</th>
        <th className="p-2 border border-slate-200 font-sans text-teal-950">Receiver ID</th>
        <th className="p-2 border border-slate-200 font-sans text-teal-950">Receiver Name</th>
        <th className="p-2 border border-slate-200 font-sans text-teal-950">Type</th>
      </tr>
    </thead>
    <tbody>
      {searchResults
        .filter((doc) =>
          Object.values(doc).some((val) =>
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
        .map((doc, i) => (
          <tr key={i} className="border-t border-slate-400">
            <td className="p-2 border border-slate-200 text-center">
              <div className="flex gap-2 justify-center items-center"> <Tooltip text='view raw document'><button className="relative bg-slate-100 h-6 w-6 rounded-sm shadow-[inset_0_2px_6px_0_rgba(0,0,0,0.2)] flex items-center justify-center">
                  <Image
                    src="/eye.svg"
                    alt="View"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button></Tooltip>
                
                <button className="bg-slate-100 h-6 w-6 rounded-sm shadow-[inset_0_2px_6px_0_rgba(0,0,0,0.2)] flex items-center justify-center text-xs font-semibold text-gray-800 italic">
                  i
                </button>
              </div>
            </td>
            <td className="p-2 border border-slate-200 font-sans">{doc.dateProcessed}</td>
            <td className="p-2 border border-slate-200 font-sans">
              <span className="bg-blue-500 text-white px-2 py-2 rounded-full">
                {doc.st}
              </span>
            </td>
            <td className="p-2 border border-slate-200 font-sans">{doc.documentNumber}</td>
            <td className="p-2 border border-slate-200 font-sans">{doc.senderId}</td>
            <td className="p-2 border border-slate-200 font-sans">{doc.senderName}</td>
            <td className="p-2 border border-slate-200 font-sans">{doc.receiverId}</td>
            <td className="p-2 border border-slate-200 font-sans">{doc.receiverName}</td>
            <td className="p-2 border border-slate-200 font-sans">{doc.type}</td>
          </tr>
        ))}
    </tbody>
  </table>

  {/* Conditional Message */}
  {searchResults.length === 0 && (
    <p className="text-center py-4 text-gray-500">
      {searchTerm
        ? `No matching results for "${searchTerm}".`
        : "No results found based on your search criteria."}
    </p>
  )}
</div>

        </div>
      </div>
)}
      

     
    </div>
  );
};

export default SearchDashboard;
