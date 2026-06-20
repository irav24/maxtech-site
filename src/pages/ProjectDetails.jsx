import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data'; // Adjust path if needed

export function ProjectDetails() {
  // 1. Grab the ID from the URL (e.g., "PROJ-04")
  const { id } = useParams();
  
  // 2. Find the exact project in our array
  const project = PROJECTS.find(p => p.id === id);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 3. Fallback if someone types a wrong URL
  if (!project) {
    return (
      <div style={{ padding: '10rem 2rem', textAlign: 'center', background: '#F8FAFC' }}>
        <h2 style={{ fontSize: '2rem', color: '#0F172A', fontWeight: '800' }}>Project Not Found</h2>
        <Link to="/projects" style={{ color: '#009DE0', textDecoration: 'none', fontWeight: '700' }}>&larr; Back to Portfolio</Link>
      </div>
    );
  }

  // 4. THE TEMPLATE
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      
      {/* HERO SECTION - Uses the project image as a massive background */}
      <section style={{ 
        position: 'relative', 
        height: '60vh', 
        minHeight: '400px',
        backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0.4) 100%), url(${project.image})`,
        backgroundSize:'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '4rem'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          <Link to="/projects" style={{ color: '#009DE0', fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
            &larr; Back to Portfolio
          </Link>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: project.color || '#009DE0', color: '#fff', fontSize: '10px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 12px', borderRadius: '2px' }}>
              {project.tag}
            </span>
            {project.status === 'Ongoing' && (
              <span style={{ background: '#F59E0B', color: '#fff', fontSize: '10px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', padding: '6px 12px', borderRadius: '2px' }}>
                Active Site
              </span>
            )}
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: '#fff', fontFamily: "'Barlow Condensed', sans-serif", lineHeight: '1.1', maxWidth: '800px', margin: 0 }}>
            {project.title}
          </h1>
        </div>
      </section>

      {/* QUICK FACTS STRIP */}
      <section style={{ background: '#0F172A', borderTop: '4px solid #009DE0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            
            <div>
              <div style={{ color: '#64748B', fontSize: '10px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Client</div>
              <div style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>{project.client}</div>
            </div>
            
            <div>
              <div style={{ color: '#64748B', fontSize: '10px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Location</div>
              <div style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>{project.location}</div>
            </div>
            
            <div>
              <div style={{ color: '#64748B', fontSize: '10px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Execution Period</div>
              <div style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>{project.year}</div>
            </div>
            
            <div>
              <div style={{ color: '#64748B', fontSize: '10px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Project Scale</div>
              <div style={{ color: '#009DE0', fontSize: '16px', fontWeight: '800' }}>{project.scale}</div>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      {/* MAIN CONTENT AREA */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
          
          {/* Left Column: Scope of Work */}
          <div style={{ flex: '1 1 600px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#0F172A', fontFamily: "'Barlow Condensed', sans-serif", marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Execution Scope
            </h2>
            <div style={{ width: '40px', height: '3px', background: '#009DE0', marginBottom: '2rem' }} />
            
            <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.9' }}>
              {project.scope} 
            </p>
            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: '1.9', marginTop: '1.5rem' }}>
              Maxtech Brothers deployed a highly skilled workforce and specialized equipment to ensure all milestones were met under strict safety and quality compliance standards.
            </p>
          </div>

          {/* Right Column: Dynamic Image Carousel OR Fallback */}
          <div style={{ flex: '1 1 400px', minWidth: 0 }}> {/* minWidth: 0 prevents the carousel from blowing out the flex container */}
            
            {project.gallery && project.gallery.length > 0 ? (
              
              /* THE NEW CAROUSEL (Renders if the project has a gallery array) */
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A', textTransform: 'uppercase', margin: 0 }}>Site Gallery</h3>
                  <span style={{ color: '#009DE0', fontSize: '10px', fontWeight: '800', letterSpacing: '2px' }}>SWIPE &rarr;</span>
                </div>

                {/* CSS Scroll Snap Container */}
                <div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', gap: '1rem', scrollbarWidth: 'none', msOverflowStyle: 'none', borderRadius: '4px' }}>
                  <style>{`div::-webkit-scrollbar { display: none; }`}</style>
                  
                  {project.gallery.map((imgSrc, index) => (
                    <div key={index} style={{ flex: '0 0 100%', scrollSnapAlign: 'center', aspectRatio: '1.24/1', borderRadius: '4px', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                      <img src={imgSrc} alt={`${project.title} Gallery ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                  
                </div>
              </div>

            ) : (

              /* THE FALLBACK (Renders for projects 6 through 14 that don't have a gallery yet) */
              <div style={{ background: '#F8FAFC', padding: '2.5rem', border: '1px solid #E2E8F0', borderRadius: '4px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A', marginBottom: '1rem', textTransform: 'uppercase' }}>Project Inquiry</h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.7', marginBottom: '2rem' }}>
                  Need a similar execution? Our engineering team is ready to review your BOQ and site requirements.
                </p>
                <Link to="/contact" style={{ display: 'block', textAlign: 'center', background: '#009DE0', color: '#fff', padding: '15px', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
                  Request a Proposal
                </Link>
              </div>

            )}

          </div>

        </div>
      </section>

    </div>
  );
}