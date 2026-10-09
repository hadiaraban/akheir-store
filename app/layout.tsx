import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akheir — Premium Online Store',
  description: 'Shop premium products at Akheir. Fast shipping, quality guaranteed.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <CartProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}