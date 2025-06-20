"use client";

import Link from "next/link";
import React from "react";

const ParentPage1 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-gray-600 mb-6">Parent Page</h1>

      <Link
        href="/parent/child"
        className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Go to Child Page
      </Link>
    </div>
  );
};

export default ParentPage1;
