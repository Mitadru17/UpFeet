'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Product } from '../types/product';
import { getProductsByCategory, products, getProductsByType } from '../data/products';
import { useCart } from '../context/CartContext';
import Cart from '../components/Cart';

function ProductList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const category = searchParams.get('category');
  const type = searchParams.get('type');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (type) {
      setDisplayedProducts(getProductsByType(type as 'shoes' | 'backpacks' | 'clothes'));
    } else if (category) {
      setDisplayedProducts(getProductsByCategory(category as 'men' | 'women' | 'unisex'));
    } else {
      setDisplayedProducts(products);
    }
  }, [category, type]);

  return (
    <div>
      <div className="products-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchParams.get('search') || ''}
            onChange={(e) => {
              router.push(`/products?search=${e.target.value}`);
            }}
          />
        </div>
        
        <div className="filters">
          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-filters">
              <button 
                className={`category-btn ${!category && !type ? 'active' : ''}`}
                onClick={() => router.push('/products')}
              >
                All
              </button>
              <button 
                className={`category-btn ${category === 'men' ? 'active' : ''}`}
                onClick={() => router.push('/products?category=men')}
              >
                Men
              </button>
              <button 
                className={`category-btn ${category === 'women' ? 'active' : ''}`}
                onClick={() => router.push('/products?category=women')}
              >
                Women
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h3>Product Type</h3>
            <div className="type-filters">
              <button 
                className={`type-btn ${type === 'shoes' ? 'active' : ''}`}
                onClick={() => router.push('/products?type=shoes')}
              >
                Shoes
              </button>
              <button 
                className={`type-btn ${type === 'backpacks' ? 'active' : ''}`}
                onClick={() => router.push('/products?type=backpacks')}
              >
                Backpacks
              </button>
              <button 
                className={`type-btn ${type === 'clothes' ? 'active' : ''}`}
                onClick={() => router.push('/products?type=clothes')}
              >
                Clothes
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h3>Colors</h3>
            <div className="color-filters">
              {['all', 'black', 'white', 'gray', 'red', 'blue', 'brown', 'navy'].map(color => (
                <button
                  key={color}
                  className={`color-btn ${searchParams.get('color') === color ? 'active' : ''}`}
                  onClick={() => {
                    const baseQuery = type ? `type=${type}` : category ? `category=${category}` : '';
                    const colorQuery = color === 'all' ? '' : `&color=${color}`;
                    router.push(`/products?${baseQuery}${colorQuery}`);
                  }}
                  style={{
                    backgroundColor: color === 'all' ? 'transparent' : color,
                    border: color === 'all' ? '1px dashed #ccc' : 'none'
                  }}
                >
                  {color === 'all' && 'All'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {!category && !type && (
        <section className="featured-categories">
          <h2>Shop by Category</h2>
          <div style={{ display: 'none' }}>
            {`Category: ${category}, Type: ${type}`}
          </div>
          <div className="category-grid">
            <div 
              className="category-card"
              onClick={() => router.push('/products?type=shoes')}
            >
              <Image
                src="/images/categories/shoes-banner.jpg"
                alt="Shoes"
                width={400}
                height={300}
                className="category-img"
                priority={true}
                style={{ objectFit: 'cover' }}
              />
              <div className="category-info">
                <h3>Shoes</h3>
                <p>Explore our innovative footwear collection</p>
              </div>
            </div>

            <div 
              className="category-card"
              onClick={() => router.push('/products?type=backpacks')}
            >
              <Image
                src="/images/categories/backpacks-banner.jpg"
                alt="Backpacks"
                width={400}
                height={300}
                className="category-img"
                style={{ objectFit: 'cover' }}
              />
              <div className="category-info">
                <h3>Backpacks</h3>
                <p>Discover our versatile backpack collection</p>
              </div>
            </div>
            
            <div 
              className="category-card"
              onClick={() => router.push('/products?type=clothes')}
            >
              <Image
                src="/images/categories/clothes-banner.jpg"
                alt="Clothes"
                width={400}
                height={300}
                className="category-img"
                style={{ objectFit: 'cover' }}
              />
              <div className="category-info">
                <h3>Clothes</h3>
                <p>Browse our stylish clothing line</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="products-grid">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => router.push(`/products/${product.id}`)}
            >
              <div className="product-image">
                <Image
                  src={product.mainImage}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="product-img"
                />
                <button 
                  className="quick-add"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart({ ...product, image: product.mainImage });
                  }}
                >
                  Quick Add +
                </button>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
                  <button 
                    className="add-to-cart"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({ ...product, image: product.mainImage });
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h2>No products found</h2>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="page-container">
      <section className="page-header">
        <h1>All Products</h1>
        <p>Discover our collection of innovative footwear</p>
      </section>

      <Suspense fallback={
        <div className="loading">
          <p>Loading products...</p>
        </div>
      }>
        <ProductList />
      </Suspense>

      <Cart />
    </main>
  );
} 