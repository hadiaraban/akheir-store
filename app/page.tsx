import Link from 'next/link';
import { getFeaturedProducts, products } from './lib/products';
import ProductCard from './components/ProductCard';

export default function Home() {
  const featured = getFeaturedProducts();
  const newArrivals = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Premium Products for Modern Living
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Discover our curated collection of high-quality products designed to elevate your everyday.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/products"
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Audio', 'Wearables', 'Accessories', 'Electronics'].map((cat) => (
            <Link
              key={cat}
              href={`/products?category=${cat}`}
              className="bg-gray-100 hover:bg-gray-200 rounded-lg p-8 text-center transition"
            >
              <span className="font-semibold text-gray-900">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <Link href="/products" className="text-blue-600 hover:underline font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Free Shipping on Orders Over $50</h2>
          <p className="text-gray-300 mb-8">
            Join thousands of happy customers. Fast, reliable delivery worldwide.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}