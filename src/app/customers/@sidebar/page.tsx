import Link from "next/link";

export default function CustomersSidebar() {
  return (
    <nav className="w-72 h-screen bg-gray-800 text-white p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Customer Panel</h2>
      <ul className="space-y-2">
        <li>
          <Link
            href="/customers"
            className="block p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-200"
          >
            🏠 Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className="block p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-200"
          >
            ℹ️ About Us
          </Link>
        </li>
        <li className="mt-auto">
          <Link
            href="/customers"
            className="block p-2 bg-red-600 rounded-md hover:bg-red-500 transition duration-200"
          >
            🚪 Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}
