export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number; // به سنت
  image: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Crystal-clear sound with active noise cancellation',
    longDescription: 'Experience audio like never before with our premium wireless headphones. Featuring advanced active noise cancellation, 40-hour battery life, and premium materials for all-day comfort.',
    price: 29999,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    category: 'Audio',
    featured: true,
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Track your health and stay connected',
    longDescription: 'Stay connected and monitor your health with our advanced smartwatch. Features heart rate monitoring, GPS, water resistance, and a stunning AMOLED display.',
    price: 39999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    category: 'Wearables',
    featured: true,
  },
  {
    id: '3',
    name: 'Minimalist Backpack',
    description: 'Stylish and functional everyday carry',
    longDescription: 'A sleek, minimalist backpack designed for the modern professional. Water-resistant fabric, laptop compartment, and thoughtful organization.',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    category: 'Accessories',
    featured: true,
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    description: 'Tactile typing experience for work and play',
    longDescription: 'Premium mechanical keyboard with RGB backlighting, hot-swappable switches, and aluminum frame. Perfect for developers and gamers.',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800',
    category: 'Electronics',
    featured: false,
  },
  {
    id: '5',
    name: 'Ceramic Coffee Mug',
    description: 'Handcrafted ceramic mug for your morning coffee',
    longDescription: 'Handcrafted ceramic mug with a matte finish. Holds 12oz of your favorite beverage. Dishwasher and microwave safe.',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800',
    category: 'Home',
    featured: false,
  },
  {
    id: '6',
    name: 'Leather Notebook',
    description: 'Premium leather journal for your thoughts',
    longDescription: 'Hand-bound leather notebook with 200 pages of high-quality paper. Perfect for journaling, sketching, or planning.',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800',
    category: 'Stationery',
    featured: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}