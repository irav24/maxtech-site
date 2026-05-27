import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

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

// ─── DATA ────────────────────────────────────────────────────────────────────

// ─── DATA ────────────────────────────────────────────────────────────────────

const CLIENTS = ['L&T Construction', 'Afcons Infrastructure', 'NHAI', 'NHSRCL', 'Gammon India', 'Tata Projects', 'Rail Vikas Nigam', 'RVNL', 'DFCCIL', 'Punj Lloyd'];

const PROJECTS = [
  { title: 'Mumbai–Ahmedabad High-Speed Rail Bridge', client: 'National High Speed Rail Corporation', scope: 'Assembly & Erection of 100-Meter Span Open Web Girder (OWG) weighing 1,500 MT. Complex precision alignment and staged launching under live corridor conditions.', tag: 'Bullet Train', scale: '1,500 Metric Tonnes', year: '2023', location: 'Gujarat, India', image: 'https://images.unsplash.com/photo-1541888059082-9e8db807e05e?auto=format&fit=crop&q=80&w=800', color: '#28166F' }, // Deep Blue
  { title: 'J&K Reasi Rail Project (USBRL)', client: 'Afcons Infrastructure', scope: 'Fabrication, continuous sandblasting, structural assembly, precision torquing, and complex girder launching across high-altitude terrain in J&K.', tag: 'Railways', scale: '₹7 Crore Value', year: '2022', location: 'Jammu & Kashmir', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800', color: '#28166F' }, // Charcoal
  { title: 'Mahatma Gandhi Setu Bridge', client: 'Afcons Sibmost JV', scope: 'Heavy assembly, high-altitude girder erection, deck slab concreting, and stable liner/trestle fabrication over the Ganga river.', tag: 'Mega Bridges', scale: '₹5 Crore Value', year: '2021', location: 'Bihar, India', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800', color: '#009DE0' }, // Tech Cyan
  { title: 'Dedicated Freight Corridor', client: 'DFCCIL / L&T Construction', scope: 'Supply, fabrication and erection of composite steel-concrete girders for the Western DFC alignment. Multi-span execution under live freight schedule.', tag: 'Freight Rail', scale: '₹12 Crore Value', year: '2020', location: 'Rajasthan, India', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800', color: '#334155' }, // Slate
  { title: 'NH-48 Flyover Package', client: 'NHAI / Gammon India', scope: 'PSC girder erection, launching girder operations, and temporary works for a multi-span urban flyover on NH-48 in Maharashtra.', tag: 'National Highway', scale: '₹8 Crore Value', year: '2019', location: 'Maharashtra, India', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800', color: '#0B1530' }, // Darker Deep Blue
  { title: 'Chenab Rail Bridge Auxiliary Works', client: 'Tata Projects Ltd.', scope: 'Structural fabrication of auxiliary steel components, sandblasting, metallizing and site coordination for the world-class Chenab arch bridge project.', tag: 'Icon Project', scale: '₹4 Crore Value', year: '2018', location: 'Jammu & Kashmir', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800', color: '#475569' }, // Cool Grey
];

const SERVICES = [
  { id: '01', title: 'Heavy Steel Girder Erection', icon: '🏗', desc: 'Specialist execution of structural bridge girders for roads and railways — Open Web, Underslung, and Composite systems. Includes launching girder operations, tandem crane lifts, and precision alignment under live corridor constraints.', bullets: ['Open Web Girder (OWG) Bridges', 'Underslung & Composite Girders', 'Launching Girder Operations', 'Cantilever Erection Methods', 'Tandem Crane Coordination'] },
  { id: '02', title: 'Precision Bolting & Torquing', icon: '🔩', desc: 'End-to-end controlled bolting solutions across industrial and infrastructure sites. We supply, operate, and certify electric and hydraulic torque equipment with NABL-compliant calibration documentation.', bullets: ['Electric & Hydraulic Torque Wrenches', 'High-Strength Structural Bolting', 'Torque Verification & Certification', 'Shear-Type Connector Installation', 'Sales, Rental & On-Site Service'] },
  { id: '03', title: 'Industrial Metal Fabrication', icon: '⚙️', desc: 'Heavy-duty custom fabrication of industrial steel structures including pressure vessels, piping assemblies, liner plates, trestle systems, and Pre-Engineered Buildings (PEB). Executed with IS:2062 grade materials.', bullets: ['Structural Steel Assembly', 'Pressure Piping Fabrication', 'Liner & Trestle Fabrication', 'PEB Erection & Steel Sheds', 'Cement Plant Structures'] },
  { id: '04', title: 'Surface Treatment & Coating', icon: '🛡', desc: 'High-specification surface preparation and protective coating programs for steel structures exposed to harsh environments — including rail, coastal, and industrial settings.', bullets: ['Copper Slag & Sand Blasting (Sa2.5)', 'Thermal Arc Metallizing', 'Epoxy & Zinc-Rich Primer Systems', 'Industrial Topcoat Painting', 'SSPC / ISO 8501-1 Compliant'] },
  { id: '05', title: 'Civil & Structural Works', icon: '🏛', desc: 'Full-scope civil construction services including deck slab concreting, formwork, temporary works design, and site infrastructure for major bridge and rail projects across India.', bullets: ['Deck Slab Concreting', 'Formwork & Falsework', 'Temporary Trestle Structures', 'Pile Cap & Foundation Works', 'Site Infrastructure Setup'] },
  { id: '06', title: 'Manpower & Labour Supply', icon: '👷', desc: 'Deployment of trained, IS/OHSAS-compliant construction workforce for large-scale project execution. Our skilled labour pool includes riggers, welders, crane operators, and structural fitters.', bullets: ['Skilled & Semi-Skilled Workforce', 'Rigging & Crane Operators', 'Structural Welders (ASME/IS)', 'Safety-Trained Site Teams', 'Long-term Deployment Contracts'] },
];

const PRODUCTS = [
  { name: 'Maxtech Shear Wrench', cat: 'Torque Tools', desc: 'Purpose-built for high-strength TC bolt installation in structural steel connections. Delivers precise shear-type controlled torque.', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600' },
  { name: 'Digital Electric Torque Wrench (TL-Type)', cat: 'Electric Series', desc: 'High-precision digital readout torque wrench for controlled tightening in bridges and industrial facilities. Adjustable torque range.', img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=600' },
  { name: 'Digital Electric Torque Wrench (TN-Type)', cat: 'Electric Series', desc: 'Compact form-factor electric wrench suited for confined spaces. Inline torque setting with digital confirmation and audit trail.', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600' },
  { name: 'Cordless Battery Torque Wrench', cat: 'Battery Series', desc: 'Freedom of movement without power cables. Ideal for field operations where power infrastructure is unavailable.', img: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600' },
  { name: 'Electric Hydraulic Torque Pump', cat: 'Hydraulic Series', desc: 'High-flow hydraulic power unit for driving square-drive or hex-type hydraulic torque wrenches in heavy industrial applications.', img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=600' },
  { name: 'Hydraulic Torque Wrench (Square Drive)', cat: 'Hydraulic Series', desc: 'Interchangeable square-drive cassettes for wide bolt-size coverage. Used in structural, petrochemical, and power plant applications.', img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600' },
];

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

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
      <div style={{ background: 'linear-gradient(90deg, #0a1628, #0f1f3d, #0a1628)', padding: '7px 0', borderBottom: '1px solid rgba(14,165,233,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ color: '#E4E4E7', fontSize: '10px', fontWeight: '700', letterSpacing: '1px' }}>MAXTECH BROTHERS ENGINEERING LLP · BOISAR, MAHARASHTRA</span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="tel:+919665442319" style={{ color: '#E4E4E7', fontSize: '11px', fontWeight: '600', textDecoration: 'none' }}>📞 +91 96654 42319</a>
            <a href="mailto:director@maxtechbrothers.com" style={{ color: '#E4E4E7', fontSize: '11px', fontWeight: '600', textDecoration: 'none' }}>✉ director@maxtechbrothers.com</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: scrolled ? 'rgba(7,16,32,0.97)' : 'linear-gradient(180deg, #28166F 0%, #0b1835 100%)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(14,165,233,0.15)', transition: 'background 0.3s' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#3F3F46' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ fontSize: '16px', fontWeight: '800', color: '#fff', letterSpacing: '2.5px', textTransform: 'uppercase' }}>MAXTECH BROTHERS</div>
            <div style={{ fontSize: '9px', color: '#009DE0', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '1px' }}>Engineering LLP · Est. 1996</div>
          </Link>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className={`nav-link ${location.pathname === l.to ? 'active' : ''}`}>{l.label}</Link>
            ))}
            <Link to="/contact" className="cta-btn">Get a Quote</Link>
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
            <Link to="/contact" className="cta-btn" style={{ display: 'inline-block', marginTop: '1.5rem' }}>Get a Quote</Link>
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
              { title: 'Contact', links: [{ label: 'Get a Quote', to: '/contact' }, { label: 'Tender Inquiry', to: '/contact' }, { label: 'Partnerships', to: '/contact' }] },
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

// ─── PAGE HERO COMPONENT ─────────────────────────────────────────────────────

// ─── PAGE HERO COMPONENT ─────────────────────────────────────────────────────
function PageHero({ label, title, subtitle }) {
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

// ─── HOME PAGE ───────────────────────────────────────────────────────────────

const STATS = [
  { label: 'Years of Execution', value: '28+' },
  { label: 'Completed Projects', value: '73+' },
  { label: 'Workforce On-Site', value: '500+' },
  { label: 'Strategic Partners', value: '51+' },
];

const CORE_CAPS = [
  { id: '01', title: 'Heavy Steel Girder Erection', desc: 'Specialist in structural Road & Rail bridges — OWG, Underslung, and Composite systems with precision launching.' },
  { id: '02', title: 'Precision Bolting & Torquing', desc: 'Certified hydraulic and electric torque solutions, calibration services, equipment sales and rental.' },
  { id: '03', title: 'Industrial Metal Fabrication', desc: 'Heavy-duty steel structures, pressure pipelines, liner plates, trestle systems, and PEB erection.' },
  { id: '04', title: 'Surface Treatment & Coating', desc: 'High-spec copper slag blasting, thermal metallizing, and multi-coat industrial painting programs.' },
];

function CapCard({ cap }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? 'linear-gradient(145deg, #28166F, #112547)' : '#ffffff', padding: '2.75rem 2.5rem', transition: 'background 0.3s', cursor: 'default', borderRight: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
      <div style={{ color: '#009DE0', fontSize: '11px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3px', marginBottom: '1.5rem' }}>{cap.id}</div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: hovered ? '#ffffff' : '#28166F', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', marginBottom: '0.9rem', lineHeight: '1.4' }}>{cap.title}</h3>
      <p style={{ color: hovered ? '#F4F4F0' : '#64748B', fontSize: '0.87rem', lineHeight: '1.75' }}>{cap.desc}</p>
      <div style={{ marginTop: '1.75rem', color: '#009DE0', fontSize: '11px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '1px', textTransform: 'uppercase' }}>
        Learn more <span style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(5px)' : 'none' }}>→</span>
      </div>
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
      {/* HERO */}
     <header className="noise-bg" style={{ overflow: 'hidden', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
  <div style={{ position: 'absolute', right: '-10%', top: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(0,157,224,0.08) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 2 }} />
  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: '#009DE0', zIndex: 2 }} />

  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '6rem 2rem', width: '100%', position: 'relative', zIndex: 2 }}>
    
    <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0s' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(0,157,224,0.1)', border: '1px solid rgba(0,157,224,0.25)', borderRadius: '3px', padding: '8px 16px', marginBottom: '2.5rem' }}>
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
      <p style={{ fontSize: '1.15rem', color: '#EBEBE6', lineHeight: '1.85', marginBottom: '2.5rem', maxWidth: '540px' }}>
        Specialized heavy civil engineering, steel girder launching, and precision mechanical fabrication — executed at monumental scale across India's most demanding corridors.
      </p>
    </div>
    
    <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0.3s', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Link to="/projects" className="cta-btn">Explore Projects →</Link>
      <Link to="/contact" style={{ background: 'transparent', color: '#ffffff', padding: '12px 28px', borderRadius: '2px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }} 
        onMouseEnter={e => {e.target.style.background = '#ffffff'; e.target.style.color = '#111111'; e.target.style.transform = 'translateY(-2px)';}} 
        onMouseLeave={e => {e.target.style.background = 'transparent'; e.target.style.color = '#ffffff'; e.target.style.transform = 'none';}}>
        Contact Us
      </Link>
    </div>

    <div className={`hero-fade ${heroVisible ? 'visible' : ''}`} style={{ animationDelay: '0.5s', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem', marginTop: '5rem', gap: '1rem' }}>
      {STATS.map((s, i) => (
        <div key={i} style={{ paddingRight: '1.5rem', borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#009DE0', lineHeight: '1', fontFamily: "'Barlow Condensed', sans-serif" }}><AnimatedStat value={s.value} /></div>
          <div style={{ color: '#EBEBE6', fontSize: '12px', marginTop: '8px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700', fontFamily: "'Barlow Condensed', sans-serif" }}>{s.label}</div>
        </div>
      ))}
    </div>
  </div>
</header>

      {/* Ticker */}
      <div style={{ background: '#0a1628', borderTop: '1px solid rgba(14,165,233,0.12)', borderBottom: '1px solid rgba(14,165,233,0.12)', padding: '14px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '5rem', animation: 'ticker 22s linear infinite', width: 'max-content' }}>
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <span key={i} style={{ color: '#94A3B8', fontSize: '11px', letterSpacing: '2.5px', textTransform: 'uppercase', whiteSpace: 'nowrap', fontWeight: '700', fontFamily: "'Barlow Condensed', sans-serif" }}>{c}</span>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <section ref={secRef} style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F4F4F0 100%)', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div className={`reveal ${secVisible ? 'visible' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What We Do</p>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#28166F', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.2' }}>Core Competencies</h2>
            </div>
            <Link to="/services" style={{ color: '#009DE0', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none' }}>All Services →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', border: '1px solid #E2E8F0' }}>
            {CORE_CAPS.map((cap, i) => <CapCard key={i} cap={cap} />)}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projRef} style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)', padding: '7rem 0', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div className={`reveal ${projVisible ? 'visible' : ''}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Portfolio</p>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#28166F', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.2' }}>Landmark Projects</h2>
            </div>
            <Link to="/projects" style={{ color: '#009DE0', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none' }}>View All Projects →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: '#CBD5E1' }}>
            {PROJECTS.slice(0,3).map((p, i) => {
              const [h, setH] = useState(false);
              return (
                <div key={i} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.6s ease', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 0%, rgba(30,37,43,0.85) 100%)' }} />
                  <div style={{ position: 'absolute', inset: 0, padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <span style={{ display: 'inline-block', background: p.color, color: '#fff', fontSize: '9px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px', marginBottom: '0.75rem', alignSelf: 'flex-start' }}>{p.tag}</span>
                    <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.4', marginBottom: '0.4rem' }}>{p.title}</h3>
                    <p style={{ color: '#F4F4F0', fontSize: '12px' }}>{p.client} · {p.year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Maxtech */}
      <section style={{ background: 'linear-gradient(160deg, #28166F 0%, #112040 50%, #0a1628 100%)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>Why Choose Us</p>
              <h2 style={{ fontSize: '2.4rem', fontWeight: '900', color: '#ffffff', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.2', marginBottom: '1.5rem' }}>Trusted by India's Top EPC Contractors</h2>
              <p style={{ color: '#F4F4F0', fontSize: '1rem', lineHeight: '1.85' }}>Since 1996, Maxtech Brothers has been the preferred execution partner for India's most demanding infrastructure projects. From the Chenab Bridge to the Bullet Train corridor, our name stands for on-time delivery, zero-compromise safety, and engineering precision.</p>
              <Link to="/about" style={{ display: 'inline-block', marginTop: '2rem', color: '#009DE0', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none' }}>Our Story →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.1)' }}>
              {[
                { label: 'IS Compliant Execution', icon: '✓' },
                { label: 'OHSAS Safety Standards', icon: '✓' },
                { label: 'Calibrated Torque Equipment', icon: '✓' },
                { label: 'Pan-India Deployment', icon: '✓' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#28166F', padding: '2rem 1.5rem', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none', borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <div style={{ color: '#009DE0', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '900' }}>{item.icon}</div>
                  <div style={{ color: '#ffffff', fontSize: '13px', fontWeight: '700', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0284c7 0%, #009DE0 50%, #0284c7 100%)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: '900', color: '#ffffff', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.2' }}>Ready to build something monumental?</h2>
            <p style={{ color: '#28166F', fontWeight: '600', marginTop: '0.5rem' }}>Connect with our engineering team for tender inquiries and partnerships.</p>
          </div>
          <Link to="/contact" style={{ background: '#28166F', color: '#ffffff', padding: '16px 40px', borderRadius: '2px', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Get In Touch →</Link>
        </div>
      </section>
    </>
  );
}
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
      <PageHero label="Our Story" title="Engineering Excellence Since 1996" subtitle="From a single labour contract to India's most demanding bridge and rail projects — the Maxtech Brothers story is one of grit, precision, and relentless growth." />

      {/* Mission / Vision */}
      <section style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F4F4F0 100%)', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div ref={r1} className={`reveal ${v1 ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px', background: '#CBD5E1', marginBottom: '6rem' }}>
            {[
              { label: 'Our Mission', icon: '🎯', text: 'To become the client\'s most preferred choice by attaining excellence in quality and timely completed, value-added projects — while providing the highest level of craftsmanship in heavy civil and mechanical construction.' },
              { label: 'Our Vision', icon: '🔭', text: 'To be the leading specialist contractor in structural erection, recognised for quality, innovation, and safety — supporting our staff, clients, and the communities in which we work.' },
              { label: 'Our Values', icon: '⚖️', text: 'Our business is built on integrity, fairness and honesty — qualities at the foundation of every project. We say what we are going to do, and we do it. Safety is non-negotiable; quality is our signature.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', padding: '3rem 2.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.label}</p>
                <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.85' }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Founder */}
          <div ref={r2} className={`reveal ${v2 ? 'visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center', marginBottom: '6rem' }}>
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
              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #E2E8F0' }}>
                <div style={{ fontWeight: '800', color: '#0F172A', fontSize: '15px' }}>Mr. Shiv Shankar Roy</div>
                <div style={{ color: '#009DE0', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', marginTop: '2px' }}>Founder & Managing Director</div>
              </div>
            </div>
            <div style={{ background: 'linear-gradient(145deg, #28166F 0%, #112547 100%)', padding: '3rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#009DE0' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {STATS.map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#009DE0', fontFamily: "'Barlow Condensed', sans-serif" }}><AnimatedStat value={s.value} /></div>
                    <div style={{ color: '#475569', fontSize: '11px', marginTop: '4px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '600' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: 'linear-gradient(160deg, #28166F 0%, #112040 50%, #0a1628 100%)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Our Journey</p>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: '4rem' }}>28 Years of Milestones</h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '80px', top: 0, bottom: 0, width: '2px', background: 'rgba(200,150,12,0.2)' }} />
            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '80px', textAlign: 'right', paddingRight: '2.5rem', position: 'relative' }}>
                  <span style={{ color: '#009DE0', fontWeight: '800', fontSize: '13px' }}>{item.year}</span>
                  <div style={{ position: 'absolute', right: '-5px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: '#009DE0', border: '2px solid #28166F' }} />
                </div>
                <div style={{ paddingTop: '1px' }}>
                  <div style={{ color: '#fff', fontWeight: '700', fontSize: '15px', marginBottom: '0.4rem' }}>{item.title}</div>
                  <div style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.7' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section ref={r3} style={{ background: 'linear-gradient(180deg, #F4F4F0 0%, #e8eef6 100%)', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div className={`reveal ${v3 ? 'visible' : ''}`}>
            <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Compliance</p>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#0F172A', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: '3rem' }}>Standards & Certifications</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px', background: '#CBD5E1' }}>
            {['IS:2062 Steel Standards', 'OHSAS 18001 Safety', 'SSPC Surface Prep', 'IS:4353 Torque Compliance', 'NABL Calibrated Equipment', 'IRC Bridge Standards'].map((cert, i) => (
              <div key={i} style={{ background: '#fff', padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#009DE0', flexShrink: 0 }} />
                <span style={{ color: '#0F172A', fontSize: '13px', fontWeight: '700' }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #28166F 0%, #112040 100%)', padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', fontFamily: "'Barlow Condensed', sans-serif" }}>Partner with us on your next project</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.4rem' }}>Our team is ready to evaluate tender packages and site requirements.</p>
          </div>
          <Link to="/contact" style={{ background: '#009DE0', color: '#fff', padding: '15px 36px', borderRadius: '2px', fontWeight: '800', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Start a Tender →</Link>
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
      <PageHero label="What We Do" title="End-to-End Execution Capabilities" subtitle="Six specialist service lines covering every phase of heavy civil and mechanical infrastructure — from raw steel to fully commissioned structure." />

      <section style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F4F4F0 100%)', padding: '7rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2px', background: '#CBD5E1' }}>
            {SERVICES.map((svc, i) => {
              const [hov, setHov] = useState(false);
              return (
                <div key={i} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: hov ? '#0F172A' : '#fff', padding: '3rem 2.5rem', transition: 'background 0.3s' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{svc.icon}</div>
                  <div style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{svc.id}</div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: hov ? '#fff' : '#0F172A', marginBottom: '1rem', lineHeight: '1.3' }}>{svc.title}</h3>
                  <p style={{ color: hov ? '#94A3B8' : '#64748B', fontSize: '13px', lineHeight: '1.85', marginBottom: '1.5rem' }}>{svc.desc}</p>
                  <ul style={{ listStyle: 'none' }}>
                    {svc.bullets.map((b, j) => (
                      <li key={j} style={{ color: hov ? '#64748B' : '#475569', fontSize: '12px', display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ color: '#009DE0', fontWeight: '700' }}>→</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={r1} style={{ background: 'linear-gradient(160deg, #28166F 0%, #112040 50%, #0a1628 100%)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>How We Work</p>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: '4rem' }}>Our Execution Process</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {[
              { step: '01', title: 'Tender Review', desc: 'We study the BOQ, drawings, and site conditions to develop a realistic method statement.' },
              { step: '02', title: 'Mobilisation', desc: 'Deployment of equipment, workforce, and safety infrastructure to site within agreed timelines.' },
              { step: '03', title: 'Execution', desc: 'IS-compliant assembly, erection, and torquing with daily quality and safety reporting.' },
              { step: '04', title: 'QA/QC Sign-off', desc: 'Third-party inspection support, calibration records, and handover documentation.' },
            ].map((p, i) => (
              <div key={i} style={{ background: 'rgba(10,15,30,0.9)', padding: '2.5rem 2rem' }}>
                <div style={{ color: '#009DE0', fontSize: '2rem', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: '1rem', opacity: 0.6 }}>{p.step}</div>
                <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.75' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#009DE0', padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000', fontFamily: "'Barlow Condensed', sans-serif" }}>Need a service-specific scope?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.4rem' }}>Send us your BOQ or tender package and we'll respond with a competitive offer.</p>
          </div>
          <Link to="/contact" style={{ background: '#009DE0', color: '#fff', padding: '15px 36px', borderRadius: '2px', fontWeight: '800', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Request a Quote →</Link>
        </div>
      </section>
    </>
  );
}

// ─── PROJECTS PAGE ───────────────────────────────────────────────────────────

function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: '#fff', border: '1px solid #E2E8F0', overflow: 'hidden', transition: 'box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)', boxShadow: hov ? '0 20px 40px rgba(0,0,0,0.08)' : 'none', transform: hov ? 'translateY(-4px)' : 'none' }}>
      <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
        <img src={project.image} alt={project.title} className="img-industrial" style={{ filter: hov ? 'grayscale(0%) contrast(1)' : 'grayscale(80%) contrast(1.1)', transform: hov ? 'scale(1.04)' : 'scale(1)' }} />
        <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: project.color === '#009DE0' ? '#009DE0' : project.color, color: '#fff', fontSize: '10px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 12px', borderRadius: '2px' }}>{project.tag}</span>
      </div>
      <div style={{ padding: '1.75rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0F172A', lineHeight: '1.4', marginBottom: '0.5rem', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>{project.title}</h3>
        <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '1rem', fontWeight: '500' }}>{project.client} · {project.location}</p>
        <p style={{ color: '#475569', fontSize: '13px', lineHeight: '1.75', marginBottom: '1.5rem' }}>{project.scope}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F4F4F0', paddingTop: '1.25rem' }}>
          <div>
            <div style={{ color: '#94A3B8', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700' }}>Year</div>
            <div style={{ fontWeight: '700', color: '#111111', fontSize: '14px', marginTop: '2px' }}>{project.year}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#94A3B8', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700' }}>Scale</div>
            <div style={{ fontWeight: '700', color: '#009DE0', fontSize: '14px', marginTop: '2px' }}>{project.scale}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Projects() {
  const TAGS = ['All', ...Array.from(new Set(PROJECTS.map(p => p.tag)))];
  const [activeTag, setActiveTag] = useState('All');
  const filtered = activeTag === 'All' ? PROJECTS : PROJECTS.filter(p => p.tag === activeTag);

  return (
    <>
      <PageHero label="Our Portfolio" title="Engineering Marvels Delivered" subtitle="A proven track record of high-value civil and mechanical operations across India's most demanding infrastructure corridors." />

      <section style={{ background: '#F4F4F0', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {TAGS.map(tag => <button key={tag} className={`tag-btn ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(tag)}>{tag}</button>)}
          </div>
          <p style={{ color: '#94A3B8', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '2rem' }}>
            Showing {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2px', background: '#CBD5E1' }}>
            {filtered.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        </div>
      </section>

      <section style={{ background: '#009DE0', padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000', fontFamily: "'Barlow Condensed', sans-serif" }}>Have a project in mind?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.4rem' }}>Submit a tender inquiry and our team will respond within 24 hours.</p>
          </div>
          <Link to="/contact" style={{ background: '#009DE0', color: '#fff', padding: '15px 36px', borderRadius: '2px', fontWeight: '800', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Start a Tender →</Link>
        </div>
      </section>
    </>
  );
}

// ─── PRODUCTS PAGE ───────────────────────────────────────────────────────────

export function ProductsPage() {
  const CATS = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.cat)))];
  const [activeCat, setActiveCat] = useState('All');
  const filtered = activeCat === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);

  return (
    <>
      <PageHero label="Torque Solutions" title="Precision Bolting Equipment" subtitle="Sales, rental, and on-site servicing of electric, hydraulic, and battery torque wrenches for structural steel and industrial applications." />

      <section style={{ background: '#F4F4F0', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {CATS.map(c => <button key={c} className={`tag-btn ${activeCat === c ? 'active' : ''}`} onClick={() => setActiveCat(c)}>{c}</button>)}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2px', background: '#CBD5E1' }}>
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
          <Link to="/contact" style={{ background: '#009DE0', color: '#fff', padding: '15px 36px', borderRadius: '2px', fontWeight: '800', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Contact Products Team →</Link>
        </div>
      </section>
    </>
  );
}

// ─── CONTACT PAGE ────────────────────────────────────────────────────────────

export function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHero label="Get In Touch" title="Start a Conversation" subtitle="Whether it's a tender inquiry, equipment rental, or a partnership discussion — our team responds within 24 hours." />

      <section style={{ background: 'linear-gradient(160deg, #28166F 0%, #112040 50%, #0a1628 100%)', padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem' }}>

            {/* Contact info */}
            <div>
              <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>Contact Details</p>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", lineHeight: '1.2', marginBottom: '2.5rem' }}>Let's Build Together</h2>

              {[
                { icon: '📍', label: 'Registered Office', value: '201/A Wing, Godavari Building, Ratna Sagar Complex, Tarapur Rd, Boisar, Dist. Palghar, Maharashtra – 401504' },
                { icon: '📞', label: 'Phone', value: '+91 96654 42319 / +91 96654 42788' },
                { icon: '✉', label: 'Email', value: 'director@maxtechbrothers.com\nmaxtechbrothers@gmail.com' },
                { icon: '💬', label: 'WhatsApp', value: '+91 96654 42319' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.25rem', marginBottom: '2rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.2rem', marginTop: '2px' }}>{item.icon}</div>
                  <div>
                    <div style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ color: '#94A3B8', fontSize: '13px', lineHeight: '1.7', whiteSpace: 'pre-line' }}>{item.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(200,150,12,0.08)', border: '1px solid rgba(200,150,12,0.2)', borderRadius: '2px' }}>
                <div style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Response Commitment</div>
                <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.75' }}>We respond to all tender and project inquiries within <strong style={{ color: '#fff' }}>24 business hours</strong>. For urgent site-level matters, please call directly.</p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div style={{ background: 'rgba(26,107,58,0.15)', border: '1px solid rgba(26,107,58,0.4)', borderRadius: '4px', padding: '3rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                  <h3 style={{ color: '#fff', fontWeight: '800', fontSize: '1.3rem', marginBottom: '0.75rem' }}>Message Received</h3>
                  <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.75' }}>Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} style={{ marginTop: '2rem', background: '#009DE0', color: '#fff', padding: '12px 28px', borderRadius: '2px', border: 'none', fontWeight: '800', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer' }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p style={{ color: '#009DE0', fontSize: '10px', fontWeight: '700', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '1rem' }}>Tender / Enquiry Form</p>
                  <h3 style={{ color: '#fff', fontWeight: '800', fontSize: '1.5rem', marginBottom: '2rem', fontFamily: "'Barlow Condensed', sans-serif" }}>Submit Your Inquiry</h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ color: '#64748B', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Full Name *</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" className="form-input" />
                    </div>
                    <div>
                      <label style={{ color: '#64748B', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Company</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Organisation" className="form-input" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ color: '#64748B', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Phone *</label>
                      <input name="phone" required value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" className="form-input" />
                    </div>
                    <div>
                      <label style={{ color: '#64748B', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@company.com" className="form-input" />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ color: '#64748B', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Service Required</label>
                    <select name="service" value={form.service} onChange={handleChange} className="form-input" style={{ appearance: 'none' }}>
                      <option value="" style={{ background: '#28166F' }}>Select a service...</option>
                      <option value="erection" style={{ background: '#28166F' }}>Steel Girder Erection</option>
                      <option value="fabrication" style={{ background: '#28166F' }}>Metal Fabrication</option>
                      <option value="torquing" style={{ background: '#28166F' }}>Bolting & Torquing</option>
                      <option value="surface" style={{ background: '#28166F' }}>Surface Treatment</option>
                      <option value="civil" style={{ background: '#28166F' }}>Civil Works</option>
                      <option value="manpower" style={{ background: '#28166F' }}>Manpower Supply</option>
                      <option value="products" style={{ background: '#28166F' }}>Torque Equipment (Sales/Rental)</option>
                      <option value="other" style={{ background: '#28166F' }}>Other</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ color: '#64748B', fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Project Details / Message *</label>
                    <textarea name="message" required value={form.message} onChange={handleChange} placeholder="Describe the project scope, location, timeline, or your specific requirement..." className="form-input" rows={5} />
                  </div>

                  <button type="submit" style={{ width: '100%', background: '#009DE0', color: '#fff', padding: '16px', border: 'none', borderRadius: '2px', fontWeight: '800', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s' }}
                    onMouseEnter={e => e.target.style.background = '#38BDF8'}
                    onMouseLeave={e => e.target.style.background = '#009DE0'}>
                    Submit Inquiry →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div style={{ background: 'linear-gradient(180deg, #070E24 0%, #050d1e 100%)', padding: '0', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
          <div style={{ color: '#009DE0', fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Boisar, Dist. Palghar, Maharashtra</div>
          <div style={{ color: '#334155', fontSize: '12px', marginTop: '0.5rem' }}>Pan-India project deployment capabilities</div>
        </div>
      </div>
    </>
  );
}

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
          <Route path="products" element={<ProductsPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}