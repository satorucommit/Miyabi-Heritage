'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';

export function MagneticLink({ children, href, className, style, ...props }) {
  const linkRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!linkRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = linkRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Link
      href={href}
      ref={linkRef}
      className={`magnetic-btn ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        display: 'inline-block',
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
