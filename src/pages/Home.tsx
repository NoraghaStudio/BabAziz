import React from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/menuItems';

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1615996001375-c7ef13294436?w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">أشهى المأكولات العربية</h1>
            <p className="text-xl mb-8">اطلب طعامك المفضل الآن</p>
            <Link
              to="/menu"
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              اطلب الآن
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">الأطباق المميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.slice(0, 3).map((item) => (
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
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                      إضافة إلى السلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">آراء العملاء</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'أحمد محمد',
                review: 'أفضل مطعم في المدينة! الطعام لذيذ والخدمة ممتازة.',
                rating: 5,
              },
              {
                name: 'سارة أحمد',
                review: 'الأطباق شهية وطازجة دائماً. أنصح به بشدة!',
                rating: 5,
              },
              {
                name: 'محمد علي',
                review: 'تجربة رائعة وأسعار معقولة. سأعود مرة أخرى بالتأكيد.',
                rating: 4,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="text-yellow-400">
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};