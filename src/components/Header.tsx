import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { ShoppingCart, Menu as MenuIcon } from 'lucide-react';

export const Header = () => {
  const cart = useStore((state) => state.cart);
  const total = useStore((state) => state.total);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-red-600">
            مطعمنا
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link to="/menu" className="text-gray-700 hover:text-red-600">
              القائمة
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600">
              من نحن
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600">
              اتصل بنا
            </Link>
          </nav>

          <div className="flex items-center space-x-4 space-x-reverse">
            <Link
              to="/cart"
              className="flex items-center text-gray-700 hover:text-red-600"
            >
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="mr-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
            <button className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};