import React, { useState } from 'react';
import { Settings, ShoppingBag, Menu as MenuIcon, BarChart3 } from 'lucide-react';

type Order = {
  id: string;
  customerName: string;
  items: Array<{
    nameAr: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'accepted' | 'completed' | 'rejected';
  createdAt: Date;
};

const mockOrders: Order[] = [
  {
    id: '1',
    customerName: 'أحمد محمد',
    items: [
      { nameAr: 'برجر كلاسيكي', quantity: 2, price: 45 },
      { nameAr: 'شاورما دجاج', quantity: 1, price: 35 }
    ],
    total: 125,
    status: 'pending',
    createdAt: new Date()
  },
  {
    id: '2',
    customerName: 'سارة أحمد',
    items: [
      { nameAr: 'فلافل راب', quantity: 3, price: 25 }
    ],
    total: 75,
    status: 'accepted',
    createdAt: new Date()
  }
];

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'menu' | 'settings' | 'stats'>('orders');
  const [orders] = useState<Order[]>(mockOrders);

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">لوحة التحكم</h1>
            <button className="text-red-600 hover:text-red-700">تسجيل الخروج</button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-4">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('orders')}
                className={\`flex items-center space-x-2 space-x-reverse w-full p-2 rounded-md \${
                  activeTab === 'orders' ? 'bg-red-50 text-red-600' : 'hover:bg-gray-50'
                }\`}
              >
                <ShoppingBag className="h-5 w-5" />
                <span>الطلبات</span>
              </button>
              <button
                onClick={() => setActiveTab('menu')}
                className={\`flex items-center space-x-2 space-x-reverse w-full p-2 rounded-md \${
                  activeTab === 'menu' ? 'bg-red-50 text-red-600' : 'hover:bg-gray-50'
                }\`}
              >
                <MenuIcon className="h-5 w-5" />
                <span>القائمة</span>
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={\`flex items-center space-x-2 space-x-reverse w-full p-2 rounded-md \${
                  activeTab === 'stats' ? 'bg-red-50 text-red-600' : 'hover:bg-gray-50'
                }\`}
              >
                <BarChart3 className="h-5 w-5" />
                <span>الإحصائيات</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={\`flex items-center space-x-2 space-x-reverse w-full p-2 rounded-md \${
                  activeTab === 'settings' ? 'bg-red-50 text-red-600' : 'hover:bg-gray-50'
                }\`}
              >
                <Settings className="h-5 w-5" />
                <span>الإعدادات</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">الطلبات الحالية</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold">{order.customerName}</h3>
                          <p className="text-sm text-gray-500">
                            {new Date(order.createdAt).toLocaleString('ar-SA')}
                          </p>
                        </div>
                        <span className={\`px-3 py-1 rounded-full text-sm \${getStatusColor(order.status)}\`}>
                          {order.status === 'pending' && 'قيد الانتظار'}
                          {order.status === 'accepted' && 'تم القبول'}
                          {order.status === 'completed' && 'مكتمل'}
                          {order.status === 'rejected' && 'مرفوض'}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.nameAr} x{item.quantity}</span>
                            <span>{item.price * item.quantity} ريال</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t flex justify-between items-center">
                        <span className="font-semibold">المجموع: {order.total} ريال</span>
                        <div className="space-x-2 space-x-reverse">
                          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
                            قبول
                          </button>
                          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
                            رفض
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'menu' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">إدارة القائمة</h2>
                {/* Menu management content */}
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">الإحصائيات</h2>
                {/* Statistics content */}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">الإعدادات</h2>
                {/* Settings content */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};