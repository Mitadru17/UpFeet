'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Here you would normally send the data to your API
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <main className="page-container">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </section>
      
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              rows={5} 
              required
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'loading'}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className={`submit-btn ${status}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 
             status === 'success' ? 'Message Sent!' :
             status === 'error' ? 'Error! Try Again' :
             'Send Message'}
          </button>
        </form>
      </section>
    </main>
  );
} 