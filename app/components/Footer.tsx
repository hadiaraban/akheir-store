import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Akheir</h3>
            <p className="text-gray-400 text-sm">
              Your one-stop shop for premium products.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-white">All Products</Link></li>
              <li><Link href="/products?category=Audio" className="hover:text-white">Audio</Link></li>
              <li><Link href="/products?category=Wearables" className="hover:text-white">Wearables</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-white">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <p className="text-gray-400 text-sm">
              Stay updated with our latest products.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Akheir. All rights reserved.
        </div>
      </div>
    </footer>
  );
}