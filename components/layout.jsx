'use client';

import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header visible on every page */}
      <header className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Boomi Dashboard</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">General Search</Link>
          <Link href="/track-po" className="hover:underline">Track PO</Link>
        </nav>
      </header>

      {/* Page Content */}
      <main className="p-4 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;