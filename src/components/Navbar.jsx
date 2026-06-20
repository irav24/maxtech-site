import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';
import footerBg from '../assets/processimg.jpeg'; // Adjust the path to your image
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
/* --- MOBILE UTILITY BAR FIXES --- */
  @media (max-width: 900px) {
    .utility-socials { display: none !important; }
    .utility-container { padding: 8px 15px !important; }
    .utility-contact { 
      flex-direction: column !important; 
      gap: 4px !important; 
      align-items: flex-start !important;
      width: 100% !important;
    }
    .utility-item { font-size: 10px !important; }
    .utility-item svg { width: 14px !important; height: 14px !important; flex-shrink: 0; }
    .utility-item span { 
      overflow: hidden; 
      text-overflow: ellipsis; 
      white-space: nowrap; 
      max-width: calc(100vw - 60px);
    }
  }

  /* Very small phones */
  @media (max-width: 400px) {
    .utility-item { font-size: 9px !important; }
    .utility-bar { display: none !important; }
  }
`}</style>

      
{/* --- THE TOP UTILITY BAR --- */}
      <div className="utility-bar" style={{ background: '#020617', color: '#94A3B8', fontSize: '12px', fontWeight: '600', letterSpacing: '0.5px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="utility-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '8px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Left Side: Dual Contact Info */}
          <div className="utility-contact" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            
            {/* Phone Row */}
            <div className="utility-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
              <span>+91 9665442319 / +91 9665442788</span>
            </div>

            {/* Email Row */}
            <div className="utility-item" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#009DE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>maxtechbrothers@gmail.com / director@maxtechbrothers.com</span>
            </div>

          </div>

          {/* Right Side: Social Icons */}
          <div className="utility-socials" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', background: 'rgba(255,255,255,0.05)', color: '#009DE0', borderRadius: '4px', textDecoration: 'none', transition: 'background 0.3s' }}
               onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
               onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', background: 'rgba(255,255,255,0.05)', color: '#009DE0', borderRadius: '4px', textDecoration: 'none', transition: 'background 0.3s' }}
               onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
               onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
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
{/* NEW IMAGE LOGO */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img 
            src={logo} 
            alt="Maxtech Brothers Logo" 
            style={{ 
              height: 'clamp(50px, 6vw, 65px)', /* Fluid sizing: 40px on phone, 65px on desktop */
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

        {menuOpen && (
          <div className="mobile-nav" style={{ background: '#0F172A', borderTop: '1px solid rgba(0,157,224,0.2)', padding: '1rem 1.25rem' }}>
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
     <footer style={{ 
  backgroundImage: `linear-gradient(to top, rgba(10, 15, 30, 1) 0%, rgba(10, 15, 30, 0.85) 100%), url(${footerBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  borderTop: '1px solid #1E293B' 
}}>
  <div style={{ height: '4px', background: 'linear-gradient(90deg, #28166F, #009DE0, #28166F)' }} />
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem) 0' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'clamp(1.5rem, 4vw, 3rem)', marginBottom: 'clamp(1.5rem, 4vw, 3rem)' }}>
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
    <div style={{ borderTop: '1px solid #1E293B', padding: 'clamp(1rem, 3vw, 2rem) 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
      <p style={{ color: '#334155', fontSize: '11px' }}>© 2026 Maxtech Brothers Engineering LLP. All rights reserved.</p>
      <p style={{ color: '#334155', fontSize: '11px' }}>CIN: AAP-4913 · GSTIN: 27AADCM8571R1Z5</p>
    </div>
  </div>
</footer>
    </div>
  );
}