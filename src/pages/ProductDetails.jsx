import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data';

export function ProductDetails() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div style={{ padding: '10rem 2rem', textAlign: 'center', background: '#F8FAFC', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '2rem', color: '#0F172A', fontWeight: '800' }}>Equipment Not Found</h2>
        <Link to="/products" style={{ color: '#009DE0', textDecoration: 'none', fontWeight: '700' }}>&larr; Back to Inventory</Link>
      </div>
    );
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      
      {/* 1. Dark Header Navigation */}
      
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <Link to="/products" style={{ color: '#009DE0', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none' }}>
            &larr; Back to Inventory
          </Link>
        </div>
    

      {/* 2. Top Section: Product Overview (Balanced 50/50 Grid) */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          
          {/* Left: Main Product Image */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px', padding: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={product.img} alt={product.name} style={{ maxWidth: '100%', maxHeight: '450px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
            </div>
          </div>

          {/* Right: Details & Action Box */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column' }}>
            <span style={{ background: '#0F172A', color: '#fff', fontSize: '10px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 12px', borderRadius: '2px', alignSelf: 'flex-start', marginBottom: '1.5rem' }}>
              {product.cat}
            </span>
            
            <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0F172A', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '1.5rem' }}>
              {product.name}
            </h1>
            
            <div style={{ width: '40px', height: '3px', background: '#009DE0', marginBottom: '2rem' }} />
            
            <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.9', marginBottom: '2.5rem' }}>
              {product.desc}
            </p>

            <div style={{ background: '#fff', padding: '2rem', border: '1px solid #E2E8F0', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0F172A', marginBottom: '1rem', textTransform: 'uppercase' }}>Procurement Options</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ color: '#64748B', fontSize: '14px' }}><span style={{ color: '#009DE0', fontWeight: 'bold', marginRight: '8px' }}>✓</span> Direct Sales Inquiry</li>
                <li style={{ color: '#64748B', fontSize: '14px' }}><span style={{ color: '#009DE0', fontWeight: 'bold', marginRight: '8px' }}>✓</span> Project-based Rental / Hire</li>
                <li style={{ color: '#64748B', fontSize: '14px' }}><span style={{ color: '#009DE0', fontWeight: 'bold', marginRight: '8px' }}>✓</span> On-site Calibration Services</li>
              </ul>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/contact" style={{ flex: 1, textAlign: 'center', background: '#009DE0', color: '#fff', padding: '14px 28px', fontSize: '11px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
                  Request Quote
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Bottom Section: The Dedicated Catalog Viewer */}
      {product.catalogImg && (
        <section style={{ background: '#F1F5F9', padding: '5rem 0', borderTop: '1px solid #E2E8F0' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}> {/* Max width slightly smaller to frame the document perfectly */}
            
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ color: '#009DE0', fontSize: '11px', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Technical Data Sheet
              </p>
              <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#0F172A', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>
                Performance Specifications
              </h2>
            </div>

            {/* Premium Document Frame */}
            <div style={{ 
              background: '#fff', 
              padding: '1rem', 
              borderRadius: '4px', 
              border: '1px solid #CBD5E1',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)' // Gives it a "floating paper" look
            }}>
              <img 
                src={product.catalogImg} 
                alt={`${product.name} Specs`} 
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '2px' }} 
              />
            </div>

          </div>
        </section>
      )}

    </div>
  );
}