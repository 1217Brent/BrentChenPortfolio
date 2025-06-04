import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-400">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-semibold text-xl tracking-tight">Brent Chen Portfolio</span>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center px-3 py-2 border-2 rounded text-blue-400 border-blue-400 hover:text-blue-400 hover:border-blue-400"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>About</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`menu w-full ${menuOpen ? 'block' : 'hidden'} lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8`}>
        <div className="flex w-full items-center">
          <div className="text-md font-bold text-blue-400 flex ml-auto">
            <a href="#menu1" className="block mt-4 lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-400 mr-2">About</a>
            <a href="#menu2" className="block mt-4 lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-400 mr-2">Projects</a>
            <a href="#menu3" className="block mt-4 lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-400 mr-2">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
