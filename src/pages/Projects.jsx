import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { PROJECTS } from '../data';
import projecthero from '../assets/projecthero.jpeg'

function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);
  
  return (
    <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ 
        background: '#fff', 
        border: '1px solid #E2E8F0', 
        overflow: 'hidden', 
        transition: 'box-shadow 0.3s', 
        boxShadow: hov ? '0 12px 40px rgba(0,0,0,0.1)' : 'none',
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%' 
      }}>
        
        <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative', background: '#F1F5F9' }}>
          {project.image ? (
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Image Pending</div>
          )}
          
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
            {project.status === 'Ongoing' && (
              <span style={{ background: '#F59E0B', color: '#fff', fontSize: '9px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
                Active Site
              </span>
            )}
          </div>

          <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: project.color || '#0F172A', color: '#fff', fontSize: '9px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px' }}>{project.tag}</span>
        </div>
        
        <div style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3 style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.15rem)', fontWeight: '800', color: '#0F172A', lineHeight: '1.4', marginBottom: '0.5rem', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>{project.title}</h3>
          <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '1rem', fontWeight: '500' }}>{project.client} · {project.location}</p>
          <p style={{ color: '#475569', fontSize: '13px', lineHeight: '1.75', marginBottom: '1.5rem' }}>{project.scope}</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1EDE4', paddingTop: '1.25rem', marginTop: 'auto' }}>
            <div>
              <div style={{ color: '#94A3B8', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700' }}>Year</div>
              <div style={{ fontWeight: '700', color: '#0F172A', fontSize: '14px', marginTop: '2px' }}>{project.year}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#94A3B8', fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700' }}>Scale</div>
              <div style={{ fontWeight: '700', color: '#0EA5E9', fontSize: '14px', marginTop: '2px' }}>{project.scale}</div>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}


export function Projects() {
  const STATUS_TABS = ['All Projects', 'Ongoing Projects', 'Completed Projects'];
  const [activeTab, setActiveTab] = useState('All Projects');
  const [activeTag, setActiveTag] = useState('All');

  const filteredByStatus = PROJECTS.filter(p => {
    if (activeTab === 'Completed Projects') return p.status === 'Completed';
    if (activeTab === 'Ongoing Projects') return p.status === 'Ongoing';
    return true;
  });

  const TAGS = ['All', ...Array.from(new Set(filteredByStatus.map(p => p.tag)))];
  const finalFilteredProjects = filteredByStatus.filter(p => activeTag === 'All' ? true : p.tag === activeTag);

  useEffect(() => {
    setActiveTag('All');
  }, [activeTab]);

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      
      {/* We inject a quick global style here to hide the scrollbars on our new mobile swipers */}
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { scrollbar-width: none; ms-overflow-style: none; }
      `}</style>

      <PageHero bgImage={projecthero} label="Our Portfolio" title="Engineering Marvels Delivered" subtitle="A proven track record of high-value civil and mechanical operations across India's most demanding infrastructure corridors." />

      <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 2rem)' }}>
          
          {/* 1. THE STATUS TABS (App-like swiper on mobile) */}
          <div className="hide-scroll" style={{ 
            display: 'flex', 
            gap: 'clamp(1.5rem, 4vw, 2.5rem)', 
            borderBottom: '1px solid #CBD5E1', 
            marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)', 
            overflowX: 'auto', 
            whiteSpace: 'nowrap'
          }}>
            {STATUS_TABS.map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  padding: '0 0 1rem 0', 
                  color: activeTab === tab ? '#009DE0' : '#64748B', 
                  fontWeight: '800', 
                  fontSize: 'clamp(13px, 3vw, 15px)', 
                  letterSpacing: '1px', 
                  textTransform: 'uppercase', 
                  borderBottom: activeTab === tab ? '2px solid #009DE0' : '2px solid transparent', 
                  cursor: 'pointer', 
                  transition: 'color 0.2s, border-color 0.2s' 
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 2. THE CATEGORY TAGS (The neat, pill-shaped horizontal scroller) */}
          <div className="hide-scroll" style={{ 
            display: 'flex', 
            gap: '0.6rem', 
            overflowX: 'auto', 
            paddingBottom: '0.5rem', /* Prevents box-shadows from clipping */
            marginBottom: 'clamp(2rem, 5vw, 3.5rem)'
          }}>
            {TAGS.map(tag => (
              <button 
                key={tag} 
                onClick={() => setActiveTag(tag)}
                style={{
                  background: activeTag === tag ? '#0F172A' : '#fff',
                  color: activeTag === tag ? '#fff' : '#475569',
                  border: `1px solid ${activeTag === tag ? '#0F172A' : '#CBD5E1'}`,
                  padding: '8px 18px',
                  fontSize: '11px',
                  fontWeight: '800',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  borderRadius: '20px', /* The secret to a neat, modern look */
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0 /* CRITICAL: Prevents buttons from squishing into weird shapes on phones */
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          <p style={{ color: '#94A3B8', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '800', marginBottom: '2rem', fontFamily: "'Barlow Condensed', sans-serif" }}>
            Showing {finalFilteredProjects.length} {activeTab.toLowerCase().replace(' projects', '')} project{finalFilteredProjects.length !== 1 ? 's' : ''}
          </p>

          {/* 3. THE FLUID GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '2px', background: '#CBD5E1' }}>
            {finalFilteredProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>

          {finalFilteredProjects.length === 0 && (
             <div style={{ textAlign: 'center', padding: '4rem', background: '#fff', border: '1px dashed #CBD5E1' }}>
               <p style={{ color: '#64748B', fontSize: '14px', fontWeight: '600' }}>No projects found for this category.</p>
             </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#F8FAFC', borderTop: '2px solid #E2E8F0',padding: 'clamp(3rem, 8vw, 4.5rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 2rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', fontWeight: '800', color: '#111111', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>Have a project in mind?</h2>
            <p style={{ color: '#111', marginTop: '0.4rem', fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>Submit a tender inquiry and our engineering team will respond within 24 hours.</p>
          </div>
          <Link to="/contact" style={{ background: '#009DE0', color: '#FFF', padding: '15px 36px', borderRadius: '2px', fontWeight: '800', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Start a Tender →</Link>
        </div>
      </section>
    </div>
  );
}