import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { domains, courseCards } from '../data/content';
import { BookOpen, Star, Clock, ArrowRight } from 'lucide-react';

interface DomainsSectionProps {
  onOpenEnquire: () => void;
}

export const DomainsSection: React.FC<DomainsSectionProps> = ({ onOpenEnquire }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const allDomains = ['All', ...domains];

  return (
    <section id="domains" data-section style={{ padding: '5rem 0', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
          <span className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <BookOpen size={14} /> Comprehensive Curriculum
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
            Explore High-Growth Specializations
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Browse domain-tailored courses designed in partnership with leading global executives.
          </p>

          {/* Domain Category Filter Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginTop: '1.75rem' }}>
            {allDomains.slice(0, 7).map((domain, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDomain(domain)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: selectedDomain === domain ? '#2563eb' : '#cbd5e1',
                  background: selectedDomain === domain ? '#2563eb' : '#ffffff',
                  color: selectedDomain === domain ? '#ffffff' : '#475569',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.75rem' }}>
          {courseCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-card"
              style={{
                borderRadius: '1.25rem',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ height: '8px', background: 'var(--gradient-primary)' }} />
              
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: '0.375rem', background: '#eff6ff', color: '#2563eb', textTransform: 'uppercase' }}>
                    Certified
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#eab308', fontSize: '0.85rem', fontWeight: 700 }}>
                    <Star size={16} fill="#eab308" /> 4.9
                  </div>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                  {card.title}
                </h3>

                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem', flex: 1 }}>
                  Focus Areas: <strong>{card.examples}</strong>
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#64748b', fontSize: '0.85rem' }}>
                    <Clock size={16} /> 6 Months
                  </div>

                  <button
                    onClick={onOpenEnquire}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      color: '#2563eb',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    Enquire <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
