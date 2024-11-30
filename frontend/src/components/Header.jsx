import React from "react";
import logo from "/images/logo.png";

export default function Header() {
  return (
    <header className="w-screen bg-gray-900 text-white shadow-md top-0 left-0">
      <nav className="px-4 lg:px-8 py-4 bg-gray-900">
        {/* Logo and Title */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="mr-3 h-10 sm:h-12"
            alt="Coders Cafe Logo"
          />
          <h1 className="text-3xl font-bold uppercase tracking-wide">
            <span className="text-primary">Coders</span> Cafe
          </h1>
        </a>
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          {/* Mobile Menu Button */}
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="lg:hidden inline-flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-md"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zM3 10h14a1 1 0 010 2H3a1 1 0 010-2zM3 15h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Hidden by Default) */}
      <div className="hidden lg:hidden" id="mobile-menu">
        <div className="px-4 py-4 space-y-2 bg-gray-800">
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
