import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenEnquire: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquire }) => {
  return (
    <section
      id="home"
      data-section
      style={{
        padding: '2.5rem 1rem 4rem',
        background: '#ffffff'
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: 0
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, #eef5ff 0%, #e4effe 100%)',
            borderRadius: '1.75rem',
            padding: '3.5rem 3.5rem',
            boxShadow: '0 10px 30px -10px rgba(29, 107, 243, 0.12)',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '2.5rem',
            alignItems: 'center',
            overflow: 'hidden'
          }}
          className="hero-card-container"
        >
          {/* Left Column Content */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#000000',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Next-Gen <span style={{ color: '#1d6bf3' }}>Expertise</span>
              <br />
              For Your <span style={{ color: '#1d6bf3' }}>Enterprise</span>
            </h1>

            <p
              style={{
                fontSize: '1.2rem',
                color: '#1e293b',
                fontWeight: 500,
                lineHeight: 1.5,
                marginBottom: '2rem',
                maxWidth: '520px'
              }}
            >
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Checkmark list */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-green-600" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Tailored Solutions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-green-600" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Industry Insights</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check text-green-600" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Expert Guidance</span>
              </div>
            </div>

            {/* Enquire Now CTA Button */}
            <button
              onClick={onOpenEnquire}
              style={{
                background: '#1d6bf3',
                color: '#ffffff',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.85rem 2.25rem',
                fontSize: '1.05rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(29, 107, 243, 0.35)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(29, 107, 243, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(29, 107, 243, 0.35)';
              }}
            >
              Enquire Now
            </button>
          </div>

          {/* Right Column Image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
              alt="Accredian Executive Expertise"
              style={{
                width: '100%',
                maxWidth: '540px',
                height: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

