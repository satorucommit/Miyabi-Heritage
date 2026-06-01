'use client';
import React, { useEffect, useRef, useState } from 'react';

export function LoadingScreen({ onComplete }) {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (pathRef.current) {
      let d = "";
      for(let t = -Math.PI / 2; t <= Math.PI * 1.6; t += 0.1) {
        const radiusX = 160 + (Math.random() * 8 - 4);
        const radiusY = 150 + (Math.random() * 8 - 4);
        const x = 500 + Math.cos(t) * radiusX;
        const y = 300 + Math.sin(t) * radiusY;
        
        if (t === -Math.PI / 2) {
          d += `M ${x} ${y} `;
        } else {
          d += `L ${x} ${y} `;
        }
      }
      
      pathRef.current.setAttribute('d', d);
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = length;
      pathRef.current.style.strokeDashoffset = length;

      setTimeout(() => {
        if (pathRef.current) {
          pathRef.current.style.transition = 'opacity 1s ease-out, filter 1s ease-out';
          pathRef.current.style.opacity = '0';
          pathRef.current.style.filter = 'blur(10px)';
          createParticles(containerRef.current, pathRef.current);
        }
      }, 2500);

      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 4500);
    }
  }, [onComplete]);

  const createParticles = (container, pathEl) => {
    if (!container || !pathEl) return;
    const numParticles = 100;
    const length = pathEl.getTotalLength();
    const svg = pathEl.closest('svg');
    if (!svg) return;
    const svgRect = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;
    
    const scaleX = svgRect.width / viewBox.width;
    const scaleY = svgRect.height / viewBox.height;

    for(let i = 0; i < numParticles; i++) {
      const point = pathEl.getPointAtLength((i / numParticles) * length);
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      const posX = svgRect.left + (point.x * scaleX);
      const posY = svgRect.top + (point.y * scaleY);
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      
      const colors = ['#dc143c', '#ffb7c5', '#9a9a9a', '#e8e6e3'];
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = Math.random() * 0.6 + 0.2;
      
      container.appendChild(particle);
      
      const angle = Math.random() * Math.PI * 2;
      const burstVelocity = Math.random() * 40 + 10;
      const tx = Math.cos(angle) * burstVelocity;
      const ty = Math.sin(angle) * burstVelocity - 200 - Math.random() * 100;
      
      particle.animate([
        { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: particle.style.opacity },
        { transform: `translate(${tx}px, ${ty}px) scale(0) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ], {
        duration: 1200 + Math.random() * 800,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        fill: 'forwards'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div id="loading-screen" className="fade-out-anim">
      <svg id="enso-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
        <path 
          ref={pathRef} 
          className="enso-path" 
          fill="none" 
          stroke="url(#inkGradient)" 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="inkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a26" />
            <stop offset="50%" stopColor="#666" />
            <stop offset="100%" stopColor="#1a1a26" />
          </linearGradient>
        </defs>
      </svg>
      <div id="particle-container" ref={containerRef}></div>
      <div className="loading-kanji animate-fade-in" style={{animationDelay: '1s'}}>雅</div>
    </div>
  );
}
