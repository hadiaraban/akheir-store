'use client';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { createCheckoutSession } from '../actions/stripe';
import { useState } from 'react';

export default function CartPage() {
  const { items, total, removeItem, addItem } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const url = await createCheckoutSession(items);
      if (url) window.location.href = url;
    } catch (err) {
      alert('Payment failed. Please try again.');
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some products to get started.</p>
        <Link href="/products" className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  ${(item.price / 100).toFixed(2)} × {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold">${((item.price * item.quantity) / 100).toFixed(2)}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm hover:underline mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${(total / 100).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>{total >= 5000 ? 'Free' : '$5.00'}</span>
            </div>
          </div>
          <div className="border-t pt-4 mb-6 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${((total + (total >= 5000 ? 0 : 500)) / 100).toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? 'Redirecting...' : 'Proceed to Payment'}
          </button>
          <p className="text-xs text-gray-500 text-center mt-3">
            Secure checkout powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
}