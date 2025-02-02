import React from 'react';
import { useStore } from '../store/useStore';
import { Trash2, MinusCircle, PlusCircle } from 'lucide-react';

export const Cart = () => {
  const cart = useStore((state) => state.cart);
  const total = useStore((state) => state.total);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">السلة فارغة</h2>
        <p className="text-gray-600">لم تقم بإضافة أي منتجات إلى السلة بعد</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">سلة المشتريات</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center py-4 border-b last:border-b-0"
          >
            <img
              src={item.image}
              alt={item.nameAr}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-grow mr-4">
              <h3 className="text-lg font-semibold">{item.nameAr}</h3>
              <p className="text-gray-600">{item.price} ريال</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="text-gray-600 hover:text-red-600"
              >
                <MinusCircle className="h-6 w-6" />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="text-gray-600 hover:text-green-600"
              >
                <PlusCircle className="h-6 w-6" />
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mr-4 text-gray-600 hover:text-red-600"
              >
                <Trash2 className="h-6 w-6" />
              </button>
            </div>
          </div>
        ))}
        
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold">المجموع:</span>
            <span className="text-2xl font-bold text-red-600">{total} ريال</span>
          </div>
          <button className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
            متابعة الطلب
          </button>
        </div>
      </div>
    </div>
  );
};