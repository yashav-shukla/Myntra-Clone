import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-gray-900">{product.brand}</h3>
        <p className="text-sm text-gray-500">{product.name}</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">₹{product.price}</span>
          <span className="text-sm text-gray-500 line-through">
            ₹{product.originalPrice}
          </span>
          <span className="text-sm text-green-500">
            ({product.discount}% OFF)
          </span>
        </div>
      </div>
    </Link>
  );
}