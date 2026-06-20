import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { PRODUCTS } from '../data';
import producthero from '../assets/producthero.jpg'

export function ProductsPage() {
  const CATS = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.cat)))];
  const [activeCat, setActiveCat] = useState('All');
  const filtered = activeCat === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);

  return (
    <>
      <PageHero bgImage={producthero} label="Torque Solutions" title="Precision Bolting Equipment" subtitle="Sales, rental, and on-site servicing of electric, hydraulic, and battery torque wrenches for structural steel and industrial applications." />

      <section style={{ background: '#F4F4F0', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {CATS.map(c => <button key={c} className={`tag-btn ${activeCat === c ? 'active' : ''}`} onClick={() => setActiveCat(c)}>{c}</button>)}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '2px', background: '#CBD5E1' }}>
            {filtered.map((prod, i) => {
              const [hov, setHov] = useState(false);
              return (
                <div key={i} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: '#fff', overflow: 'hidden', transition: 'box-shadow 0.3s', boxShadow: hov ? '0 12px 40px rgba(0,0,0,0.1)' : 'none' }}>
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                    <img src={prod.img} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s' }} />
                  </div>
                  <div style={{ padding: '1.75rem' }}>
                    <span style={{ background: '#F1EDE4', color: '#64748B', fontSize: '9px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '2px' }}>{prod.cat}</span>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0F172A', lineHeight: '1.4', marginTop: '0.75rem', marginBottom: '0.75rem' }}>{prod.name}</h3>
                    <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.75' }}>{prod.desc}</p>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                      <Link to="/contact" style={{ flex: 1, textAlign: 'center', background: '#009DE0', color: '#fff', padding: '10px', fontSize: '10px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>Enquire</Link>
                      <Link to="/contact" style={{ flex: 1, textAlign: 'center', background: '#F4F4F0', color: '#0F172A', padding: '10px', fontSize: '10px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', border: '1px solid #E2E8F0' }}>Rent / Hire</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Tools */}
      <section style={{ background: 'linear-gradient(160deg, #28166F 0%, #112040 60%, #0a1628 100%)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Why Our Equipment</p>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: '3rem' }}>Certified. Calibrated. Field-Proven.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {[
              { icon: '📋', title: 'NABL Calibration', desc: 'Every torque wrench comes with NABL-accredited calibration certificates for full audit compliance.' },
              { icon: '🔧', title: 'On-Site Servicing', desc: 'Our technicians provide on-site calibration and repair services minimizing project downtime.' },
              { icon: '📦', title: 'Flexible Rental', desc: 'Daily, weekly, and project-based rental contracts with full technical support included.' },
              { icon: '🏗', title: 'Bridge-Tested', desc: 'Equipment proven on India\'s most demanding bridge and railway projects since 2010.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(10,15,30,0.9)', padding: '2.5rem 2rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.75' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#009DE0', padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000', fontFamily: "'Barlow Condensed', sans-serif" }}>Bulk order or rental enquiry?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.4rem' }}>Speak to our products team for customised pricing and availability.</p>
          </div>
          <Link to="/contact" style={{ background: '#fff', color: '#009DE0', padding: '15px 36px', borderRadius: '2px', fontWeight: '800', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Contact Products Team →</Link>
        </div>
      </section>
      
    </>
  );
}