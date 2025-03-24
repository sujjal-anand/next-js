export default function CustomersSidebar() {
  return (
    <nav className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-semibold mb-4">Customer Panel</h2>
      <ul className="space-y-2">
        <li className="p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-200 cursor-pointer">
          🏠 Home
        </li>
        <li className="p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-200 cursor-pointer">
          ℹ️ About Us
        </li>
        <li className="p-2 bg-red-600 rounded-md hover:bg-red-500 transition duration-200 cursor-pointer mt-4">
          🚪 Logout
        </li>
      </ul>
    </nav>
  );
}
