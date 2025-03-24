import React from "react";

const Layout = ({
  sidebar,
  children,
  footer,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/6 h-screen bg-gray-200 p-0">{sidebar}</aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <h1 className="text-lg font-semibold">My Website</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-100">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4">
          {footer}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
