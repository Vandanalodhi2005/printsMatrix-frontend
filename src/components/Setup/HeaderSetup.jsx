
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const logo = '/hp-logo.jpeg';

const HeaderSetup = ({ showLogo = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 bg-white border-b border-gray-100 flex items-center">
      <nav className="w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showLogo && (
            <img 
              src="/hp-logo.jpeg" 
              alt="HP Logo" 
              width="40"
              height="40"
              fetchPriority="high"
              decoding="async"
              className="h-10 w-10 object-contain block shrink-0 shadow-sm rounded-full" 
            />
          )}
          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-row gap-8 items-center ml-4">
            <li className="text-gray-400 text-sm font-bold uppercase tracking-widest">OfficeJet</li>
            <li className="text-gray-400 text-sm font-bold uppercase tracking-widest">DeskJet</li>
            <li className="text-gray-400 text-sm font-bold uppercase tracking-widest">ENVY</li>
            <li className="text-gray-400 text-sm font-bold uppercase tracking-widest">LaserJet</li>
          </ul>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            aria-label="Open menu"
            className="focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 z-50 md:hidden animate-fade-in">
            <li className="text-gray-500 text-lg font-normal">OfficeJet</li>
            <li className="text-gray-500 text-lg font-normal">DeskJet</li>
            <li className="text-gray-500 text-lg font-normal">ENVY</li>
            <li className="text-gray-500 text-lg font-normal">LaserJet</li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default HeaderSetup;
