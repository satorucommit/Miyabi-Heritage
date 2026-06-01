'use client';
import React from 'react';
import Link from 'next/link';
import { MagneticLink } from './MagneticLink';
import { ScrollReveal } from './ScrollReveal';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bg-watermark">雅</div>
      <div className="footer-container">
        
        <ScrollReveal>
          <div className="footer-top">
            <div className="footer-brand">
              <span className="logo-mark footer-logo">雅</span>
              <h2>Miyabi</h2>
              <p>Preserving the elegance and discipline of traditional Japan. Join us on a journey through time and aesthetics.</p>
            </div>
            
            <div className="footer-newsletter">
              <h3>Subscribe to our journal</h3>
              <div className="newsletter-input-group">
                <input type="email" placeholder="Enter your email address" className="newsletter-input" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="footer-middle">
            <div className="footer-nav-col">
              <h4>Explore</h4>
              <MagneticLink href="/" className="footer-link">Home</MagneticLink>
              <MagneticLink href="/arts" className="footer-link">Traditional Arts</MagneticLink>
              <MagneticLink href="/architecture" className="footer-link">Architecture</MagneticLink>
              <MagneticLink href="/philosophy" className="footer-link">Philosophy</MagneticLink>
            </div>
            
            <div className="footer-nav-col">
              <h4>Connect</h4>
              <MagneticLink href="#" className="footer-link">Instagram</MagneticLink>
              <MagneticLink href="#" className="footer-link">Twitter / X</MagneticLink>
              <MagneticLink href="#" className="footer-link">YouTube</MagneticLink>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Miyabi Heritage Project. All rights reserved.</p>
            <div className="footer-legal">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .site-footer {
          position: relative;
          border-top: 1px solid var(--glass-border);
          padding: 6rem 2rem 2rem 2rem;
          margin-top: auto;
          background: linear-gradient(to bottom, var(--miyabi-bg-charcoal), var(--miyabi-bg-deep));
          overflow: hidden;
        }

        .footer-bg-watermark {
          position: absolute;
          bottom: -10%;
          right: -5%;
          font-family: var(--font-kanji);
          font-size: 30rem;
          color: rgba(255, 255, 255, 0.01);
          z-index: 0;
          pointer-events: none;
          line-height: 1;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 3rem;
        }

        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
          font-size: 2.5rem;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .footer-brand h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .footer-brand p {
          color: var(--miyabi-text-secondary);
          line-height: 1.6;
        }

        .footer-newsletter h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--miyabi-text-primary);
        }

        .newsletter-input-group {
          display: flex;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .newsletter-input-group:focus-within {
          border-color: var(--miyabi-crimson);
        }

        .newsletter-input {
          background: transparent;
          border: none;
          padding: 1rem 1.5rem;
          color: var(--miyabi-text-primary);
          flex: 1;
          outline: none;
          min-width: 250px;
          font-family: var(--font-primary);
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .newsletter-btn {
          background: var(--miyabi-crimson);
          color: white;
          border: none;
          padding: 0 1.5rem;
          font-family: var(--font-primary);
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s;
        }

        .newsletter-btn:hover {
          background: #a00e2b;
        }

        .footer-middle {
          display: flex;
          gap: 5rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-nav-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-nav-col h4 {
          color: var(--miyabi-text-primary);
          margin-bottom: 0.5rem;
          font-size: 1rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--miyabi-text-secondary);
          font-size: 0.875rem;
        }

        .footer-legal {
          display: flex;
          gap: 2rem;
        }

        .footer-legal a {
          color: var(--miyabi-text-secondary);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-legal a:hover {
          color: var(--miyabi-text-primary);
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
          }
          .newsletter-input-group {
            flex-direction: column;
          }
          .newsletter-btn {
            padding: 1rem;
          }
          .footer-middle {
            flex-direction: column;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
      <style jsx global>{`
        .footer-link {
          color: var(--miyabi-text-secondary);
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s, transform 0.3s;
          display: inline-block;
          width: fit-content;
        }
        .footer-link:hover {
          color: var(--miyabi-gold);
          transform: translateX(5px);
        }
      `}</style>
    </footer>
  );
}
