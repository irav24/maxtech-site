import React from 'react';
export function PageHero({ label, title, subtitle }) {
  return (
    <div className="noise-bg" style={{ padding: '6rem 0 4rem', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#009DE0', zIndex: 2 }} />
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
        <p style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>{label}</p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '900', color: '#ffffff', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.15', marginBottom: '1rem' }}>{title}</h1>
        {subtitle && <p style={{ color: '#F4F4F0', fontSize: '1.1rem', maxWidth: '560px', lineHeight: '1.8' }}>{subtitle}</p>}
      </div>
    </div>
  );
}