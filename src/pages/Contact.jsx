import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // <-- PUT YOUR KEY BACK HERE
          subject: "New Corporate Inquiry",
          from_name: "Maxtech Portal",
          ...formData
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero 
        label="Get in Touch" 
        title="Corporate Operations" 
        subtitle="Connect with our engineering teams, procurement divisions, and project management experts."
        hasWatermark={true}
        bgImage="contact-bg.jpg" /* <--- ADD YOUR EXACT FILE NAME HERE */
      />
      <section style={{ background: '#F8FAFC', padding: 'clamp(3rem, 8vw, 6rem) 0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)' }}>
            
            {/* LEFT COLUMN: Single HQ & Departments */}
            <div>
              <h2 style={{ fontSize: '13px', fontWeight: '800', color: '#009DE0', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '2rem' }}>
                Headquarters
              </h2>
              
              {/* Premium Single Office Card */}
              <div style={{ padding: '2.5rem', background: '#0A0F1C', borderTop: '4px solid #009DE0', marginBottom: '4rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                  Maxtech Brothers Engineering
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.8', whiteSpace: 'pre-line', marginBottom: '2rem' }}>
                  201/A Wing, Godavari Building{'\n'}
                  Boisar, Dist. Palghar{'\n'}
                  Maharashtra – 401504
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                  <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600' }}>T: +91 96654 42319</span>
                  <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600' }}>T: +91 98226 53347</span>
                  <span style={{ color: '#009DE0', fontSize: '14px', fontWeight: '600', marginTop: '0.5rem' }}>E: director@maxtechbrothers.com</span>
                </div>
              </div>

              {/* Department Directory */}
              <h2 style={{ fontSize: '13px', fontWeight: '800', color: '#009DE0', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Direct Departments
              </h2>
              <div style={{ borderTop: '1px solid #E2E8F0' }}>
                {[
                  { name: 'Tender & Bidding', email: 'tenders@maxtechbrothers.com' },
                  { name: 'Procurement & Supply', email: 'purchase@maxtechbrothers.com' },
                  { name: 'Careers & HR', email: 'hr@maxtechbrothers.com' }
                ].map((dept, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem', padding: '1.25rem 0', borderBottom: '1px solid #E2E8F0' }}>
                    <span style={{ color: '#0F172A', fontSize: '14px', fontWeight: '700' }}>{dept.name}</span>
                    <a href={`mailto:${dept.email}`} style={{ color: '#009DE0', fontSize: '12px', fontWeight: '600', textDecoration: 'none', wordBreak: 'break-all' }}>{dept.email}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: The Minimalist Industrial Form */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'sticky', top: '120px', background: '#ffffff', border: '1px solid #E2E8F0', padding: 'clamp(1.5rem, 4vw, 3.5rem)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                <div style={{ marginBottom: '3rem' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: '900', color: '#0A0F1C', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '0.5rem' }}>
                    Direct Inquiry
                  </h3>
                  <p style={{ color: '#64748B', fontSize: '14px' }}>Fill out the form below. Required fields are marked with an asterisk (*).</p>
                </div>

                {status === 'success' ? (
                  <div style={{ background: '#F8FAFC', borderLeft: '4px solid #009DE0', padding: '2rem' }}>
                    <h4 style={{ color: '#0A0F1C', fontSize: '1.2rem', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', marginBottom: '0.5rem' }}>Submission Successful</h4>
                    <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>Thank you for reaching out to Maxtech Brothers. Your inquiry has been routed to the appropriate department, and a representative will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    
                  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                      <div style={{ flex: '1 1 200px' }}>
                        <label style={{ display: 'block', color: '#0A0F1C', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Full Name *</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '0 0 12px 0', background: 'transparent', border: 'none', borderBottom: '1px solid #CBD5E1', outline: 'none', fontSize: '15px', color: '#0A0F1C', transition: 'border-color 0.3s' }} onFocus={e => e.target.style.borderBottomColor = '#009DE0'} onBlur={e => e.target.style.borderBottomColor = '#CBD5E1'} />
                      </div>
                      <div style={{ flex: '1 1 200px' }}>
                        <label style={{ display: 'block', color: '#0A0F1C', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Company / Organization</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} style={{ width: '100%', padding: '0 0 12px 0', background: 'transparent', border: 'none', borderBottom: '1px solid #CBD5E1', outline: 'none', fontSize: '15px', color: '#0A0F1C', transition: 'border-color 0.3s' }} onFocus={e => e.target.style.borderBottomColor = '#009DE0'} onBlur={e => e.target.style.borderBottomColor = '#CBD5E1'} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', color: '#0A0F1C', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Business Email *</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '0 0 12px 0', background: 'transparent', border: 'none', borderBottom: '1px solid #CBD5E1', outline: 'none', fontSize: '15px', color: '#0A0F1C', transition: 'border-color 0.3s' }} onFocus={e => e.target.style.borderBottomColor = '#009DE0'} onBlur={e => e.target.style.borderBottomColor = '#CBD5E1'} />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: '#0A0F1C', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Message / Project Details *</label>
                      <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" style={{ width: '100%', padding: '0 0 12px 0', background: 'transparent', border: 'none', borderBottom: '1px solid #CBD5E1', outline: 'none', fontSize: '15px', color: '#0A0F1C', resize: 'vertical', transition: 'border-color 0.3s' }} onFocus={e => e.target.style.borderBottomColor = '#009DE0'} onBlur={e => e.target.style.borderBottomColor = '#CBD5E1'}></textarea>
                    </div>

                    {status === 'error' && (
                      <p style={{ color: '#EF4444', fontSize: '13px', fontWeight: '600' }}>Error submitting form. Please verify your connection and try again.</p>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      style={{ 
                        marginTop: '1rem',
                        alignSelf: 'flex-start',
                        background: status === 'submitting' ? '#CBD5E1' : '#0A0F1C', 
                        color: '#ffffff', 
                        border: 'none', 
                        padding: '18px 40px', 
                        fontSize: '12px', 
                        fontWeight: '800', 
                        fontFamily: "'Barlow Condensed', sans-serif",
                        letterSpacing: '2px', 
                        textTransform: 'uppercase', 
                        cursor: status === 'submitting' ? 'not-allowed' : 'pointer', 
                        transition: 'all 0.3s' 
                      }}
                      onMouseEnter={e => { if(status !== 'submitting') e.target.style.background = '#009DE0' }}
                      onMouseLeave={e => { if(status !== 'submitting') e.target.style.background = '#0A0F1C' }}
                    >
                      {status === 'submitting' ? 'Processing...' : 'Submit Inquiry'}
                    </button>
                    
                    <p style={{ color: '#94A3B8', fontSize: '11px', marginTop: '1rem' }}>By submitting this form, you agree to our data processing terms.</p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}