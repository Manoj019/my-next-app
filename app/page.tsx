import Link from 'next/link';
import SearchDashboard from './edidashboard/generalsearch/page';


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-6 space-y-6">
      <h1 className="text-4xl font-bold">Hello</h1>
      <div className="space-x-4">
        <Link
          href="/parent"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Parent Page
        </Link>
        <Link
          href="/edidashboard"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Go to Users Page
        </Link>
      </div>
    </main>
  );
}
