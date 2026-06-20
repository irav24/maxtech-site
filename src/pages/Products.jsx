import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { PRODUCTS } from '../data';
import producthero from '../assets/producthero.jpg';
export function ProductsPage() {
  const [activeCat, setActiveCat] = useState('All');

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter categories dynamically based on the data
  const CATS = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.cat)))];

  // Filter products based on active tab
  const filtered = activeCat === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      
      <PageHero bgImage={producthero}
        label="Torque Solutions" 
        title="Precision Bolting Equipment" 
        subtitle="Sales, rental, and on-site servicing of electric, hydraulic, and battery torque wrenches for structural steel and industrial applications." 
      />

      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* THE TOP FILTER TABS (Exactly like the Projects page) */}
          <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid #CBD5E1', marginBottom: '3.5rem', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {CATS.map(category => (
              <button 
                key={category} 
                onClick={() => setActiveCat(category)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  padding: '0 0 1rem 0', 
                  color: activeCat === category ? '#009DE0' : '#64748B', 
                  fontWeight: '800', 
                  fontSize: '14px', 
                  letterSpacing: '1px', 
                  textTransform: 'uppercase', 
                  borderBottom: activeCat === category ? '2px solid #009DE0' : '2px solid transparent', 
                  cursor: 'pointer', 
                  transition: 'color 0.2s, border-color 0.2s' 
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '2px', background: '#CBD5E1' }}>
            {filtered.map((prod, i) => <ProductCard key={i} prod={prod} />)}
          </div>

        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section style={{ background: '#F8FAFC',borderTop: '2px solid #E2E8F0', padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#111111', fontFamily: "'Barlow Condensed', sans-serif" }}>Bulk order or rental enquiry?</h2>
            <p style={{ color: '#94A3B8', marginTop: '0.4rem' }}>Speak to our products team for customised pricing and availability.</p>
          </div>
          <Link to="/contact" style={{ background: '#009DE0', color: '#fff', padding: '15px 36px', borderRadius: '2px', fontWeight: '800', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Contact Products Team →</Link>
        </div>
      </section>
      
    </div>
  );
}

// THE INDIVIDUAL CARD COMPONENT
function ProductCard({ prod }) {
  const [hov, setHov] = useState(false);

  return (
    <Link to={`/product/${prod.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div 
        onMouseEnter={() => setHov(true)} 
        onMouseLeave={() => setHov(false)} 
        style={{ 
          background: '#fff', 
          overflow: 'hidden', 
          display: 'flex', 
          flexDirection: 'column', 
          height: '100%', 
          transition: 'box-shadow 0.3s', 
          boxShadow: hov ? '0 12px 40px rgba(0,0,0,0.1)' : 'none' 
        }}
      >
        
        {/* Image Area */}
        <div style={{ aspectRatio: '4/3', overflow: 'hidden', position: 'relative', background: '#F1F5F9' }}>
          <img 
            src={prod.img} 
            alt={prod.name} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease' }} 
          />
          
          {/* Category Tag (Visual ONLY, no onClick here!) */}
          <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#0F172A', color: '#fff', fontSize: '9px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px' }}>
            {prod.cat}
          </span>
        </div>
        
        {/* Text Area */}
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A', lineHeight: '1.3', marginBottom: '0.75rem',  }}>{prod.name}</h3>
          <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.7', flexGrow: 1, marginBottom: '1.5rem' }}>{prod.desc}</p>
          
          {/* Fake Buttons (Visual only, the Link handles the click) */}
          <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid #F1F5F9', paddingTop: '1.5rem' }}>
            <Link to={`/product/${prod.id}`} style={{ flex: 1, textAlign: 'center', background: '#009DE0', color: '#fff', padding: '10px', fontSize: '10px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', borderRadius: '2px' }}>View Specs</Link>
            <Link to="/contact" style={{ flex: 1, textAlign: 'center', background: '#F8FAFC', color: '#009DE0', border: '1px solid #009DE0', padding: '10px', fontSize: '10px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', borderRadius: '2px' }}>Rent / Hire</Link>
          </div>
        </div>

      </div>
    </Link>
  );
}