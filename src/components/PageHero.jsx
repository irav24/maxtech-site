import React from 'react';

export function PageHero({ label, title, subtitle, hasWatermark, bgImage }) {
  return (
    <div style={{ 
      padding: 'clamp(4rem, 8vw, 7rem) 0 clamp(3rem, 5vw, 5rem)', 
      overflow: 'hidden', 
      position: 'relative',
     
      background: bgImage ? `url(${bgImage}) center/cover no-repeat` : '#0A0F1C'
    }}>
      
      
      {/* The Premium Blue Gradient Overlay */}
      {bgImage && (
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.75) 0%, rgba(0, 157, 224, 0.4) 100%)', 
          zIndex: 0 
        }} />
      )}

      {/* Noise Texture */}
      <div className="noise-bg" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.5, pointerEvents: 'none' }} />

     

      {/* The Blue Accent Line */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#009DE0', zIndex: 2 }} />
      
      {/* The Text Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)', position: 'relative', zIndex: 2 }}>
        <p style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>{label}</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: '#ffffff', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '1.25rem' }}>{title}</h1>
        {subtitle && <p style={{ color: '#E2E8F0', fontSize: '1.15rem', maxWidth: '600px', lineHeight: '1.8' }}>{subtitle}</p>}
      </div>
    </div>
  );
}