import React from 'react';
import { ProductGrid } from '../components/product/ProductGrid';
import { FEATURED_PRODUCTS } from '../data/products';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Hero Banner"
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <ProductGrid products={FEATURED_PRODUCTS} />
      </section>

      <section className="grid grid-cols-2 gap-4 mb-12">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Women's Collection"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Women's Collection</span>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Men's Collection"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Men's Collection</span>
          </div>
        </div>
      </section>
    </div>
  );
}