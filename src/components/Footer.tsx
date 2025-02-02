import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-2">
              <p>الرياض، المملكة العربية السعودية</p>
              <p>هاتف: 966-11-123-4567+</p>
              <p>البريد الإلكتروني: info@restaurant.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="/menu" className="hover:text-red-600">القائمة</a>
              </li>
              <li>
                <a href="/about" className="hover:text-red-600">من نحن</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-red-600">اتصل بنا</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-600 hover:text-red-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>© {new Date().getFullYear()} مطعمنا. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};