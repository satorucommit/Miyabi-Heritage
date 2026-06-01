'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { LoadingScreen } from './LoadingScreen';
import { Navbar } from './Navigation';
import { Footer } from './Footer';

export function TransitionWrapper({ children }) {
  const [initialLoading, setInitialLoading] = useState(true);
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (initialLoading) return;
    
    // Trigger transition when pathname changes
    setIsTransitioning(true);
    
    // Next.js transitions instantly, but we delay showing new children to simulate the old behavior
    const timer1 = setTimeout(() => {
      window.scrollTo(0, 0);
      setDisplayChildren(children);
      
      const timer2 = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      
      return () => clearTimeout(timer2);
    }, 800);
    
    return () => clearTimeout(timer1);
  }, [pathname, children, initialLoading]);

  // Initial load effect is handled by LoadingScreen onComplete

  return (
    <>
      <div className="grain-overlay"></div>

      {initialLoading && <LoadingScreen onComplete={() => {
        setInitialLoading(false);
        setDisplayChildren(children);
      }} />}

      {!initialLoading && (
        <div className="website-layout animate-fade-in">
          <Navbar />

          {/* Shoji Screen Page Transition Loader */}
          <div className={`shoji-door left-door ${isTransitioning ? 'closed' : ''}`}></div>
          <div className={`shoji-door right-door ${isTransitioning ? 'closed' : ''}`}>
             <div className="shoji-kanji">雅</div>
          </div>

          <main className="content-area">
            {displayChildren}
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}
