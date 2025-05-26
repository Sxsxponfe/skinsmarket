import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">SkinsMarket</Link>
        <div className="space-x-4">
          <Link to="/login" className="hover:text-gray-300">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;