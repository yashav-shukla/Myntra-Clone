import React from 'react';
import { Package } from 'lucide-react';

const DEMO_ORDERS = [
  {
    id: '1',
    userId: '2',
    items: [
      {
        product: {
          id: '1',
          name: 'Slim Fit T-Shirt',
          brand: 'H&M',
          price: 499,
          originalPrice: 999,
          discount: 50,
          category: 'men',
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
          sizes: ['S', 'M', 'L', 'XL'],
        },
        quantity: 2,
        size: 'M',
      },
    ],
    total: 998,
    status: 'pending',
    createdAt: '2024-03-15T10:00:00Z',
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
    },
  },
];

export function AdminOrders() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Orders</h2>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {DEMO_ORDERS.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">#{order.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{order.shippingAddress.name}</div>
                  <div className="text-sm text-gray-500">{order.shippingAddress.city}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Package className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-900">{order.items.length} items</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">₹{order.total}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}