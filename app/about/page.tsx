'use client';

export default function About() {
  return (
    <main className="page-container">
      <section className="page-header">
        <h1>About Us</h1>
        <p>The story behind UpFeet</p>
      </section>
      
      <section className="about-content">
        <div className="about-grid">
          <div className="about-card">
            <h2>Our Story</h2>
            <p>Founded with a vision to revolutionize footwear through technology and design...</p>
          </div>
          
          <div className="about-card">
            <h2>Our Mission</h2>
            <p>Creating innovative footwear that combines style, comfort, and functionality...</p>
          </div>
          
          <div className="about-card">
            <h2>Our Values</h2>
            <p>Committed to sustainability, innovation, and customer satisfaction...</p>
          </div>
        </div>
      </section>
    </main>
  );
} 