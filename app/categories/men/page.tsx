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

export default function MenCategory() {
  const [selectedType, setSelectedType] = useState('all');
  const { addToCart } = useCart();

  const products: Product[] = [
    {
      id: 'm1',
      name: 'TechRunner Pro X',
      price: 189.99,
      category: 'men',
      image: '/images/products/men/shoe1.jpg',
      description: 'Advanced running shoes with responsive cushioning',
      type: 'shoes'
    },
    {
      id: 'm2',
      name: 'Urban Backpack Pro',
      price: 129.99,
      category: 'men',
      image: '/images/products/men/backpack1.jpg',
      description: 'Waterproof tactical backpack',
      type: 'backpacks'
    },
    {
      id: 'm3',
      name: 'TechWear Jacket',
      price: 249.99,
      category: 'men',
      image: '/images/products/men/jacket1.jpg',
      description: 'Weather-resistant urban jacket',
      type: 'clothes'
    }
  ];

  const filteredProducts = selectedType === 'all' 
    ? products 
    : products.filter(product => product.type === selectedType);

  return (
    <main className="page-container">
      <section className="category-header">
        <h1>Men's Collection</h1>
        <p>Discover our range of men's techwear essentials</p>
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