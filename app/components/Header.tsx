'use client';

import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const router = useRouter();
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 bg-transparent ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="container mx-auto px-8 py-8 flex justify-between items-center backdrop-blur-sm bg-white/10">
        <div className="logo text-2xl font-bold tracking-wider">
          <button 
            onClick={() => router.push('/')}
            className="logo-btn"
          >
            UPFEET<span className="text-white">.</span>
          </button>
        </div>
        <div className="nav-links flex gap-12">
          <button onClick={() => router.push('/products')}>Products</button>
          <button onClick={() => router.push('/why-us')}>Why Us</button>
          <button onClick={() => router.push('/about')}>About Us</button>
          <button onClick={() => router.push('/blog')}>Blog</button>
          <button onClick={() => router.push('/contact')}>Contact Us</button>
        </div>
        <div className="header-controls flex items-center gap-4">
          <ThemeToggle />
          <div className="cart">
            <button onClick={() => setIsCartOpen(true)}>
              <svg 
                className="cart-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M9 20a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7-3h7a2 2 0 0 0 1.95-1.57L20 7H7.1M5.2 4H3m2.2 0 2.3 7" />
              </svg>
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
} 