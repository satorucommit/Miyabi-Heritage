import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata = {
  title: "Traditional Arts - Miyabi Heritage",
  description: "The Disciplines of Harmony",
};

export default function Arts() {
  return (
    <div className="page-animate-in padding-top-nav">
      <section className="arts-section">
        <ScrollReveal>
          <div className="section-header">
            <h2>The Disciplines of Harmony</h2>
            <p>Centuries of devotion distilled into purest expression.</p>
          </div>
        </ScrollReveal>

        <div className="bento-container">
          {/* Featured: Chadō */}
          <ScrollReveal delay={100} className="bento-card featured-card chado-card" style={{gridColumn: 'span 12'}}>
            <div className="card-watermark">茶</div>
            <div style={{flex: 1}}>
              <h3 className="card-title text-4xl">Chadō (茶道)</h3>
              <p className="stats-text">The Way of Tea</p>
              <div className="art-description">
                <p>
                  More than the preparation of matcha, Chadō is a choreographic ritual of preparing and serving 
                  Japanese green tea. It embodies harmony, respect, purity, and tranquility (Wa, Kei, Sei, Jaku).
                  Every movement, from the folding of the napkin to the wiping of the bowl, is calculated and deliberate.
                </p>
              </div>
            </div>
            <div className="image-placeholder tea-img" style={{position: 'relative', overflow: 'hidden', padding: 0, border: 'none'}}>
              <Image 
                src="/assets/tea.png" 
                alt="Japanese Tea Ceremony" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{objectFit: 'cover', borderRadius: '12px'}} 
              />
            </div>
          </ScrollReveal>

          {/* Row 2 */}
          <ScrollReveal delay={200} className="bento-card side-card" style={{gridColumn: 'span 6'}}>
            <div className="card-watermark">花</div>
            <h3 className="card-title">Ikebana</h3>
            <p className="stats-text">Giving Life to Flowers</p>
            <div className="art-description">
              <p>The traditional art of flower arrangement, emphasizing shape, line, and form to create a link between humanity and nature. Unlike western arrangements, Ikebana heavily utilizes empty space.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="bento-card side-card" style={{gridColumn: 'span 6'}}>
            <div className="card-watermark">書</div>
            <h3 className="card-title">Shodō</h3>
            <p className="stats-text">The Way of Writing</p>
            <div className="art-description">
              <p>Japanese calligraphy. It is considered an active meditation, where the brush becomes an extension of the soul. A single stroke can never be corrected or painted over.</p>
            </div>
          </ScrollReveal>

          {/* Row 3 - New Content */}
          <ScrollReveal delay={100} className="bento-card side-card" style={{gridColumn: 'span 4'}}>
            <div className="card-watermark" style={{fontSize: '8rem'}}>盆</div>
            <h3 className="card-title">Bonsai</h3>
            <p className="stats-text">The Illusion of Age</p>
            <div className="art-description">
              <p>The cultivation of miniature trees mimicking the shape and scale of full-size trees. It requires decades of daily care, patience, and pruning.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="bento-card side-card" style={{gridColumn: 'span 4'}}>
            <div className="card-watermark" style={{fontSize: '8rem'}}>折</div>
            <h3 className="card-title">Origami</h3>
            <p className="stats-text">Paper Folding</p>
            <div className="art-description">
              <p>The art of transforming a single flat sheet of square paper into a finished sculpture through folding and sculpting techniques without cutting.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="bento-card side-card" style={{gridColumn: 'span 4'}}>
            <div className="card-watermark" style={{fontSize: '8rem'}}>能</div>
            <h3 className="card-title">Noh Theater</h3>
            <p className="stats-text">Spirits on Stage</p>
            <div className="art-description">
              <p>The oldest major theater art still regularly performed. It involves wooden masks, slow rhythmic movements, and spiritual tales of ghosts and samurai.</p>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
