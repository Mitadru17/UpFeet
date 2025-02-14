'use client';

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { useCart } from './context/CartContext';
import Cart from './components/Cart';
import { useRouter } from 'next/navigation';
import { getBestSellers } from './data/products';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const contactVideoRef = useRef<HTMLVideoElement>(null);
  const [isContactVideoLoaded, setIsContactVideoLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const reviews = [
    {
      text: "Its a nice experience to view how the shawls are made. You can also buy shawls from the shop upstairs (no discount) and jam and other things as well with proper bill.",
      author: "SAMAY BHATNAGAR",
      date: "JULY 1, 2024",
      avatar: "S",
      rating: 5,
      image: "/images/customers/customer1.jpg",
      location: "New York, USA"
    },
    {
      text: "Amazing quality and design. The techwear aesthetics are on point, and the comfort level is unmatched. Definitely worth the investment!",
      author: "ALEX CHEN",
      date: "JUNE 28, 2024",
      avatar: "A",
      rating: 5,
      image: "/images/customers/customer2.jpg",
      location: "Tokyo, Japan"
    },
    {
      text: "The attention to detail in these shoes is incredible. Perfect blend of style and functionality. Customer service was excellent too!",
      author: "MIRA PATEL",
      date: "JUNE 15, 2024",
      avatar: "M",
      rating: 5,
      image: "/images/customers/customer3.jpg",
      location: "London, UK"
    },
    {
      text: "These shoes have completely transformed my daily commute. The comfort and durability are exceptional, and they look incredibly stylish!",
      author: "JAMES WILSON",
      date: "JUNE 10, 2024",
      avatar: "J",
      rating: 5,
      image: "/images/customers/customer4.jpg",
      location: "San Francisco, USA"
    },
    {
      text: "Perfect blend of fashion and function. The water-resistant feature has been a game-changer during rainy season.",
      author: "EMMA THOMPSON",
      date: "JUNE 5, 2024",
      avatar: "E",
      rating: 5,
      image: "/images/customers/customer5.jpg",
      location: "Berlin, Germany"
    },
    {
      text: "The innovative design caught my eye, but the comfort kept me coming back. I now own three pairs!",
      author: "DAVID KIM",
      date: "MAY 28, 2024",
      avatar: "D",
      rating: 5,
      image: "/images/customers/customer6.jpg",
      location: "Seoul, South Korea"
    },
    {
      text: "Exceptional build quality. These shoes handle everything from city streets to light trails with ease.",
      author: "SOPHIA RODRIGUEZ",
      date: "MAY 20, 2024",
      avatar: "S",
      rating: 5,
      image: "/images/customers/customer7.jpg",
      location: "Paris, France"
    },
    {
      text: "The customer service team went above and beyond to help me find the perfect fit. Very impressed!",
      author: "LUCAS ZHANG",
      date: "MAY 15, 2024",
      avatar: "L",
      rating: 5,
      image: "/images/customers/customer8.jpg",
      location: "Sydney, Australia"
    }
  ];
  
  const { addToCart, setIsCartOpen, totalItems } = useCart();
  const router = useRouter();
  
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Optimize video loading
      video.preload = "metadata";  // Only load metadata initially
      video.playsInline = true;    // Better mobile performance
      video.muted = true;          // Ensure muted for autoplay
      video.playbackRate = 0.8;    // Set playback rate immediately

      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        // Use requestAnimationFrame for smoother playback
        requestAnimationFrame(() => {
          video.play().catch(error => {
            console.error('Hero video autoplay error:', error.message);
          });
        });
      };
      
      const handleError = (e: any) => {
        console.error('Hero video error:', e.target.error);
        setIsVideoLoaded(false);
      };
      
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  useEffect(() => {
    const video = contactVideoRef.current;
    if (video) {
      // Optimize contact video loading
      video.preload = "metadata";
      video.playsInline = true;
      video.muted = true;
      video.playbackRate = 0.8;
      
      const handleCanPlay = () => {
        setIsContactVideoLoaded(true);
        requestAnimationFrame(() => {
          video.play().catch(() => {
            // Fallback for autoplay restrictions
            const playOnClick = () => {
              video.play();
              document.removeEventListener('click', playOnClick);
            };
            document.addEventListener('click', playOnClick);
          });
        });
      };
      
      const handleError = (e: any) => {
        console.error('Contact video error:', e.target.error);
        setIsContactVideoLoaded(false); // Show placeholder on error
      };
      
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-item, .blend-reveal'
      );
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
          // Add extra class for blend effect
          if (element.classList.contains('blend-reveal')) {
            element.style.willChange = 'transform, opacity, filter';
            // Remove will-change after animation
            setTimeout(() => {
              element.style.willChange = 'auto';
            }, 1000);
          }
        }
      });
    };
    
    // Run once after initial render
    setTimeout(() => {
      handleScroll();
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleNavigation = (section: string) => {
    router.push(`/${section}`);
  };

  const handleExplore = () => {
    router.push('/products');
  };

  const handleTakeLook = () => {
    router.push('/products?type=shoes');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your email subscription logic here
    alert('Thank you for subscribing!');
  };

  return (
    <main className="overflow-x-hidden home-page">
      <div 
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-video">
          {!isVideoLoaded && (
            <div className="video-placeholder">
        <Image
                src="/images/video-placeholder.jpg"
                alt="Video Placeholder"
                fill
                className="object-cover"
          priority
        />
            </div>
          )}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            className={`video-background ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            poster="/images/video-placeholder.jpg"
          >
            <source 
              src="/videos/hero.mp4" 
              type="video/mp4"
              media="all"
            />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Sneaky<br />Shoes.
          </h1>
          <p className="hero-text">
            Introducing our exclusive techwear sneakers, inspired by modern street
            fashion and urban aesthetics.
          </p>
          <button 
            className="explore-btn"
            onClick={() => router.push('/products')}
          >
            Explore Collection <span className="icon-x">→</span>
          </button>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* Best Sellers Section */}
      <section className="bestsellers blend-reveal">
        <div className="section-header">
          <h2>Our Bestsellers</h2>
          <button 
            className="more-btn"
            onClick={() => router.push('/products')}
          >
            View All
          </button>
        </div>
        <div className="product-grid blend-stagger">
          {getBestSellers().map((product) => (
            <div 
              key={product.id}
              className="product-card blend-reveal"
              onClick={() => router.push(`/products/${product.id}`)}
            >
              <div className={`product-image ${product.type === 'shoes' ? 'shoe-image' : ''}`}>
                <Image
                  src={product.mainImage}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="product-img"
                  priority={true}
                />
                <button 
                  className="quick-add"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
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
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* Categories Section */}
      <section className="categories blend-reveal">
        <div className="category men reveal-left" 
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/men-shoe.jpg")' }}>
          <div className="category-labels">
            <div className="category-tags">
              <span>(backpacks)</span>
              <span>(shoes)</span>
              <span>(clothes)</span>
            </div>
            <div className="category-content">
              <h2>for<br/>/men</h2>
              <button 
                className="more-btn"
                onClick={() => router.push('/products?category=men')}
              >
                More →
              </button>
            </div>
          </div>
        </div>
        <div className="category women reveal-right" 
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/women-shoe.jpg")' }}>
          <div className="category-labels">
            <div className="category-tags">
              <span>(backpacks)</span>
              <span>(shoes)</span>
              <span>(clothes)</span>
            </div>
            <div className="category-content">
              <h2>for<br/>/women</h2>
              <button 
                className="more-btn"
                onClick={() => router.push('/products?category=women')}
              >
                More →
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* Why Choose Us Section */}
      <section className="why-choose blend-reveal">
        <div className="why-choose-header">
          <h2>Why<br/>Choose us?</h2>
          <button 
            className="about-btn"
            onClick={() => router.push('/why-us')}
          >
            About Us →
          </button>
        </div>
        <div className="why-choose-content blend-stagger">
          <div className="faq-item blend-reveal">
            <h3>What makes Techwear different</h3>
            <p>Techwear merges advanced materials with innovative design, offering apparel that's not only stylish but also functional.</p>
          </div>
          <div className="faq-item blend-reveal">
            <h3>Is Techwear for everyday use?</h3>
            <p>Absolutely. Techwear is designed for versatility. Whether you're navigating the urban jungle or exploring the great outdoors</p>
          </div>
          <div className="faq-item blend-reveal">
            <h3>How does Techwear incorporate technology?</h3>
            <p>Techwear integrates advanced fabrics and smart features, such as water resistance, breathability, and temperature control, ensuring that you stay comfortable and prepared, no matter the conditions.</p>
          </div>
          <div className="faq-item blend-reveal">
            <h3>Is Techwear sustainable?</h3>
            <p>Yes, sustainability is a key focus. Many Techwear items are crafted from eco-friendly materials and designed to last, reducing the need for frequent replacements and minimizing environmental impact.</p>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* Featured Products */}
      <section className="featured-product">
        <div className="featured-slider" 
          style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/images/sneaker-bg.jpg")' }}>
          <div className="featured-content">
            <div className="product-name">
              {[...Array(6)].map((_, i) => (
                <span key={i}>Next-Gen Sneakers</span>
              ))}
            </div>
            <button 
              className="take-look-btn"
              onClick={handleTakeLook}
            >
              Take a look
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-left">
          <h2>Connect<span className="text-gray-500">.</span><br/>with us</h2>
          <p className="contact-text">
            Got questions or need assistance?<br/>
            Our team is here to help you navigate<br/>
            the future of fashion. Reach out to us<br/>
            anytime—let's connect and gear you<br/>
            up for what's next!
          </p>
          <form className="email-input" onSubmit={handleSubscribe}>
            <input type="email" placeholder="Your Email" required />
            <button type="submit" className="submit-arrow">
              →
            </button>
          </form>
        </div>
        <div className="contact-right">
          <div className="contact-video">
            {!isContactVideoLoaded && (
              <div className="video-placeholder">
          <Image
                  src="/images/contact-placeholder.jpg"
                  alt="Contact Video Placeholder"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            <video
              ref={contactVideoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              className={`contact-video-player ${isContactVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              poster="/images/contact-placeholder.jpg"
            >
              <source 
                src="/videos/connectwithus/contact.mp4" 
                type="video/mp4"
                media="all"
                crossOrigin="anonymous"
              />
              Your browser does not support the video tag.
            </video>
            <div className="contact-video-overlay"></div>
          </div>
        </div>
      </section>

      <div className="section-divider">
        <div className="divider-line"></div>
      </div>

      {/* Customer Reviews */}
      <section className="reviews reveal">
        <h2 className="reviews-title reveal-item">
          What Our Customers Say
          <div className="gradient-text">About Our Products</div>
        </h2>
        <div className="google-rating">
          <div className="rating-card reveal-item">
            <div className="rating-header">
              <div className="google-icon">
                <Image
                  src="/images/google-icon.png"
                  alt="Google Reviews"
                  width={24}
                  height={24}
                />
              </div>
              <div className="rating-title">Google Reviews</div>
            </div>
            <div className="rating-content">
              <div className="stars">
                <div className="star-rating">
                  <span className="rating-number">4.8</span>
                  <div className="stars-container">
                    {"★".repeat(5)}
                  </div>
                </div>
              </div>
              <p>Based on 727 reviews</p>
              <div className="powered-by">
                powered by <span className="google-text">Google</span>
              </div>
              <button className="review-btn">
          <Image
                  src="/images/google-icon.png"
                  alt="Google"
                  width={20}
                  height={20}
                />
                Write a review
              </button>
            </div>
          </div>
        </div>
        <div className="reviews-carousel reveal">
          <button 
            className="carousel-btn prev"
            onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
          >
            ←
          </button>
          <div className="reviews-slider" style={{ transform: `translateX(-${currentReview * 100}%)` }}>
            {reviews.map((review, index) => (
              <div key={index} className={`review-card ${index === currentReview ? 'active' : ''}`}>
                <div className="review-header">
                  <div className="reviewer-image">
                    {review.image ? (
          <Image
                        src={review.image}
                        alt={review.author}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="reviewer-avatar">{review.avatar}</div>
                    )}
                  </div>
                  <div className="reviewer-info">
                    <h4>{review.author}</h4>
                    <p className="reviewer-location">{review.location}</p>
                  </div>
                </div>
                <div className="review-stars">
                  <div className="stars-container">
                    {"★".repeat(review.rating)}
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-footer">
                  <div className="verified-badge">✓ Verified Purchase</div>
                  <div className="review-helpful">
                    <button className="helpful-btn">
                      <span>👍</span> Helpful
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="carousel-btn next"
            onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
          >
            →
          </button>
        </div>
        <div className="review-dots">
          {reviews.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentReview ? 'active' : ''}`}
              onClick={() => setCurrentReview(index)}
            ></span>
          ))}
        </div>
        <div className="review-summary">
          <div className="summary-content">
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-number">4.8</span>
                <span className="stat-label">Average Rating</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">1,814</span>
                <span className="stat-label">Total Reviews</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Recommend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>[SHOP]</h3>
            <ul>
              <li><button onClick={() => router.push('/products')}>Products</button></li>
              <li><button onClick={() => router.push('/why-us')}>Why Us</button></li>
              <li><button onClick={() => router.push('/blog')}>Blog</button></li>
              <li><button onClick={() => router.push('/contact')}>Contact</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>[INFO]</h3>
            <ul>
              <li><a href="https://instagram.com/upfeet" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com/upfeet" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://linkedin.com/company/upfeet" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
              <li><a href="https://twitter.com/upfeet" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>[FOLLOW_US_]</h3>
            <ul>
              <li><button onClick={() => router.push('/style-guide')}>Style Guide</button></li>
              <li><button onClick={() => router.push('/licensing')}>Licensing</button></li>
              <li><button onClick={() => router.push('/instructions')}>Instructions</button></li>
              <li><button onClick={() => router.push('/changelog')}>Change Log</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>[NEWSLETTER]</h3>
            <div className="newsletter-signup">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="newsletter-input"
              />
              <button className="newsletter-submit">→</button>
            </div>
          </div>
        </div>
      </footer>

      <Cart />
    </main>
  );
}
