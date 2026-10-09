'use client';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '../lib/products';
import ProductCard from '../components/ProductCard';

const categories = ['All', 'Audio', 'Wearables', 'Accessories', 'Electronics', 'Home', 'Stationery'];

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');

const filtered = useMemo(() => {
  const base = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const result = [...base]; // کپی امن برای sort

  if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
  if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));

  return result;
}, [selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
      <p className="text-gray-600 mb-8">{filtered.length} products available</p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="md:w-64 flex-shrink-0">
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition ${
                    selectedCategory === cat
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-end mb-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="text-gray-500 text-center py-12">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}