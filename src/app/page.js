import React from 'react';
import Link from 'next/link';
import { MagneticLink } from '@/components/MagneticLink';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function Home() {
  return (
    <div className="page-animate-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-watermark">雅</div>
          <ScrollReveal delay={100}>
            <h1 className="hero-title">Echoes of Japan</h1>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="hero-subtitle">
              Step into a world of timeless elegance. Discover the profound aesthetics, 
              ancient disciplines, and unyielding spirit of traditional Japanese culture.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={500}>
            <MagneticLink href="/arts" className="primary-btn hero-btn" style={{textDecoration: 'none'}}>Begin Journey</MagneticLink>
          </ScrollReveal>
          <ScrollReveal delay={700}>
            <div className="scroll-indicator">
              <span>Explore</span>
              <div className="mouse-icon"><div className="wheel"></div></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro Grid */}
      <section className="home-intro-section">
        <ScrollReveal>
          <div className="section-header">
            <h2>The Heart of Miyabi</h2>
            <p>Miyabi (雅) translates to elegance, refinement, and courtliness.</p>
          </div>
        </ScrollReveal>
        
        <div className="intro-grid">
          <ScrollReveal delay={100}>
            <div className="intro-card glass-panel">
              <h3>Timeless Devotion</h3>
              <p>From the precise movements of the tea ceremony to the powerful strokes of calligraphy, Japanese traditions emphasize the journey of mastery over the final destination.</p>
              <Link href="/arts" className="text-link">Explore Arts →</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="intro-card glass-panel">
              <h3>Harmony with Nature</h3>
              <p>Architecture in Japan doesn&#39;t conquer nature; it bows to it. Shrines, temples, and pagodas are intricately built to coexist seamlessly with their environments.</p>
              <Link href="/architecture" className="text-link">Explore Architecture →</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="intro-card glass-panel">
              <h3>Profound Philosophy</h3>
              <p>Finding beauty in the imperfect, and seeing the universe in a single grain of sand. The mindsets of Zen, Wabi-Sabi, and Kintsugi guide all Japanese arts.</p>
              <Link href="/philosophy" className="text-link">Explore Philosophy →</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Historical Eras */}
      <section className="eras-section">
        <ScrollReveal>
          <div className="section-header">
            <h2>Chronicles of Time</h2>
            <p>The eras that forged the soul of the nation.</p>
          </div>
        </ScrollReveal>
        
        <div className="bento-container">
          <ScrollReveal delay={100} className="side-card" style={{gridColumn: 'span 4'}}>
            <div className="bento-card" style={{height: '100%'}}>
              <h3 className="card-title">Heian (794 - 1185)</h3>
              <p className="cap-desc">The golden age of the imperial court. Poetry, literature (like The Tale of Genji), and the very concept of &quot;Miyabi&quot; were born here.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} className="side-card" style={{gridColumn: 'span 4'}}>
            <div className="bento-card" style={{height: '100%'}}>
              <h3 className="card-title">Edo (1603 - 1867)</h3>
              <p className="cap-desc">A 250-year period of unprecedented peace. The merchant class rose, giving birth to Haiku, Kabuki theater, and Ukiyo-e woodblock prints.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300} className="side-card" style={{gridColumn: 'span 4'}}>
            <div className="bento-card" style={{height: '100%'}}>
              <h3 className="card-title">Meiji (1868 - 1912)</h3>
              <p className="cap-desc">The borders opened, bringing rapid modernization. The samurai class dissolved, but the traditional heart of Japan remained resilient.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
