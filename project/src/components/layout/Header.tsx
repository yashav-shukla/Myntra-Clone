import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User2 } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

export function Header() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-pink-500">
            Myntra
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/men" className="hover:text-pink-500">MEN</Link>
            <Link to="/women" className="hover:text-pink-500">WOMEN</Link>
            <Link to="/kids" className="hover:text-pink-500">KIDS</Link>
            <Link to="/home" className="hover:text-pink-500">HOME</Link>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <Search className="w-6 h-6" />
            </div>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/cart">
                  <ShoppingBag className="w-6 h-6" />
                </Link>
                <Link to={user?.role === 'admin' ? '/admin' : '/profile'}>
                  <User2 className="w-6 h-6" />
                </Link>
              </div>
            ) : (
              <Link to="/login" className="hover:text-pink-500">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}