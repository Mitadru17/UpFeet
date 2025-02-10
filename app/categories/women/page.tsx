'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  type: string;
}

export default function WomenCategory() {
  const [selectedType, setSelectedType] = useState('all');
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: 'w1',
      name: 'AeroFlex Runner',
      price: 179.99,
      category: 'women',
      image: '/images/products/women/shoe1.jpg',
      description: 'Lightweight performance running shoes',
      type: 'shoes'
    },
    {
      id: 'w2',
      name: 'City Explorer Pack',
      price: 139.99,
      category: 'women',
      image: '/images/products/women/backpack1.jpg',
      description: 'Sleek urban backpack with tech compartments',
      type: 'backpacks'
    },
    {
      id: 'w3',
      name: 'TechStyle Jacket',
      price: 229.99,
      category: 'women',
      image: '/images/products/women/jacket1.jpg',
      description: 'Modern technical jacket for urban environments',
      type: 'clothes'
    }
  ];

  const filteredProducts = selectedType === 'all' 
    ? products 
    : products.filter(product => product.type === selectedType);

  return (
    <main className="page-container">
      <section className="category-header">
        <h1>Women's Collection</h1>
        <p>Explore our women's techwear selection</p>
      </section>

      <div className="category-controls">
        <div className="type-filters">
          {['all', 'shoes', 'backpacks', 'clothes'].map(type => (
            <button
              key={type}
              className={`type-btn ${selectedType === type ? 'active' : ''}`}
              onClick={() => setSelectedType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <section className="category-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="product-img"
              />
              <button 
                className="quick-add"
                onClick={() => addToCart(product)}
              >
                Quick Add +
              </button>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="price">${product.price}</span>
                <button 
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
} 