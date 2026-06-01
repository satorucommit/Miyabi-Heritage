'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { MagneticLink } from './MagneticLink';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-container">
        <div className="logo-group">
          <span className="logo-mark">雅</span>
          <Link href="/" className="logo-text" style={{textDecoration: 'none'}}>Miyabi Heritage</Link>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/arts">Traditional Arts</Link>
          <Link href="/architecture">Architecture</Link>
          <Link href="/philosophy">Philosophy</Link>
        </div>
        <MagneticLink href="/arts" className="secondary-btn small-btn" style={{textDecoration: 'none'}}>Experience</MagneticLink>
      </div>
    </nav>
  );
}
