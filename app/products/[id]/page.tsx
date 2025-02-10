'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getProductById, getRelatedProducts } from '@/app/data/products';
import { useCart } from '@/app/context/CartContext';

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [mainImage, setMainImage] = useState(product?.mainImage);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <main className="page-container">
      <div className="product-detail">
        <div className="product-gallery">
          <div className="main-image">
            <Image
              src={mainImage || product.mainImage}
              alt={product.name}
              width={600}
              height={600}
              className="product-detail-img"
            />
          </div>
          <div className="image-thumbnails">
            {product.images.map((image, index) => (
              <button
                key={index}
                className="thumbnail-btn"
                onClick={() => setMainImage(image)}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  width={100}
                  height={100}
                  className="thumbnail-img"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="product-meta">
            <div className="product-rating">
              <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
              <span className="rating-number">({product.rating})</span>
              <span className="review-count">{product.reviews} reviews</span>
            </div>
            <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
          </div>

          <p className="product-description">{product.longDescription}</p>

          <div className="product-options">
            <div className="color-selection">
              <h3>Color</h3>
              <div className="color-options">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`color-btn ${color === selectedColor ? 'active' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="size-selection">
              <h3>Size</h3>
              <div className="size-options">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`size-btn ${size === selectedSize ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="product-actions">
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart({
                ...product,
                selectedColor,
                selectedSize
              })}
            >
              Add to Cart
            </button>
            <div className="stock-info">
              {product.stock > 0 ? (
                <span className="in-stock">In Stock ({product.stock} available)</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>
          </div>

          <div className="product-features">
            <h3>Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="product-specs">
            <h3>Specifications</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Material</span>
                <span className="spec-value">{product.specs.material}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Waterproof</span>
                <span className="spec-value">{product.specs.waterproof ? 'Yes' : 'No'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Weight</span>
                <span className="spec-value">{product.specs.weight}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="related-products">
        <h2>Related Products</h2>
        <div className="products-grid">
          {relatedProducts.map((relatedProduct) => (
            <div 
              key={relatedProduct.id} 
              className="product-card"
              onClick={() => router.push(`/products/${relatedProduct.id}`)}
            >
              <div className="product-image">
                <Image
                  src={relatedProduct.mainImage}
                  alt={relatedProduct.name}
                  width={300}
                  height={300}
                  className="product-img"
                />
              </div>
              <div className="product-info">
                <h3>{relatedProduct.name}</h3>
                <p className="product-price">₹{relatedProduct.price.toLocaleString('en-IN')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 