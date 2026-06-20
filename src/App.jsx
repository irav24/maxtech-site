import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import bg2 from './assets/gallery/bg2.jpg';
import './App.css';
import aboutHero from './assets/about-hero.jpeg';
import servicehero from './assets/services.jpg';
import { Target, Telescope, Scale } from 'lucide-react';
// Add these at the top of App.jsx
import about1 from './assets/aboutphoto/1.jpeg';
import about2 from './assets/aboutphoto/1.jpg';
import about3 from './assets/aboutphoto/2.jpg';
import about4 from './assets/aboutphoto/3.jpg';
import about5 from './assets/aboutphoto/award.jpg';
import about6 from './assets/aboutphoto/DFCC TWEET.jpeg';
import processimg from './assets/processimg.jpeg'

const RECOGNITION_IMAGES = [about1, about2, about3, about4, about5, about6];

// ─── SHARED UTILITIES ────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimatedStat({ value }) {
  const [display, setDisplay] = useState('0');
  const [ref, visible] = useScrollReveal(0.5);
  useEffect(() => {
    if (!visible) return;
    const num = parseInt(value);
    const suffix = value.replace(/[0-9]/g, '');
    let step = 0;
    const total = 40;
    const iv = setInterval(() => {
      step++;
      setDisplay(Math.round((num / total) * step) + suffix);
      if (step >= total) { setDisplay(value); clearInterval(iv); }
    }, 28);
    return () => clearInterval(iv);
  }, [visible, value]);
  return <span ref={ref}>{display}</span>;
}

// ────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────

import { CLIENTS, PROJECTS, SERVICES, PRODUCTS, STATS, CORE_CAPS } from './data';

//──────────────────────────────────────────────────────────

import { Navbar } from './components/Navbar';
import { PageHero } from './components/PageHero';



// ─────────────────────────────────────────────────────────────

import { Home } from './pages/Home.jsx';

// ─── ABOUT PAGE ──────────────────────────────────────────────────────────────

export function About() {
  const [r1, v1] = useScrollReveal();
  const [r2, v2] = useScrollReveal();
  const [r3, v3] = useScrollReveal();

  const timeline = [
    { year: '1996', title: 'Foundation', desc: 'Mr. Shiv Shankar Roy begins his first labour contract in a private firm under SSR Engineering, Boisar.' },
    { year: '2003', title: 'Railway Expansion', desc: 'Secures first major railway bridge contract on the Konkan Railway corridor, establishing a niche in structural erection.' },
    { year: '2010', title: 'Surface Treatment Division', desc: 'Launches a dedicated blasting and coating unit, becoming a full-service surface treatment provider.' },
    { year: '2015', title: 'LLP Incorporation', desc: 'Formally incorporated as Maxtech Brothers Engineering LLP, scaling workforce and equipment capabilities.' },
    { year: '2018', title: 'Chenab Bridge', desc: 'Engaged as fabrication partner on the iconic Chenab Rail Bridge, the world\'s highest railway arch bridge.' },
    { year: '2023', title: 'Bullet Train Corridor', desc: 'Successfully erects a 1,500 MT Open Web Girder for the Mumbai–Ahmedabad High-Speed Rail project.' },
  ];

  const leadership = [
    { name: 'Mr. Shiv Shankar Roy', title: 'Founder & Managing Director', bio: 'With 28+ years in heavy civil execution, Mr. Roy has personally led erection works on some of India\'s most iconic infrastructure projects. His hands-on leadership style and uncompromising approach to safety define the Maxtech culture.' },
  ];

  return (
    <>
      <PageHero bgImage={aboutHero}label="Our Story" title="Engineering Excellence Since 1996" subtitle="From a single labour contract to India's most demanding bridge and rail projects — the Maxtech Brothers story is one of grit, precision, and relentless growth." />

      {/* Mission / Vision */}
      <section style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F4F4F0 100%)', padding: 'clamp(3rem, 8vw, 7rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
          <div ref={r1} className={`reveal ${v1 ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2px', background: '#CBD5E1', marginBottom: 'clamp(3rem, 7vw, 6rem)' }}>
            {[
              { label: 'Our Mission', icon: <Target size={40} color="#009DE0" />, text: 'To become the client\'s most preferred choice by attaining excellence in quality and timely completed, value-added projects — while providing the highest level of craftsmanship in heavy civil and mechanical construction.' },
              { label: 'Our Vision', icon: <Telescope size={40} color="#009DE0" />, text: 'To be the leading specialist contractor in structural erection, recognised for quality, innovation, and safety — supporting our staff, clients, and the communities in which we work.' },
              { label: 'Our Values', icon: <Scale size={40} color="#009DE0" />, text: 'Our business is built on integrity, fairness and honesty — qualities at the foundation of every project. We say what we are going to do, and we do it. Safety is non-negotiable; quality is our signature.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 3vw, 2.5rem)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.label}</p>
                <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.85' }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Founder */}
          {/* Founder & Credibility Section */}
<div ref={r2} className={`reveal ${v2 ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'stretch', marginBottom: 'clamp(3rem, 7vw, 6rem)' }}>
  
  {/* Left Side: Founder Message + Minimal Stats */}
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div>
      <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>Leadership</p>
      <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0F172A', fontFamily: "'Barlow Condensed', sans-serif", lineHeight: '1.2', marginBottom: '1.5rem' }}>Founder's Message</h2>
      <div style={{ width: '40px', height: '3px', background: '#009DE0', marginBottom: '2rem' }} />
      <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.9', marginBottom: '1.5rem' }}>
        "Our journey began with a single belief — that honest work, delivered safely and with precision, will always find its place in the world. Three decades later, our projects stand as proof of that conviction."
      </p>
      <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.8' }}>
        From the first rivet on a Konkan Railway bridge to the 1,500-tonne girder of India's bullet train corridor, every project carries the same commitment: zero compromise on quality, safety, or timeline.
      </p>
      <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0', marginBottom: '3rem' }}>
        <div style={{ fontWeight: '800', color: '#0F172A', fontSize: '15px' }}>Mr. Shiv Shankar Roy</div>
        <div style={{ color: '#009DE0', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', marginTop: '2px' }}>Founder & Managing Director</div>
      </div>
    </div>

    {/* The New Minimal Stats (Clean, stripped of the purple box) */}
    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px dashed #E2E8F0' }}>
      {STATS.map((s, i) => (
        <div key={i}>
          <div style={{ fontSize: '2rem', fontWeight: '900', color: '#0F172A', fontFamily: "'Barlow Condensed', sans-serif" }}><AnimatedStat value={s.value} /></div>
          <div style={{ color: '#64748B', fontSize: '10px', marginTop: '2px', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: '700' }}>{s.label}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Right Side: Credibility / Tweet Single-Picture Carousel */}
  <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Official Recognition</h3>
      <span style={{ color: '#009DE0', fontSize: '10px', fontWeight: '800', letterSpacing: '2px' }}>SWIPE &rarr;</span>
    </div>

    {/* Carousel Container (Snaps 1 item at a time) */}
   {/* Carousel Container (Snaps 1 item at a time) */}
    <div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '1rem', scrollbarWidth: 'none', msOverflowStyle: 'none', flexGrow: 1 }}>
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      {RECOGNITION_IMAGES.map((imgSrc, i) => (
        <div key={i} style={{ 
          flex: '0 0 100%', /* Forces each image to take up exactly one full slide */
          scrollSnapAlign: 'center', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          background: '#fff',
          border: '1px solid #fff',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
        }}>
          <img 
  src={imgSrc} 
  alt={`Official Recognition ${i + 1}`} 
  style={{ 
    width: '100%', 
    height: 'clamp(220px, 50vw, 600px)',
    objectFit: 'fill',
    padding: '0 rem',
    background: '#fff'
  }} 
/>
          
        </div>
      ))}
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Timeline */}
<section style={{ 
  position: 'relative', 
  padding: 'clamp(3rem, 8vw, 7rem) 0', 
  overflow: 'hidden',
  background: '#0a1628'
}}>
  
 
  <img 
    src={bg2} 
    alt="Journey Background" 
    style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover', 
      opacity: 1, /* Boosted from 0.4 to 0.8 so the photo really pops */
      zIndex: 0 
    }} 
  />

  {/* LAYER 2: The Gradient (Dialed back the heavy blue) */}
  <div style={{ 
    position: 'absolute', 
    inset: 0, 
    background: 'linear-gradient(90deg, rgba(11, 17, 32, 0.95) 0%, rgba(11, 17, 32, 0.5) 100%)', 
    zIndex: 1 
  }} />
  {/* LAYER 3: The Content */}
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)', position: 'relative', zIndex: 2 }}>
    <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Our Journey</p>
    <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', fontWeight: '800', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>28 Years of Milestones</h2>
    
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: 'clamp(50px, 7vw, 80px)', top: 0, bottom: 0, width: '2px', background: 'rgba(200,150,12,0.2)' }} />
      {timeline.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 2rem)', marginBottom: '3rem', alignItems: 'flex-start' }}>
          <div style={{ minWidth: 'clamp(50px, 7vw, 80px)', textAlign: 'right', paddingRight: 'clamp(1rem, 2vw, 2.5rem)', position: 'relative' }}>
            <span style={{ color: '#009DE0', fontWeight: '800', fontSize: '13px' }}>{item.year}</span>
            <div style={{ position: 'absolute', right: '-5px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#009DE0', border: '2px solid #28166F' }} />
          </div>
          <div style={{ paddingTop: '1px' }}>
            <div style={{ color: '#fff', fontWeight: '700', fontSize: '15px', marginBottom: '0.4rem' }}>{item.title}</div>
            <div style={{ color: '#e6ebf1', fontSize: '13px', lineHeight: '1.7' }}>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Certifications */}


      {/* CTA */}

{/* Option B: The "Ping-Pong" Gradient (Fades back to light) */}
<section style={{ 
  background: 'linear-gradient(180deg, #e8eef6 0%, #F4F4F0 100%)', 
  padding: 'clamp(3rem, 6vw, 6rem) 0',
}}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
    
    <div>
      <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '800', color: '#0F172A', fontFamily: "'Barlow Condensed', sans-serif" }}>
        Partner with us on your next project
      </h2>
      <p style={{ color: '#0F172A', marginTop: '0.4rem' }}>
        Our team is ready to evaluate tender packages and site requirements.
      </p>
    </div>

    <Link to="/contact" style={{ background: '#009DE0', color: '#fff', padding: '15px 36px', borderRadius: '2px', fontWeight: '800', fontSize: '14px', textDecoration: 'none', letterSpacing: '1px' }}>
      START A TENDER &rarr;
    </Link>
    
  </div>
</section>
    </>
  );
}

// ─── SERVICES PAGE ───────────────────────────────────────────────────────────

export function Services() {
  const [r1, v1] = useScrollReveal();
  return (
    <>
      <PageHero bgImage={servicehero} label="What We Do" title="End-to-End Execution Capabilities" subtitle="Specialist service lines covering every phase of heavy civil and mechanical infrastructure — from raw steel to fully commissioned structure." />

    <section className="section-padding" style={{ background: '#F8FAFC' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem' }}>
      {SERVICES.map((svc, i) => (
        <div key={i} style={{ 
          background: '#fff', 
          padding: 'clamp(1.5rem, 4vw, 2.5rem)', 
          border: '1px solid #E2E8F0',
          borderRadius: '4px' 
        }}>
          {/* Icon */}
          <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{svc.icon}</div>
          
          {/* Title */}
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A', marginBottom: '1rem', lineHeight: '1.3' }}>
            {svc.title}
          </h3>
          
          {/* Full Description */}
          <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.8', margin: 0 }}>
            {svc.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Process */}
      {/* --- EXECUTION PROCESS SECTION --- */}
<section className="section-padding" style={{ 
  position: 'relative',
  /* THE FIX: Background image with a heavy dark overlay for text readability */
  background: `linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.7)), url(${processimg})`,
  backgroundSize: 'auto',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', /* Adds a premium parallax scrolling effect */
  color: '#fff' 
}}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>

    {/* Header Text */}
    <div style={{ maxWidth: '600px', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
      <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem' }}>
        How We Work
      </p>
      <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '800', color: '#fff', margin: 0, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.5px' }}>
        Our Execution Process
      </h2>
      <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.8', marginTop: '1.5rem' }}>
        From the initial review of drawings to the final quality sign-off, our methodical approach ensures precision, safety, and strict compliance at every stage of the project lifecycle.
      </p>
    </div>

    {/* The 4 Process Cards */}
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', 
      background: 'rgba(11, 17, 32, 0.4)', 
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.1)', 
      borderRadius: '4px', 
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
    }}>
      
      {[
        { step: '01', title: 'Tender Review', desc: 'We study the BOQ, drawings, and site conditions to develop a realistic method statement.' },
        { step: '02', title: 'Mobilisation', desc: 'Deployment of equipment, workforce, and safety infrastructure to site within agreed timelines.' },
        { step: '03', title: 'Execution', desc: 'IS-compliant assembly, erection, and torquing with daily quality and safety reporting.' },
        { step: '04', title: 'QA/QC Sign-off', desc: 'Third-party inspection support, calibration records, and handover documentation.' }
      ].map((item, i) => (
        <div key={i} style={{ 
          padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 3vw, 2rem)', 
          borderRight: i !== 3 ? '1px solid rgba(255,255,255,0.08)' : 'none', 
          borderBottom: '1px solid rgba(255,255,255,0.08)' 
        }}>
          <div style={{ color: '#009DE0', fontSize: '2.5rem', fontWeight: '900', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: '1.5rem', opacity: '0.9' }}>
            {item.step}
          </div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', marginBottom: '1rem' }}>
            {item.title}
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

      <section style={{ background: '#ffffff', padding: 'clamp(2.5rem, 5vw, 4.5rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: '800', color: '#000', fontFamily: "'Barlow Condensed', sans-serif" }}>Need a service-specific scope?</h2>
            <p style={{ color: '#111111)', marginTop: '0.4rem' }}>Send us your BOQ or tender package and we'll respond with a competitive offer.</p>
          </div>
          <Link to="/contact" style={{ background: '#009DE0', color: '#fff', padding: '15px 36px', borderRadius: '2px', fontWeight: '800', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Request a Quote →</Link>
        </div>
      </section>
    </>
  );
}

// ───────────────────────────────────────────────────────────

import { Projects } from './pages/Projects.jsx';
 // Adjust the path

// ─── PRODUCTS PAGE ───────────────────────────────────────────────────────────

import { ProductsPage } from './pages/Products.jsx';

import { Gallery } from './pages/Gallery';

// ─── ────────────────────────────────────────────────────────────

import { Contact } from './pages/Contact.jsx';
import { ProjectDetails } from './pages/ProjectDetails';
import { ProductDetails } from './pages/ProductDetails';
// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<ProjectDetails />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}