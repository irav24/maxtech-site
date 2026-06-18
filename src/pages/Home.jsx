// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal, AnimatedStat } from '../utils';
import { STATS, CORE_CAPS, PROJECTS, CLIENTS } from '../data';
import gallery4 from '../assets/gallery/gallery4.jpg';
import '../App.css';
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
      
      <header className="noise-bg" style={{ overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        
        {/* 1. Raw Background Video (No grayscale, no blur filters) */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* 2. Original Clean Dark Overlay (Just enough to read the white text) */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,15,28,0.95) 0%, rgba(10,15,28,0.7) 50%, rgba(10,15,28,0.3) 100%)', zIndex: 1 }} />

        {/* 3. The Left Cyan Accent Line */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#009DE0', zIndex: 2 }} />

        {/* 4. The Hero Content (Padding reset to a standard static size) */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '6rem 2rem', width: '100%', position: 'relative', zIndex: 2 }}>
          
          <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0s' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(0,157,224,0.1)', border: '1px solid rgba(0,157,224,0.25)', borderRadius: '3px', padding: '8px 16px', marginBottom: '2.5rem', backdropFilter: 'blur(4px)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#009DE0', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '2.5px', textTransform: 'uppercase' }}>28+ Years of Heavy Infrastructure Excellence</span>
            </div>
          </div>
          
          <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0.1s' }}>
            <h1 style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', fontWeight: '900', lineHeight: '1.07', color: '#ffffff', letterSpacing: '-1px', marginBottom: '1.5rem', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>
              Building India's<br /><span style={{ color: '#009DE0' }}>Steel Backbone.</span>
            </h1>
          </div>
          
          <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <p style={{ fontSize: '1.15rem', color: '#EBEBE6', lineHeight: '1.85', marginBottom: '2.5rem', maxWidth: '540px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
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

          <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0.5s', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem', marginTop: '5rem', gap: '1rem' }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ paddingRight: '1.5rem', borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#009DE0', lineHeight: '1', fontFamily: "'Barlow Condensed', sans-serif", textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}><AnimatedStat value={s.value} /></div>
                <div style={{ color: '#EBEBE6', fontSize: '12px', marginTop: '8px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700', fontFamily: "'Barlow Condensed', sans-serif", textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Ticker */}
      <div className="noise-bg" style={{ borderTop: '1px solid rgba(0,157,224,0.12)', borderBottom: '1px solid rgba(0,157,224,0.12)', padding: '14px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '5rem', animation: 'ticker 22s linear infinite', width: 'max-content' }}>
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span key={i} style={{ color: '#94A3B8', fontSize: '11px', letterSpacing: '2.5px', textTransform: 'uppercase', whiteSpace: 'nowrap', fontWeight: '700', fontFamily: "'Barlow Condensed', sans-serif", position: 'relative', zIndex: 2 }}>{c}</span>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <section ref={secRef} style={{ background: '#F4F4F0', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div className={`reveal ${secVisible ? 'visible' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What We Do</p>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#111111', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.2' }}>Core Competencies</h2>
            </div>
            <Link to="/services" style={{ color: '#009DE0', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none' }}>All Services →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', border: '1px solid #E2E8F0' }}>
            {CORE_CAPS.map((cap, i) => <CapCard key={i} cap={cap} />)}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projRef} style={{ background: '#ffffff', padding: '7rem 0', borderTop: '1px solid #E2E8F0' }}>
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
                <div key={i} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img src={p.image} alt={p.title} className="img-industrial" style={{ filter: h ? 'grayscale(0%) contrast(1)' : 'grayscale(80%) contrast(1.1)', transform: h ? 'scale(1.04)' : 'scale(1)' }} />
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

      


{/* Why Maxtech */}

{/* Why Maxtech */}
<section className="noise-bg" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
  
  {/* LAYER 1: The Background Image */}
  <img 
    src={gallery4} 
    alt="Engineering Background" 
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} 
  />

  {/* LAYER 2: The Dark Overlay 
      (Fades from 95% solid dark on the left to protect the text, 
      to 50% transparent on the right so the image shines through) */}
  <div style={{ 
    position: 'absolute', 
    inset: 0, 
    background: 'linear-gradient(90deg, rgba(11, 17, 32, 0.95) 0%, rgba(11, 17, 32, 0.5) 100%)', 
    zIndex: 1 
  }} />

  {/* LAYER 3: Your Original Layout */}
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
      
      {/* Text Block */}
      <div>
        <p style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3.5px' }}>WHY CHOOSE US</p>
        <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#ffffff', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>TRUSTED BY INDIA'S TOP EPC CONTRACTORS</h2>
        <p style={{ color: '#F4F4F0', fontSize: '1.05rem', lineHeight: '1.85' }}>Since 1996, Maxtech Brothers has been the preferred execution partner for India's most demanding infrastructure projects. From the Chenab Bridge to the Bullet Train corridor, our name stands for on-time delivery, zero-compromise safety, and engineering precision.</p>
        <Link to="/about" style={{ display: 'inline-block', marginTop: '2rem', color: '#009DE0', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif" }}>OUR STORY &rarr;</Link>
      </div>

      {/* Grid Block */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.1)' }}>
        {[
          { label: 'IS Compliant Execution', icon: '✓' },
          { label: 'OHSAS Safety Standards', icon: '✓' },
          { label: 'Calibrated Torque Equipment', icon: '✓' },
          { label: 'Pan-India Deployment', icon: '✓' },
        ].map((item, i) => (
          <div key={i} style={{ 
            background: 'rgba(10, 15, 28, 0.85)', /* Changed to RGBA so the background photo faintly shows through the boxes! */
            padding: '2.5rem 1.5rem', 
            borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' 
          }}>
            <div style={{ color: '#009DE0', fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: '900' }}>{item.icon}</div>
            <div style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>{item.label}</div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section style={{ background: '#eef3f5', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '900', color: '#111111', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.2' }}>Ready to build something monumental?</h2>
            <p style={{ color: '#111111', fontWeight: '700', marginTop: '0.5rem' }}>Connect with our engineering team for tender inquiries and partnerships.</p>
          </div>
          <Link to="/contact" style={{ background: '#111111', color: '#ffffff', padding: '16px 40px', borderRadius: '2px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'transform 0.3s' }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.target.style.transform = 'none'}
          >Get In Touch →</Link>
        </div>
      </section>
    </>
  );
}