import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Welcome to Akheir</h1>
      <p className="mt-4 text-gray-600">Your one-stop shop for everything.</p>
      <Link href="/products" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
        Shop Now
      </Link>
    </main>
  );
}