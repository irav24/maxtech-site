import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

// --- IMPORT YOUR PHOTOS ---
// Use your actual file paths here
import bg2 from '../assets/gallery/bg2.jpg';
import gallery1 from '../assets/gallery/gallery1.jpg';
import gallery2 from '../assets/gallery/gallery2.jpg';
import gallery3 from '../assets/gallery/gallery3.jpg';
import gallery4 from '../assets/gallery/gallery4.jpg';
import gallery5 from '../assets/gallery/gallery5.jpg';
import gallery6 from '../assets/gallery/gallery6.jpg';
import gallery7 from '../assets/gallery/gallery7.jpg';
import gallery8 from '../assets/gallery/gallery8.jpg';
import gallery9 from '../assets/gallery/gallery9.jpg';
import gallery10 from '../assets/gallery/gallery10.jpg';
import gallery11 from '../assets/gallery/gallery11.jpg';
import gallery12 from '../assets/gallery/gallery12.jpg';
import gallery13 from '../assets/gallery/gallery13.jpg';
import gallery14 from '../assets/gallery/gallery14.jpg';
import gallery15 from '../assets/gallery/gallery15.jpg';
import gallery16 from '../assets/gallery/gallery16.jpg';
import gallery17 from '../assets/gallery/gallery17.jpg';
import gallery18 from '../assets/gallery/gallery18.jpg';
import gallery19 from '../assets/gallery/gallery19.jpg';
import gallery20 from '../assets/gallery/gallery20.jpg';
import galleryxx from '../assets/gallery/galleryxx.jpg';
import gelleryhero from '../assets/gelleryhero.jpg';
// Mixing in some project photos makes the gallery look massive!

export function Gallery() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Throw all the images you want to show into this array
  const ALL_IMAGES = [
  gallery1, gallery5, gallery12, gallery20, 
  gallery2, gallery14, gallery8, gallery19, 
  gallery3, bg2, gallery10, gallery17, 
  gallery4, gallery11, gallery6, gallery15, 
  galleryxx, gallery7, gallery18, gallery9, 
  gallery13, gallery16
];

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      
      {/* 1. The Hero Section */}
      <PageHero 
        bgImage={gelleryhero} 
        label="Visual Archive" 
        title="Site Execution Gallery" 
        subtitle="A closer look at our heavy lifting operations, structural fabrication, and on-site execution across India's most demanding infrastructure corridors." 
      />

      {/* 2. The Photo Grid */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {ALL_IMAGES.map((imgSrc, i) => {
              // Local state to track which image is being hovered
              const [isHovered, setIsHovered] = useState(false);
              
              return (
                <div 
                  key={i}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ 
                    aspectRatio: '4/3', // Forces all photos to be perfect, uniform rectangles!
                    overflow: 'hidden', 
                    borderRadius: '4px',
                    background: '#E2E8F0', // Nice grey placeholder while image loads
                    boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : 'none',
                    transition: 'box-shadow 0.4s ease',
                    cursor: 'crosshair' // Gives it a cool, architectural feel
                  }}
                >
                  <img 
                    src={imgSrc} 
                    alt={`Maxtech Site Execution ${i + 1}`} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' // Buttery smooth easing math
                    }} 
                  />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Bottom CTA Strip */}
      <section style={{ background: '#0F172A', padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif" }}>
              Ready to execute your next project?
            </h2>
            <p style={{ color: '#94A3B8', marginTop: '0.4rem' }}>
              Submit your structural drawings for a precise estimation and method statement.
            </p>
          </div>
          <Link to="/contact" style={{ background: '#009DE0', color: '#fff', padding: '15px 36px', borderRadius: '2px', fontWeight: '800', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Contact Engineering Team &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}