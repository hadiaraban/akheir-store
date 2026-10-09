'use client';
import { useCart } from '../context/CartContext';
import { createCheckoutSession } from '../actions/stripe';

export default function CartPage() {
  const { items, total, removeItem } = useCart();

  const handleCheckout = async () => {
    const url = await createCheckoutSession(items);
    if (url) window.location.href = url;
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="flex justify-between border-b py-4">
              <span>{item.name} x {item.quantity}</span>
              <div>
                <span className="mr-4">${(item.price * item.quantity / 100).toFixed(2)}</span>
                <button onClick={() => removeItem(item.id)} className="text-red-500">Remove</button>
              </div>
            </div>
          ))}
          <div className="mt-6 text-xl font-bold">
            Total: ${(total / 100).toFixed(2)}
          </div>
          <button onClick={handleCheckout} className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg w-full">
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
}