// app/edidashboard/layout.jsx

import Link from 'next/link'; 

export default function EDIDashboardLayout({ children }) {
    

    
  return (
    <div>
      <header className="bg-[#0C344B] px-6 py-4 text-white flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight font-sans">
          <span className="text-white">boomi</span>
          <span className="text-gray-300 text-base ml-2 font-medium">
            B2B/EDI Dashboard
          </span>
        </h1>

        <nav className="space-x-4">
          <Link href="/edidashboard/generalsearch" className="hover:underline text-gray-200">
            General Search
          </Link>
          <Link href="/edidashboard/trackpo" className="hover:underline text-gray-200">
            Track PO
          </Link>
        </nav>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
