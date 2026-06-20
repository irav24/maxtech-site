// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal, AnimatedStat } from '../utils';
import { STATS, CORE_CAPS, PROJECTS, CLIENTS } from '../data';
import gallery4 from '../assets/gallery/gallery4.jpg';
import '../App.css';
import gallery14 from '../assets/gallery/gallery14.jpg';
import galleryxx from '../assets/gallery/galleryxx.jpg';
import gallery19 from '../assets/gallery/gallery19.jpg';
import gallery20 from '../assets/gallery/gallery20.jpg';
import { PRODUCTS } from '../data.jsx'; // Adjust path if needed!
// --- CLIENT LOGO IMPORTS ---


// Add this quick array right below your imports so it's easy to manage
const CAROUSEL_IMAGES = [
  { src: gallery19 },
  { src: gallery20 },
  { src: gallery14},
  { src: galleryxx }
  ];
function CapCard({ cap }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? '#0A0F1C' : '#ffffff', padding: '2.75rem 2.5rem', transition: 'background 0.5s cubic-bezier(0.16, 1, 0.3, 1)', cursor: 'pointer', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div style={{ color: '#009DE0', fontSize: '11px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3px', marginBottom: '1.5rem' }}>{cap.id}</div>
      
      <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: hovered ? '#ffffff' : '#111111', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', marginBottom: '0.9rem', lineHeight: '1.4' }}>{cap.title}</h3>
      
      <p style={{ color: hovered ? '#F4F4F0' : '#64748B', fontSize: '0.87rem', lineHeight: '1.75' }}>{cap.desc}</p>
      
      <Link to="/services" style={{ textDecoration: 'none', marginTop: '1.75rem', color: '#009DE0', fontSize: '11px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '1px', textTransform: 'uppercase' }}>
        Learn more <span style={{ transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)', transform: hovered ? 'translateX(5px)' : 'none' }}>→</span>
      </Link>
    </div>
  );
}

export function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 80); return () => clearTimeout(t); }, []);
  const [secRef, secVisible] = useScrollReveal(0.1);
  const [projRef, projVisible] = useScrollReveal(0.1);

  return (
    <>
      
    <header className="noise-bg" style={{ overflow: 'hidden', minHeight: '100svh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        
        {/* 1. Raw Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline /* CRITICAL for mobile iOS */
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>

        {/* 2. Original Clean Dark Overlay (Slightly darkened on the left for mobile readability) */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,15,28,0.7) 0%, rgba(10,15,28,0.55) 50%, rgba(10,15,28,0.55) 100%)', zIndex: 1 }} />

        {/* 3. The Left Cyan Accent Line */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#009DE0', zIndex: 2 }} />

        {/* 4. The Hero Content */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(5rem, 12vh, 8rem) clamp(1.5rem, 5vw, 3rem)', width: '100%', position: 'relative', zIndex: 2 }}>
          
          <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0s' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,157,224,0.1)', border: '1px solid rgba(0,157,224,0.25)', borderRadius: '3px', padding: '6px 12px', marginBottom: '2rem', backdropFilter: 'blur(4px)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#009DE0', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ color: '#009DE0', fontSize: 'clamp(10px, 2.5vw, 12px)', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '2px', textTransform: 'uppercase' }}>28+ Years of Heavy Infrastructure Excellence</span>
            </div>
          </div>
          
          <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
            {/* FIX 1: Dropped the minimum clamp from 2.8rem to 2.2rem so it doesn't break mobile screens */}
            <h1 style={{ fontSize: 'clamp(2.4rem, 8vw, 5rem)', fontWeight: '900', lineHeight: '1.07', color: '#ffffff', letterSpacing: '-1px', marginBottom: '1.2rem', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>
              Building India's<br /><span style={{ color: '#009DE0' }}>Steel Backbone.</span>
            </h1>
          </div>
          
          <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            {/* THE FIX: Dropped the minimum to 0.875rem (14px) and adjusted the VW curve so it visibly shrinks! */}
            <p style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.15rem)', color: '#EBEBE6', lineHeight: '1.6', marginBottom: '2.5rem', maxWidth: '540px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Specialized heavy civil engineering, steel girder launching, and precision mechanical fabrication — executed at monumental scale across India's most demanding corridors.
            </p>
          </div>
          
          <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0.3s', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/projects" className="cta-btn">Explore Projects →</Link>
            <Link to="/contact" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', color: '#ffffff', padding: '12px 28px', borderRadius: '2px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} 
              onMouseEnter={e => {e.target.style.background = '#ffffff'; e.target.style.color = '#111111'; e.target.style.transform = 'translateY(-2px)';}} 
              onMouseLeave={e => {e.target.style.background = 'rgba(0,0,0,0.4)'; e.target.style.color = '#ffffff'; e.target.style.transform = 'none';}}>
              Contact Us
            </Link>
          </div>

          {/* FIX 3: Replaced the rigid Grid with Flexbox so the stats wrap cleanly on small phones without weird borders */}
          <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0.5s', display: 'flex', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem', marginTop: '4rem', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
            {STATS.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: '900', color: '#009DE0', lineHeight: '1', fontFamily: "'Barlow Condensed', sans-serif", textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}><AnimatedStat value={s.value} /></div>
                <div style={{ color: '#EBEBE6', fontSize: '11px', marginTop: '8px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700', fontFamily: "'Barlow Condensed', sans-serif", textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Ticker */}
      <div className="noise-bg" style={{ borderTop: '1px solid rgba(0,157,224,0.12)', borderBottom: '1px solid rgba(0,157,224,0.12)', padding: '14px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '5rem', animation: 'ticker 22s linear infinite', width: 'max-content' }}>
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span key={i} style={{ color: '#94A3B8', fontSize: '11px', letterSpacing: '2.5px', textTransform: 'uppercase', whiteSpace: 'nowrap', fontWeight: '700', fontFamily: "'Barlow Condensed', sans-serif", position: 'relative', zIndex: 2 }}>{c.name}</span>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <section ref={secRef} style={{ background: '#eef3f5', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div className={`reveal ${secVisible ? 'visible' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What We Do</p>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#111111', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.2' }}>Core Competencies</h2>
            </div>
            <Link to="/services" style={{ color: '#009DE0', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none' }}>All Services →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', border: '2px solid #E2E8F0' }}>
            {CORE_CAPS.map((cap, i) => <CapCard key={i} cap={cap} />)}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projRef} style={{ background: '#eef3f5', padding: '7rem 0', borderTop: '2px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div className={`reveal ${projVisible ? 'visible' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Portfolio</p>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#111111', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.2' }}>Landmark Projects</h2>
            </div>
            <Link to="/projects" style={{ color: '#009DE0', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none' }}>View All Projects →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: '#CBD5E1' }}>
            {PROJECTS.slice(0,3).map((p, i) => {
              const [h, setH] = useState(false);
              return (
                <div key={i} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1.24/1' }}>
                  <img src={p.image} alt={p.title} className="img-industrial" style={{ transform: h ? 'scale(1.08)' : 'scale(1)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(10,15,28,0.9) 100%)' }} />
                  <div style={{ position: 'absolute', inset: 0, padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <span style={{ display: 'inline-block', background: p.color, color: '#fff', fontSize: '10px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 12px', borderRadius: '2px', marginBottom: '0.75rem', alignSelf: 'flex-start' }}>{p.tag}</span>
                    <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.4', marginBottom: '0.4rem' }}>{p.title}</h3>
                    <p style={{ color: '#F4F4F0', fontSize: '12px' }}>{p.client} · {p.year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* --- FEATURED PRODUCTS CAROUSEL --- */}
<section className="section-padding" style={{ background: '#eef3f5', borderTop: '2px solid #E2E8F0' }}>
  
  {/* THE FIX: This wrapper now contains BOTH the header and the carousel */}
  <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
    
    {/* Header Area */}
    <div style={{ padding: '0 2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
      <div>
        <p style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Equipment & Tooling
        </p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0F172A', fontFamily: "'Barlow Condensed', sans-serif", margin: 0 }}>
          Our Products
        </h2>
      </div>
      
      <a href="/products" style={{ color: '#009DE0', fontWeight: '700', fontSize: '14px', textDecoration: 'none', letterSpacing: '1px' }}>
        VIEW FULL INVENTORY &rarr;
      </a>
    </div>

    {/* The Swipeable Scroll Container */}
    <div style={{
      display: 'flex',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      gap: '1.5rem',
      padding: '0 2rem 3rem 2rem', /* The 2rem side padding now perfectly aligns with the header text */
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }}>
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      {/* Only map the first 5 products for the Home page tease */}
      {PRODUCTS.slice(0, 5).map((prod, i) => (
        <div key={i} style={{
          flex: '0 0 auto',
          width: 'clamp(280px, 75vw, 350px)',
          scrollSnapAlign: 'start', 
          background: '#fff',
          border: '1px solid #E2E8F0',
          borderRadius: '4px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
        }}>
          
          {/* Product Image */}
          <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#F1EDE4' }}>
            <img src={prod.img} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          {/* Product Details Area */}
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <span style={{ background: '#F8FAFC', color: '#64748B', fontSize: '9px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 8px', borderRadius: '2px', alignSelf: 'flex-start', marginBottom: '1rem', border: '1px solid #E2E8F0' }}>
              {prod.cat}
            </span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0F172A', lineHeight: '1.4', margin: '0 0 0.5rem 0' }}>
              {prod.name}
            </h3>
            <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>
              {prod.desc.length > 80 ? prod.desc.substring(0, 80) + '...' : prod.desc}
            </p>
            <a href="/products" style={{ textAlign: 'center', background: '#fff', color: '#009DE0', border: '1px solid #009DE0', padding: '10px', fontSize: '10px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', transition: 'all 0.2s' }}>
              View Specs
            </a>
          </div>
          
        </div>
      ))}
    </div>
    
  </div>
</section>
      {/* --- IMAGE CAROUSEL SECTION --- */}
<section className="section-padding" style={{ background: '#eef3f5',borderTop: '2px solid #E2E8F0', overflow: 'hidden' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
    <div>
      <p style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        Visual Archive
      </p>
      <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111111', fontFamily: "'Barlow Condensed', sans-serif", margin: 0 }}>
        Our Gallery
      </h2>
    </div>
    
    {/* The Quick Link to the full gallery you wanted */}
    <a href="/gallery" style={{ color: '#009DE0', fontWeight: '700', fontSize: '14px', textDecoration: 'none', letterSpacing: '1px' }}>
      VIEW ALL PHOTOS &rarr;
    </a>
  </div>

  {/* The Swipeable Scroll Container */}
  <div style={{
    display: 'flex',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    gap: '1.5rem',
    padding: '0 2rem 3rem 2rem', // Extra bottom padding for scrollbar clearance
    scrollbarWidth: 'none', /* Hides scrollbar on Firefox */
    msOverflowStyle: 'none', /* Hides scrollbar on IE/Edge */
  }}>
    {/* This hides the scrollbar on Chrome/Safari while keeping it functional */}
    <style>{`
      div::-webkit-scrollbar { display: none; }
    `}</style>

    {CAROUSEL_IMAGES.map((img, i) => (
      <div key={i} style={{
        flex: '0 0 auto',
        width: 'clamp(280px, 75vw, 450px)', /* 75% width on phones, caps at 450px on desktop */
        aspectRatio: '4/3', /* A slightly tighter, less vertically demanding shape */
        scrollSnapAlign: 'center', /* Snaps perfectly to the center when scrolling */
        position: 'relative',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
      }}>
        
        {/* The Image */}
        <img src={img.src} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        
        {/* The Dark Overlay for Text Readability */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2.5rem 2rem', background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent)' }}>
          <h3 style={{ color: '#fff', margin: 0, fontSize: '1.4rem', fontWeight: '700', letterSpacing: '0.5px' }}>
            {img.title}
          </h3>
        </div>

      </div>
    ))}
  </div>
</section>

      


{/* Why Maxtech */}

{/* Why Maxtech */}
{/* --- WHY CHOOSE US SECTION --- */}
{/* --- WHY CHOOSE US SECTION --- */}
<section style={{ background: '#eef3f5', borderTop: '2px solid #E2E8F0', padding: 'clamp(4rem, 10vw, 7rem) 0' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 2rem)' }}>
    
    {/* THE FIX: min(100%, 450px) allows it to stack perfectly on mobile without horizontal scrolling! */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: 'clamp(2.5rem, 6vw, 4rem)', alignItems: 'start' }}>

      {/* Left Column: Text Content */}
      <div>
        <p style={{ color: '#009DE0', fontSize: '11px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Why Choose Us
        </p>
        
        {/* THE FIX: clamp() makes the massive header shrink fluidly */}
        <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', fontWeight: '900', color: '#111111', fontFamily: "'Barlow Condensed', sans-serif", lineHeight: '1.1', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
          Trusted By India's Top EPC Contractors
        </h2>
        
        {/* THE FIX: clamp() on the paragraph ensures it doesn't look like a giant wall of text on phones */}
        <p style={{ color: '#475569', fontSize: 'clamp(0.95rem, 3vw, 1.05rem)', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '500px' }}>
          Since 1996, Maxtech Brothers has been the preferred execution partner for India's most demanding infrastructure projects. From the Chenab Bridge to the Bullet Train corridor, our name stands for on-time delivery, zero-compromise safety, and engineering precision.
        </p>
        
        <a href="/about" style={{ color: '#009DE0', fontWeight: '800', fontSize: '12px', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Our Story &rarr;
        </a>
      </div>

      {/* Right Column: Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* THE FIX: Switched from a rigid 2-column grid to an auto-fit grid so the cards stack on tiny screens */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', 
          gap: '1px', 
          background: '#CBD5E1', 
          border: '1px solid #CBD5E1', 
          borderRadius: '4px', 
          overflow: 'hidden' 
        }}>
          {[
            'IS Compliant Execution',
            'OHSAS Safety Standards',
            'Calibrated Torque Equipment',
            'Pan-India Deployment'
          ].map((feature, i) => (
            <div key={i} style={{ background: '#0B1120', padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 4vw, 2rem)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ color: '#009DE0', fontSize: '1.2rem', fontWeight: 'bold' }}>✓</span>
              <h4 style={{ color: '#fff', fontSize: 'clamp(11px, 2.5vw, 12px)', fontWeight: '800', letterSpacing: '1px', margin: 0, textTransform: 'uppercase', lineHeight: '1.4' }}>
                {feature}
              </h4>
            </div>
          ))}
        </div>
        
      </div>

    </div>
  </div>
</section>
{/* --- OUR CLIENTS SECTION --- */}
      <section className="section-padding" style={{ background: '#eef3f5',borderTop: '2px solid #E2E8F0', padding: '2rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: "'Barlow Condensed', sans-serif" }}>
              Our Network
            </p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0F172A', fontFamily: "'Barlow Condensed', sans-serif", margin: 0, textTransform: 'uppercase' }}>
              Trusted By Industry Leaders
            </h2>
          </div>

         
          {/* The Client Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '1px', 
            background: '#E2E8F0',
            border: '1px solid #E2E8F0',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            {CLIENTS.slice(0, 4).map((client, i) => (
              <div 
                key={i} 
                style={{ 
                  background: '#F8FAFC', 
                  padding: '2rem 2rem', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  minHeight: '140px' 
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.zIndex = 10; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.zIndex = 1; e.currentTarget.style.boxShadow = 'none'; }}
              >
                
                {/* SMART RENDERING: Shows image if it exists, otherwise shows text */}
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={`${client.name} Logo`} 
                    style={{ 
                      maxWidth: '200px', 
                      maxHeight: '100px', 
                      objectFit: 'contain', 
                      mixBlendMode: 'multiply' 
                    }} 
                  />
                ) : (
                  <span style={{ 
                    color: '#475569', 
                    fontSize: '15px', 
                    fontWeight: '800', 
                    letterSpacing: '1px', 
                    textTransform: 'uppercase',
                    fontFamily: "'Barlow Condensed', sans-serif"
                  }}>
                    {client.name}
                  </span>
                )}

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#eef3f5',borderTop: '2px solid #E2E8F0', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '900', color: '#111111', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.2' }}>Ready to build something monumental?</h2>
            <p style={{ color: '#111111', fontWeight: '700', marginTop: '0.5rem' }}>Connect with our engineering team for tender inquiries and partnerships.</p>
          </div>
          <Link to="/contact" style={{ background: '#009DE0', color: '#ffffff', padding: '16px 40px', borderRadius: '2px', fontWeight: '800',  fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'transform 0.3s' }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.target.style.transform = 'none'}
          >Get In Touch →</Link>
        </div>
      </section>
    </>
  );
}