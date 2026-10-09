'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../lib/products';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
        <Link href={`/products/${product.id}`}>
          <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-blue-600 transition">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${(product.price / 100).toFixed(2)}
          </span>
          <button
            onClick={() => addItem({ id: product.id, name: product.name, price: product.price })}
            className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}