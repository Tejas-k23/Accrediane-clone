import React, { useState } from 'react';
import { Award, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer style={{ background: '#0f172a', color: '#cbd5e1', paddingTop: '4.5rem', paddingBottom: '2.5rem', borderTop: '1px solid #1e293b' }}>
      <div className="container">
        
        {/* Top Newsletter banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              Subscribe to Executive Insights
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#94a3b8' }}>
              Get weekly updates on emerging AI trends, leadership frameworks, and career opportunities.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', fontWeight: 600 }}>
                <CheckCircle2 size={20} /> You have successfully subscribed!
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #334155',
                    background: '#0f172a',
                    color: 'white',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.25rem' }}>
                  Subscribe <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '0.5rem', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <Award size={20} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: '#ffffff' }}>
                accredian<span style={{ color: '#3b82f6' }}>.</span>
              </span>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '1.25rem' }}>
              Empowering global professionals through high-impact executive certifications and outcome-driven learning programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Programs</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><a href="#domains" style={{ color: '#94a3b8' }}>Data Science & AI</a></li>
              <li><a href="#domains" style={{ color: '#94a3b8' }}>Product Management</a></li>
              <li><a href="#domains" style={{ color: '#94a3b8' }}>Business Analytics</a></li>
              <li><a href="#domains" style={{ color: '#94a3b8' }}>Digital Transformation</a></li>
              <li><a href="#domains" style={{ color: '#94a3b8' }}>Executive Leadership</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><a href="#edge" style={{ color: '#94a3b8' }}>Accredian Edge</a></li>
              <li><a href="#how-it-works" style={{ color: '#94a3b8' }}>How It Works</a></li>
              <li><a href="#testimonials" style={{ color: '#94a3b8' }}>Success Stories</a></li>
              <li><a href="#faqs" style={{ color: '#94a3b8' }}>FAQs & Help</a></li>
              <li><a href="#home" style={{ color: '#94a3b8' }}>Refer & Earn</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="#3b82f6" /> admissions@accredian.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="#3b82f6" /> +91 80 4718 5555
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="#3b82f6" style={{ marginTop: '3px' }} /> Sector 44, Executive Towers, Gurgaon, India
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ paddingTop: '2rem', borderTop: '1px solid #1e293b', textAlign: 'center', fontSize: '0.85rem', color: '#64748b' }}>
          © {new Date().getFullYear()} Accredian Education Technologies. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
