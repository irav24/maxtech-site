import React from 'react';

export function PageHero({ label, title, subtitle, hasWatermark, bgImage }) {
  return (
    <div style={{ 
      padding: '7rem 0 5rem', 
      overflow: 'hidden', 
      position: 'relative',
      /* THIS IS THE MAGIC LINE WE WERE MISSING */
      background: bgImage ? `url(${bgImage}) center/cover no-repeat` : '#0A0F1C'
    }}>
      
      {/* Dark Overlay (so text is readable over your real photos) */}
      {bgImage && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(10, 15, 28, 0.8)', zIndex: 0 }} />
      )}

      {/* Noise Texture */}
      <div className="noise-bg" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.5, pointerEvents: 'none' }} />

      {/* The ABB-Style Watermark */}
      {hasWatermark && (
        <div style={{
          position: 'absolute',
          right: '-5%',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.03,
          pointerEvents: 'none',
          zIndex: 1
        }}>
          <svg width="600" height="600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ color: '#ffffff' }}>
            <path d="M12 2L2 7L12 12L22 7L12 2Z" />
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      )}

      {/* The Blue Accent Line */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#009DE0', zIndex: 2 }} />
      
      {/* The Text Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
        <p style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>{label}</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: '#ffffff', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '1.25rem' }}>{title}</h1>
        {subtitle && <p style={{ color: '#E2E8F0', fontSize: '1.15rem', maxWidth: '600px', lineHeight: '1.8' }}>{subtitle}</p>}
      </div>
    </div>
  );
}