import Link from 'next/link';

export default function EDIDashboardLayout({ children }) {
  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="sticky top-0 z-50 bg-teal-950 px-6 py-4 text-white flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight font-sans">
          <span className="text-2xl font-nunito font-light text-white">boomi</span>
          <span className="text-gray-300 text-base ml-2 font-medium">
            B2B/EDI Dashboard
          </span>
        </h1>

        <nav className="space-x-4">
          <Link href="/edidashboard/generalsearch" className="hover:text-orange-600 text-gray-200 font-sans">
            General Search
          </Link>
          <Link href="/edidashboard/trackpo" className="hover:text-orange-600 text-gray-200 font-sans">
            Track PO
          </Link>
        </nav>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
