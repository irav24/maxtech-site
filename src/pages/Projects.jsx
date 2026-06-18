import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { PROJECTS } from '../data';

function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);
  return (
    <Link to={`/project/${project.id}`} style={{ textDecoration: 'none' }}>
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: '#fff', border: '1px solid #E2E8F0', overflow: 'hidden', transition: 'box-shadow 0.3s', boxShadow: hov ? '0 12px 40px rgba(0,0,0,0.1)' : 'none' }}>
      <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
        
        {/* Active Site Badge for Ongoing Projects */}
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
          {project.status === 'Ongoing' && (
            <span style={{ background: '#F59E0B', color: '#fff', fontSize: '9px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', animation: 'pulse 2s infinite' }}></span>
              Active Site
            </span>
          )}
        </div>

        <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: project.color, color: '#fff', fontSize: '9px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '2px' }}>{project.tag}</span>
      </div>
      <div style={{ padding: '1.75rem' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0F172A', lineHeight: '1.4', marginBottom: '0.5rem' }}>{project.title}</h3>
        <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '1rem', fontWeight: '500' }}>{project.client} · {project.location}</p>
        <p style={{ color: '#475569', fontSize: '13px', lineHeight: '1.75', marginBottom: '1.5rem' }}>{project.scope}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1EDE4', paddingTop: '1.25rem' }}>
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

  // Filter 1: By Status
  const filteredByStatus = PROJECTS.filter(p => {
    if (activeTab === 'Completed Projects') return p.status === 'Completed';
    if (activeTab === 'Ongoing Projects') return p.status === 'Ongoing';
    return true;
  });

  // Dynamic tags based on the current status view
  const TAGS = ['All', ...Array.from(new Set(filteredByStatus.map(p => p.tag)))];

  // Filter 2: By Category Tag
  const finalFilteredProjects = filteredByStatus.filter(p => activeTag === 'All' ? true : p.tag === activeTag);

  // Auto-reset tag to 'All' when switching status tabs
  useEffect(() => {
    setActiveTag('All');
  }, [activeTab]);

  return (
    <>
      <PageHero label="Our Portfolio" title="Engineering Marvels Delivered" subtitle="A proven track record of high-value civil and mechanical operations across India's most demanding infrastructure corridors." />

      <section style={{ background: '#F1F5F9', padding: '4rem 0 6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid #CBD5E1', marginBottom: '2.5rem', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            {STATUS_TABS.map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                style={{ background: 'none', border: 'none', padding: '0 0 1rem 0', color: activeTab === tab ? '#0EA5E9' : '#64748B', fontWeight: '800', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase', borderBottom: activeTab === tab ? '2px solid #0EA5E9' : '2px solid transparent', cursor: 'pointer', transition: 'color 0.2s, border-color 0.2s' }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            {TAGS.map(tag => (
              <button key={tag} className={`tag-btn ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(tag)}>{tag}</button>
            ))}
          </div>

          <p style={{ color: '#94A3B8', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700', marginBottom: '2rem' }}>
            Showing {finalFilteredProjects.length} {activeTab.toLowerCase().replace(' projects', '')} project{finalFilteredProjects.length !== 1 ? 's' : ''}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2px', background: '#CBD5E1' }}>
            {finalFilteredProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>

          {finalFilteredProjects.length === 0 && (
             <div style={{ textAlign: 'center', padding: '4rem', background: '#fff', border: '1px dashed #CBD5E1' }}>
               <p style={{ color: '#64748B', fontSize: '14px', fontWeight: '600' }}>No projects found for this category.</p>
             </div>
          )}
        </div>
      </section>

      <section style={{ background: '#0EA5E9', padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000', fontFamily: "'Barlow Condensed', sans-serif" }}>Have a project in mind?</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.4rem' }}>Submit a tender inquiry and our team will respond within 24 hours.</p>
          </div>
          <Link to="/contact" style={{ background: '#0EA5E9', color: '#fff', padding: '15px 36px', borderRadius: '2px', fontWeight: '800', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}>Start a Tender →</Link>
        </div>
      </section>
    </>
  );
}