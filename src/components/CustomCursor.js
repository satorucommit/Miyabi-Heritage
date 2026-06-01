'use client';
import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setMounted(true);
    let animationFrameId;

    const onMouseMove = (e) => {
      setIsHidden(false);
      // Smooth following effect
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('magnetic-btn') ||
        target.classList.contains('intro-card') ||
        target.classList.contains('bento-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div 
        className={`custom-cursor-dot ${isHidden ? 'hidden' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`custom-cursor-outline ${isHidden ? 'hidden' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, .intro-card, .bento-card, .magnetic-btn {
          cursor: none !important;
        }
        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background-color: var(--miyabi-crimson);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 99999;
          transition: width 0.3s, height 0.3s, background-color 0.3s;
        }
        .custom-cursor-outline {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(220, 20, 60, 0.4);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 99998;
          transition: width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s, transform 0.1s ease-out;
        }
        .custom-cursor-dot.hovering {
          width: 0px;
          height: 0px;
        }
        .custom-cursor-outline.hovering {
          width: 60px;
          height: 60px;
          background-color: rgba(220, 20, 60, 0.1);
          border-color: var(--miyabi-crimson);
          backdrop-filter: blur(2px);
        }
        .custom-cursor-dot.hidden, .custom-cursor-outline.hidden {
          opacity: 0;
        }
      `}</style>
    </>
  );
}
