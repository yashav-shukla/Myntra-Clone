import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Cart() {
  const { items, removeItem, updateQuantity } = useCartStore();
  
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/" className="text-pink-600 hover:text-pink-700">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <div key={`${item.product.id}-${item.size}`} className="flex items-center border-b py-4">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="ml-4 flex-grow">
                <h3 className="font-medium">{item.product.brand}</h3>
                <p className="text-gray-600">{item.product.name}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                
                <div className="mt-2 flex items-center space-x-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                      className="p-1"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="ml-4">
                <p className="font-medium">₹{item.product.price * item.quantity}</p>
                <p className="text-sm text-gray-500 line-through">
                  ₹{item.product.originalPrice * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹{subtotal}</span>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-pink-600 text-white py-3 rounded-md mt-6 hover:bg-pink-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}