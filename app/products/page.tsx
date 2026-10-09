import Link from 'next/link';

const products = [
  { id: '1', name: 'Product One', price: 2999, description: 'High quality product' },
  { id: '2', name: 'Product Two', price: 4999, description: 'Best seller' },
];

export default function ProductsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-6 rounded-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-2xl font-bold mt-2">${(product.price / 100).toFixed(2)}</p>
            <Link href={`/products/${product.id}`} className="mt-4 inline-block text-blue-600">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}