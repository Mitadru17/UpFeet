'use client';

import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export default function WhyUs() {
  const features: Feature[] = [
    {
      title: "Innovative Design",
      description: "Our shoes combine cutting-edge technology with modern aesthetics, creating footwear that's both functional and stylish.",
      icon: "🎯"
    },
    {
      title: "Premium Materials",
      description: "We use only the highest quality, sustainable materials to ensure durability, comfort, and minimal environmental impact.",
      icon: "✨"
    },
    {
      title: "Advanced Technology",
      description: "Each pair incorporates the latest footwear technology for maximum comfort, support, and performance.",
      icon: "🔧"
    },
    {
      title: "Urban Functionality",
      description: "Designed for the modern urban environment, our shoes adapt to your lifestyle while maintaining peak performance.",
      icon: "🌆"
    },
    {
      title: "Customer Focus",
      description: "We prioritize customer satisfaction with excellent support and a hassle-free shopping experience.",
      icon: "🤝"
    },
    {
      title: "Sustainable Practice",
      description: "Our commitment to sustainability ensures that every step of production considers environmental impact.",
      icon: "🌱"
    }
  ];

  return (
    <main className="page-container">
      <section className="page-header">
        <h1>Why Choose Us</h1>
        <p>Discover what makes our techwear footwear unique</p>
      </section>

      <section className="hero-grid">
        <div className="hero-content">
          <h2>The Future of Footwear</h2>
          <p>
            At UpFeet, we're revolutionizing the way you think about shoes. 
            Our innovative approach combines cutting-edge technology with 
            urban aesthetics to create footwear that's perfect for the 
            modern lifestyle.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Advanced Technology</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌟</span>
              <span>Premium Quality</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">♻️</span>
              <span>Sustainable Design</span>
            </div>
          </div>
        </div>
        <div className="hero-images">
          <div className="image-container primary">
            <Image
              src="/images/shoe-front.jpg"
              alt="UpFeet Innovation Front View"
              width={500}
              height={600}
              className="main-image"
              priority
            />
          </div>
          <div className="image-container secondary">
            <Image
              src="/images/shoe-detail.jpg"
              alt="UpFeet Innovation Detail"
              width={300}
              height={400}
              className="detail-image"
            />
          </div>
        </div>
      </section>

      <section className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Unique Designs</p>
        </div>
        <div className="stat-card">
          <h3>98%</h3>
          <p>Satisfaction Rate</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
      </section>
    </main>
  );
} 