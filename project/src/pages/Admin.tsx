import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Navigate } from 'react-router-dom';
import { AdminProducts } from './admin/Products';
import { AdminOrders } from './admin/Orders';
import { AdminUsers } from './admin/Users';
import { Package, ShoppingBag, Users } from 'lucide-react';

type Tab = 'products' | 'orders' | 'users';

export function Admin() {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState<Tab>('products');

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  const tabs = [
    { id: 'products', label: 'Products', icon: ShoppingBag },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'users', label: 'Users', icon: Users },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="mb-6">
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-pink-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        {activeTab === 'products' && <AdminProducts />}
        {activeTab === 'orders' && <AdminOrders />}
        {activeTab === 'users' && <AdminUsers />}
      </div>
    </div>
  );
}