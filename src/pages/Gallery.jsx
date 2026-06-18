import React from 'react';
import { PageHero } from '../components/PageHero';

export function Gallery() {
  return (
    <main>
      <PageHero 
        label="Our Work" 
        title="Project Gallery" 
        subtitle="A visual showcase of our civil and mechanical engineering operations."
        // You can add a bgImage prop here later if you want!
      />
      
      {/* The Photo Grid Section */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          
          {/* Image Placeholders - Replace these with actual <img> tags later */}
          <div style={{ height: '300px', backgroundColor: '#1A233A', borderRadius: '4px' }}></div>
          <div style={{ height: '300px', backgroundColor: '#1A233A', borderRadius: '4px' }}></div>
          <div style={{ height: '300px', backgroundColor: '#1A233A', borderRadius: '4px' }}></div>
          <div style={{ height: '300px', backgroundColor: '#1A233A', borderRadius: '4px' }}></div>
          <div style={{ height: '300px', backgroundColor: '#1A233A', borderRadius: '4px' }}></div>
          <div style={{ height: '300px', backgroundColor: '#1A233A', borderRadius: '4px' }}></div>

        </div>
      </section>
    </main>
  );
}