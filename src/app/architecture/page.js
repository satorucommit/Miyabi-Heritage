import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata = {
  title: "Architecture - Miyabi Heritage",
  description: "Monuments of Wood and Spirit",
};

export default function Architecture() {
  return (
    <div className="page-animate-in padding-top-nav">
      <section className="arch-section">
        <ScrollReveal>
          <div className="section-header">
            <h2>Monuments of Wood and Spirit</h2>
            <p>Where human ingenuity bows to the cadence of nature.</p>
          </div>
        </ScrollReveal>
        
        <div className="arch-grid">
          {/* Row 1 */}
          <ScrollReveal delay={100} className="arch-card glass-panel">
            <div className="arch-bg pagoda"></div>
            <div className="arch-content">
              <h3>Pagodas (塔)</h3>
              <p>A triumph of ancient engineering. The central pillar (shinbashira) allows these majestic wooden structures to sway and absorb intense earthquakes for over a millennium.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200} className="arch-card glass-panel">
            <div className="arch-bg shrine"></div>
            <div className="arch-content">
              <h3>Shinto Shrines (神社)</h3>
              <p>Characterized by massive Torii gates and simple, unpainted wood. Built to house kami (spirits), shrines are often rebuilt exactly as they were every 20 years.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="arch-card glass-panel">
            <div className="arch-bg castle"></div>
            <div className="arch-content">
              <h3>Castles (城)</h3>
              <p>Soaring keeps built on massive curving stone foundations. Designed for impenetrable defense with hidden floors, yet possessing awe-inspiring aesthetic dominance.</p>
            </div>
          </ScrollReveal>

          {/* Row 2 - New Content */}
          <ScrollReveal delay={100} className="arch-card glass-panel">
            <div className="arch-bg machiya" style={{backgroundImage: 'linear-gradient(to top, var(--miyabi-bg-deep) 0%, transparent 100%), radial-gradient(circle, #554433 0%, transparent 70%)'}}></div>
            <div className="arch-content">
              <h3>Machiya (町屋)</h3>
              <p>Traditional wooden townhouses found throughout Kyoto. They feature slatted wooden facades and beautiful internal courtyard gardens (tsuboniwa) for light and air.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="arch-card glass-panel">
            <div className="arch-bg garden" style={{backgroundImage: 'linear-gradient(to top, var(--miyabi-bg-deep) 0%, transparent 100%), radial-gradient(circle, #2a5a3b 0%, transparent 70%)'}}></div>
            <div className="arch-content">
              <h3>Zen Gardens (枯山水)</h3>
              <p>Karesansui, or dry landscape gardens, use precisely raked sand to represent water and strategically placed rocks to represent islands, meant to aid meditation.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="arch-card glass-panel">
            <div className="arch-bg teahouse" style={{backgroundImage: 'linear-gradient(to top, var(--miyabi-bg-deep) 0%, transparent 100%), radial-gradient(circle, #8a6a4b 0%, transparent 70%)'}}></div>
            <div className="arch-content">
              <h3>Teahouses (茶室)</h3>
              <p>Intentionally humble, rustic structures (chashitsu) with a low entrance (nijiriguchi) that forces all guests, even warlords, to bow and leave their swords outside.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
