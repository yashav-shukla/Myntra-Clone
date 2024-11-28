import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { Heart, ShoppingBag } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/products';

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const { addItem } = useCartStore();

  const product = FEATURED_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button
          onClick={() => navigate('/')}
          className="text-pink-600 hover:text-pink-700"
        >
          Return to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    addItem({
      product,
      quantity: 1,
      size: selectedSize,
    });

    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.brand}</h1>
          <p className="text-gray-600 mt-1">{product.name}</p>
          
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">₹{product.price}</span>
              <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
              <span className="text-green-500">({product.discount}% OFF)</span>
            </div>
            <p className="text-green-600 text-sm mt-1">inclusive of all taxes</p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-medium mb-2">Select Size</h2>
            <div className="flex space-x-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center
                    ${selectedSize === size
                      ? 'border-pink-500 text-pink-500'
                      : 'border-gray-300 hover:border-gray-400'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>ADD TO BAG</span>
            </button>
            
            <button className="flex-1 border border-gray-300 py-3 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>WISHLIST</span>
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-medium mb-2">Product Details</h2>
            <p className="text-gray-600">A premium quality product from {product.brand}. Perfect for any occasion.</p>
          </div>
        </div>
      </div>
    </div>
  );
}