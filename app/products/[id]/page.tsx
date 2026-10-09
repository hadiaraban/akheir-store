'use client';
import { useParams, useRouter } from 'next/navigation';
import { getProductById } from '../../lib/products';
import { useCart } from '../../context/CartContext';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const product = getProductById(params.id as string);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <button onClick={() => router.push('/products')} className="text-blue-600 hover:underline">
          Back to products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button onClick={() => router.back()} className="text-gray-600 hover:text-black mb-6">
        ← Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
          <p className="text-3xl font-bold text-gray-900 mt-4">
            ${(product.price / 100).toFixed(2)}
          </p>
          <p className="mt-6 text-gray-700 leading-relaxed">{product.longDescription}</p>
          
          <button
            onClick={() => addItem({ id: product.id, name: product.name, price: product.price })}
            className="mt-8 w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
          
          <div className="mt-8 pt-8 border-t border-gray-200 space-y-3 text-sm text-gray-600">
            <p>✓ Free shipping on orders over $50</p>
            <p>✓ 30-day return policy</p>
            <p>✓ Secure checkout with Stripe</p>
          </div>
        </div>
      </div>
    </div>
  );
}