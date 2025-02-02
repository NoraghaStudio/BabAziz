import React from 'react';
import { useStore } from '../store/useStore';
import { menuItems } from '../data/menuItems';

export const Menu = () => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">قائمة الطعام</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.nameAr}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.nameAr}</h3>
              <p className="text-gray-600 mb-4">{item.descriptionAr}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-red-600">
                  {item.price} ريال
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                >
                  إضافة إلى السلة
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};