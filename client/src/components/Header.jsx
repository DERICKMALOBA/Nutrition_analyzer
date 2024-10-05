import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Menu Icon */}
        <div className="hidden md:flex items-center space-x-2">
          <button onClick={toggleMenu}>
            <FaBars className="text-3xl" />
          </button>
        </div>

        {/* Logo */}
        <div className="text-3xl font-bold flex items-center">
          <Link to="/">
            <img 
              src="https://via.placeholder.com/120x60" 
              alt="NutriTrack Logo" 
              className="inline-block mr-2" 
            />
            NutriTrack
          </Link>
        </div>

        {/* Profile Icon and Login */}
        <div className="hidden md:flex items-center space-x-2">
          <FaUserCircle className="text-3xl" />
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>

      {/* Vertical Menu (Visible when clicked) */}
      <div className={`fixed top-0 left-0 bg-white h-full w-64 shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-4">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Menu</h2>
          <Link to="/dashboard" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Dashboard</Link>
          <Link to="/profile" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Profile</Link>
          <Link to="/meal-log" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Meal Log</Link>
          <Link to="/meal-suggestions" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Meal Suggestions</Link>
          <Link to="/nutritional-info" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Nutritional Info</Link>
          <Link to="/nutritional-diseases" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Nutritional Diseases</Link>
          <Link to="/reports" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Reports</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
