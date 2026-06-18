import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';
export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/products', label: 'Products' },
    { to: '/gallery', label: 'Gallery' },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'DM Sans', sans-serif", background: '#F4F4F0' }}>
    <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  
  /* --- TYPOGRAPHY & LINKS --- */
  .nav-link { color: #71717A; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; padding-bottom: 3px; border-bottom: 2px solid transparent; transition: color 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
  .nav-link:hover { color: #ffffff; }
  .nav-link.active { color: #009DE0; border-bottom-color: #009DE0; }
  
  .footer-link { color: #71717A; font-size: 13px; text-decoration: none; transition: color 0.5s cubic-bezier(0.16, 1, 0.3, 1); display: block; margin-bottom: 10px; }
  .footer-link:hover { color: #009DE0; }
  
  /* --- BUTTONS --- */
  .cta-btn { background: #009DE0; color: #ffffff; padding: 12px 28px; font-weight: 800; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); white-space: nowrap; border: 1px solid #009DE0; display: inline-block; cursor: pointer; }
  .cta-btn:hover { background: #ffffff; color: #111111; border-color: #ffffff; box-shadow: 0 10px 20px rgba(0,0,0,0.15); transform: translateY(-2px); }
  
  .tag-btn { background: none; border: 1px solid #D4D4D0; padding: 10px 22px; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); color: #475569; border-radius: 2px; }
  .tag-btn:hover { border-color: #111111; color: #111111; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
  .tag-btn.active { background: #111111; border-color: #111111; color: #ffffff; }
  
  /* --- FORMS --- */
  input, textarea, select { font-family: inherit; }
  .form-input { width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 14px 18px; font-size: 14px; border-radius: 2px; outline: none; transition: border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
  .form-input::placeholder { color: #71717A; }
  .form-input:focus { border-color: #009DE0; }
  textarea.form-input { resize: vertical; min-height: 120px; }

  /* --- TEXTURES & UTILITIES --- */
  .noise-bg { position: relative; background-color: #0A0F1C; } /* Deep Slate */
  .noise-bg.indigo { background-color: #28166F; } /* Logo Indigo Override */
  .noise-bg::before {
    content: ""; position: absolute; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E");
    pointer-events: none; z-index: 1;
  }
  
  .img-industrial { transition: filter 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); display: block; width: 100%; height: 100%; object-fit: cover; }
  
  /* --- ANIMATIONS --- */
  @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.2} }
  @keyframes slideIn { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
  
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  
  .hero-fade { opacity: 0; }
  .hero-fade.visible { animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  
  @media (max-width: 900px) {
    .desktop-nav { display: none !important; }
    .mobile-menu-btn { display: flex !important; }
  }
  @media (min-width: 901px) {
    .mobile-nav { display: none !important; }
  }
`}</style>

      {/* Top contact bar */}
      {/* --- THE TOP UTILITY BAR --- */}
<div className="utility-bar" style={{ background: '#020617', color: '#94A3B8', fontSize: '12px', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>
  <div className="utility-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    
    {/* Left Side */}
    <div className="utility-left" style={{ display: 'flex', gap: '1.5rem' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: '#009DE0' }}>📞</span> +91 12345 67890
      </span>
      <span className="utility-email" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: '#009DE0' }}>✉️</span> contact@maxtechbrothers.com
      </span>
    </div>

    {/* Right Side */}
    <div className="utility-right" style={{ display: 'flex', gap: '1rem' }}>
      <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
    </div>

  </div>
</div>
{/* --- MAIN NAVBAR STARTS HERE --- */}

      {/* Main nav */}
      <nav style={{ 
  position: 'sticky', 
  top: 0, 
  zIndex: 100, 
  background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
  // This is the subtle separator line
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
  transition: 'background 0.3s ease' 
}}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#3F3F46' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* NEW IMAGE LOGO */}
{/* Replace your logo block with this refined version */}
<Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
  <img 
  src={logo} 
  alt="Maxtech Brothers Logo" 
  style={{ 
    // This tells it: Be 40px on phones, grow dynamically, but never exceed 70px on desktop
    height: 'clamp(40px, 6vw, 70px)', 
    width: 'auto', 
    filter: 'drop-shadow(0px 0px 1px rgba(255,255,255,0.3))' 
  }} 
/>
</Link>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className={`nav-link ${location.pathname === l.to ? 'active' : ''}`}>{l.label}</Link>
            ))}
            <Link to="/contact" className="cta-btn">Contact Us</Link>
          </div>

          {/* Mobile hamburger */}
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(o => !o)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '8px' }}>
            {[0,1,2].map(i => <span key={i} style={{ display: 'block', width: '24px', height: '2px', background: '#fff', transition: 'all 0.2s' }} />)}
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <div className="mobile-nav" style={{ background: '#28166F', borderTop: '1px solid rgba(14,165,233,0.15)', padding: '1.5rem 2rem' }}>
            {navLinks.map((l, i) => (
              <Link key={l.to} to={l.to} style={{ display: 'block', color: location.pathname === l.to ? '#009DE0' : '#94A3B8', fontSize: '12px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none', animation: `slideIn 0.3s ease ${i * 0.05}s both` }}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="cta-btn" style={{ display: 'inline-block', marginTop: '1.5rem' }}>Contact Us</Link>
          </div>
        )}
      </nav>

      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ background: 'linear-gradient(180deg, #070E24 0%, #050d1e 100%)', borderTop: '1px solid #1E293B' }}>
        <div style={{ height: '4px', background: 'linear-gradient(90deg, #28166F, #009DE0, #28166F)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>MAXTECH BROTHERS</div>
              <div style={{ fontSize: '9px', color: '#009DE0', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '2px', marginBottom: '1.5rem' }}>Engineering LLP · Est. 1996</div>
              <p style={{ color: '#475569', fontSize: '13px', lineHeight: '1.9', maxWidth: '260px' }}>Heavy civil engineering and industrial steel fabrication across India since 1996. Partners to India's most demanding infrastructure corridors.</p>
              <p style={{ color: '#334155', fontSize: '12px', marginTop: '1.5rem', lineHeight: '1.8' }}>201/A Wing, Godavari Building<br />Boisar, Dist. Palghar<br />Maharashtra – 401504</p>
            </div>
            {[
              { title: 'Company', links: [{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about' }, { label: 'Projects', to: '/projects' }, { label: 'Products', to: '/products' }] },
              { title: 'Services', links: [{ label: 'Steel Erection', to: '/services' }, { label: 'Fabrication', to: '/services' }, { label: 'Bolting & Torquing', to: '/services' }, { label: 'Surface Treatment', to: '/services' }] },
              { title: 'Contact', links: [{ label: 'Contact Us', to: '/contact' }, { label: 'Tender Inquiry', to: '/contact' }, { label: 'Partnerships', to: '/contact' }] },
            ].map((col, i) => (
              <div key={i}>
                <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.25rem' }}>{col.title}</p>
                {col.links.map((link, j) => <Link key={j} to={link.to} className="footer-link">{link.label}</Link>)}
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid #1E293B', padding: '2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ color: '#334155', fontSize: '12px' }}>© 2026 Maxtech Brothers Engineering LLP. All rights reserved.</p>
            <p style={{ color: '#334155', fontSize: '12px' }}>CIN: AAP-4913 · GSTIN: 27AADCM8571R1Z5</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
