import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        {/* Add your header component or elements here */}
        <nav className="bg-gray-800 p-4">
          <h1 className="text-white">Faculty Portal</h1>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        {/* Add your footer component or elements here */}
        <div className="bg-gray-800 p-4 text-center text-white">
          &copy; {new Date().getFullYear()} Your University Name
        </div>
      </footer>
    </div>
  );
}
