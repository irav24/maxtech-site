// src/pages/Admin.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Admin() {
  // Mock State for the Gallery Images (You will replace this with a database fetch later)
  const [images, setImages] = useState([
    { id: 1, url: 'https://images.unsplash.com/photo-1541888086225-f6740f9e81b3?auto=format&fit=crop&w=600&q=80', title: 'Site Prep' },
    { id: 2, url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80', title: 'Steel Fabrication' },
    { id: 3, url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80', title: 'Heavy Lifting' }
  ]);

  const [isUploading, setIsUploading] = useState(false);

  // Handle Mock Delete
  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to remove this image from the live gallery?")) {
      setImages(images.filter(img => img.id !== id));
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0F172A', fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* --- SIDEBAR --- */}
      <div style={{ width: '260px', background: '#020617', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', letterSpacing: '1px' }}>
            Maxtech <span style={{ color: '#009DE0' }}>Admin</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '11px', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Portal v1.0</p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
          <button style={{ background: 'rgba(0,157,224,0.1)', color: '#009DE0', border: '1px solid rgba(0,157,224,0.2)', padding: '12px 16px', borderRadius: '4px', textAlign: 'left', fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            Gallery Manager
          </button>
          
          <button style={{ background: 'transparent', color: '#64748B', border: '1px solid transparent', padding: '12px 16px', borderRadius: '4px', textAlign: 'left', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'not-allowed' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            Projects (Coming Soon)
          </button>
        </nav>

        <Link to="/" style={{ color: '#64748B', textDecoration: 'none', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '10px', marginTop: 'auto', padding: '12px 16px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
          Exit to Live Site
        </Link>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div style={{ flexGrow: 1, padding: '3rem 4rem', overflowY: 'auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div>
            <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: '800', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '1px', textTransform: 'uppercase', margin: 0 }}>Visual Archive</h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', marginTop: '8px' }}>Manage the live execution photos displayed on the public gallery page.</p>
          </div>
          
          <button 
            onClick={() => setIsUploading(!isUploading)}
            style={{ background: isUploading ? '#334155' : '#009DE0', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '4px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'background 0.2s' }}
          >
            {isUploading ? 'Cancel Upload' : '+ Upload New Photo'}
          </button>
        </div>

        {/* Upload Area (Toggled) */}
        {isUploading && (
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '8px', padding: '4rem', textAlign: 'center', marginBottom: '3rem' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5" style={{ marginBottom: '1rem' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Drag & Drop Image Here</h3>
            <p style={{ color: '#64748B', fontSize: '13px', marginBottom: '1.5rem' }}>Supports JPG, PNG (Max 5MB)</p>
            <button style={{ background: '#fff', color: '#0F172A', border: 'none', padding: '10px 24px', borderRadius: '4px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>Browse Files</button>
          </div>
        )}

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {images.map((img) => (
            <div key={img.id} style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '6px', overflow: 'hidden', group: 'true' }}>
              <img src={img.url} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              
              {/* Hover Overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', opacity: 0, transition: 'opacity 0.2s', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem' }} 
                   onMouseEnter={e => e.currentTarget.style.opacity = 1} 
                   onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                
                <h4 style={{ color: '#fff', margin: '0 0 1rem 0', fontSize: '14px', fontWeight: '600' }}>{img.title}</h4>
                
                <button onClick={() => handleDelete(img.id)} style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '8px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' }}
                        onMouseEnter={e => {e.currentTarget.style.background = '#EF4444'; e.currentTarget.style.color = '#fff';}}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                  Delete Image
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}