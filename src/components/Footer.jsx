import React from 'react';
// Keep this bulletproof import!
import footerBg from '../assets/footer-banner.jpg'; 

export function Footer() {
  return (
    <footer>
      {/* --- SECTION 1: THE LINKS (Solid Dark Blue) --- */}
      <div style={{ background: '#050A14', padding: '4rem 0 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Put your existing links, columns, and copyright text back here */}
          
        </div>
      </div>

      {/* --- SECTION 2: THE BOTTOM IMAGE (Exactly like your screenshot) --- */}
      <div style={{ width: '100%', height: '350px', position: 'relative' }}>
        
        <img 
          src={footerBg} 
          alt="Excellence in Engineering" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
        
        {/* Dark gradient at the bottom so the white text is readable */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)', zIndex: 1 }} />

        {/* The Text from your screenshot */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '5%', zIndex: 2 }}>
          <h2 style={{ 
            color: '#ffffff', 
            fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
            fontFamily: "'Barlow Condensed', sans-serif", 
            letterSpacing: '4px', 
            textTransform: 'uppercase',
            margin: 0
          }}>
            EXCELLENCE IN ENGINEERING
          </h2>
        </div>

      </div>
    </footer>
  );
}