import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Home, ShoppingBag, Newspaper, Lock } from 'lucide-react';
import { useAdminStore } from '../store/adminStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isAuthenticated } = useAdminStore();

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="w-6 h-6" />
              <span className="font-bold text-xl">இளம்பிள்ளை</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-500"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/shops" className="flex items-center space-x-1 hover:text-indigo-200">
              <ShoppingBag className="w-5 h-5" />
              <span>Shops</span>
            </Link>
            <Link to="/news" className="flex items-center space-x-1 hover:text-indigo-200">
              <Newspaper className="w-5 h-5" />
              <span>News</span>
            </Link>
            {isAuthenticated && (
              <Link to="/admin" className="flex items-center space-x-1 hover:text-indigo-200">
                <Lock className="w-5 h-5" />
                <span>Admin</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/shops"
            className="block px-3 py-2 rounded-md hover:bg-indigo-500"
            onClick={() => setIsOpen(false)}
          >
            Shops
          </Link>
          <Link
            to="/news"
            className="block px-3 py-2 rounded-md hover:bg-indigo-500"
            onClick={() => setIsOpen(false)}
          >
            News
          </Link>
          {isAuthenticated && (
            <Link
              to="/admin"
              className="block px-3 py-2 rounded-md hover:bg-indigo-500"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}