import React from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata = {
  title: "Philosophy - Miyabi Heritage",
  description: "Philosophies of the East",
};

export default function Philosophy() {
  return (
    <div className="page-animate-in padding-top-nav">
      <section className="capabilities-section">
        <ScrollReveal>
          <div className="section-header">
            <h2>Philosophies of the East</h2>
            <p>Guiding principles that shape the soul of Japanese art and daily life.</p>
          </div>
        </ScrollReveal>

        <div className="capabilities-grid">
          {/* Row 1 */}
          <ScrollReveal delay={100} className="bento-card cap-card">
            <div className="card-watermark">侘</div>
            <div className="card-icon">◯</div>
            <h3 className="card-title">Wabi-Sabi</h3>
            <p className="cap-desc">The core aesthetic of Japan. The appreciation of the imperfect, impermanent, and incomplete. Finding profound beauty in the natural cycle of growth and inevitable decay.</p>
          </ScrollReveal>

          <ScrollReveal delay={200} className="bento-card cap-card">
            <div className="card-watermark">金</div>
            <div className="card-icon">⟡</div>
            <h3 className="card-title">Kintsugi</h3>
            <p className="cap-desc">The art of repairing broken pottery with lacquer dusted with powdered gold. It treats breakage and repair as part of the history of an object, rather than a flaw to disguise.</p>
          </ScrollReveal>

          <ScrollReveal delay={300} className="bento-card cap-card">
            <div className="card-watermark">禅</div>
            <div className="card-icon">△</div>
            <h3 className="card-title">Zen</h3>
            <p className="cap-desc">A school of Mahayana Buddhism emphasizing the value of seated meditation (zazen) and intuition. It deeply influenced the minimalist aesthetic and martial arts of Japan.</p>
          </ScrollReveal>

          {/* Row 2 - New Content */}
          <ScrollReveal delay={100} className="bento-card cap-card">
            <div className="card-watermark">哀</div>
            <div className="card-icon">〰</div>
            <h3 className="card-title">Mono no Aware</h3>
            <p className="cap-desc">Translates to &quot;the pathos of things.&quot; It is a gentle, wistful sadness at the transience of things—most famously embodied by the brief, falling cherry blossoms.</p>
          </ScrollReveal>

          <ScrollReveal delay={200} className="bento-card cap-card">
            <div className="card-watermark">甲</div>
            <div className="card-icon">◈</div>
            <h3 className="card-title">Ikigai</h3>
            <p className="cap-desc">A concept referring to &quot;a reason for being.&quot; It is the intersection of what you love, what you are good at, what the world needs, and what you can be paid for.</p>
          </ScrollReveal>

          <ScrollReveal delay={300} className="bento-card cap-card">
            <div className="card-watermark">改</div>
            <div className="card-icon">⬡</div>
            <h3 className="card-title">Kaizen</h3>
            <p className="cap-desc">The philosophy of continuous improvement. While heavily used in modern business, it roots deeply in the traditional craftsman&#39;s (shokunin) lifelong dedication to perfecting their art.</p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
