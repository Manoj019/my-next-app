// SearchDashboard.jsx
'use client';
import React, { useState } from 'react';
import axios from 'axios';



const SearchDashboard = () => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    senderId: '',
    receiverId: '',
    isaControl: '',
  });

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://your-api.com/search', {
        params: formData,
      });
      setSearchResults(response.data);
    } catch (err) {
      console.error('Error fetching data', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
     
      <h1 className="text-3xl font-semibold text-start text-[#0C344B] mb-6">General Search</h1>

      {/* Search Form */}
      <div className="bg-white shadow-md rounded-md p-6 w-full  mx-auto flex flex-wrap gap-4 justify-between">
        {['startDate', 'endDate', 'senderId', 'receiverId', 'isaControl'].map((field, index) => (
          <div className="flex flex-col w-[180px]" key={index}>
            <label className="text-sm font-medium text-gray-700 capitalize">
              {field.replace(/([A-Z])/g, ' $1')} {field === 'startDate' || field === 'endDate' ? <span className="text-red-500">*</span> : ''}
            </label>
            <input
              type={field.includes('Date') ? 'date' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}

        <div className="flex items-end w-[180px]">
          <button onClick={fetchData} className="w-full bg-[#0C344B]  text-white py-2 px-4 rounded-full">
            Search
          </button>
        </div>
      </div>

      {/* Documents Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Documents</h2>

        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border">
              <thead className="bg-gray-100 text-xs uppercase">
                <tr>
                  <th className="p-2 border">Actions</th>
                  <th className="p-2 border">Date Processed</th>
                  <th className="p-2 border">ST</th>
                  <th className="p-2 border">Document Number</th>
                  <th className="p-2 border">Sender ID</th>
                  <th className="p-2 border">Sender Name</th>
                  <th className="p-2 border">Receiver ID</th>
                  <th className="p-2 border">Receiver Name</th>
                  <th className="p-2 border">Type</th>
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
                    <tr key={i} className="border-t">
                      <td className="p-2 border text-center">
                        <button className="bg-gray-200 p-1 rounded hover:bg-gray-300">
                          👁️
                        </button>
                      </td>
                      <td className="p-2 border">{doc.dateProcessed}</td>
                      <td className="p-2 border">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-full">{doc.st}</span>
                      </td>
                      <td className="p-2 border">{doc.documentNumber}</td>
                      <td className="p-2 border">{doc.senderId}</td>
                      <td className="p-2 border">{doc.senderName}</td>
                      <td className="p-2 border">{doc.receiverId}</td>
                      <td className="p-2 border">{doc.receiverName}</td>
                      <td className="p-2 border">{doc.type}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {searchResults.length === 0 && (
              <p className="text-center py-4 text-gray-500">No results found.</p>
            )}
          </div>
          
        </div>
      
      </div>
    
    </div>
  );
};

export default SearchDashboard;