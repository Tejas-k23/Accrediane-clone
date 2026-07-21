import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ananya Sharma',
      role: 'Product Lead',
      company: 'TechCorp Solutions',
      content: 'The executive program at Accredian gave me the strategic clarity and technical confidence required to transition into a VP level role. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Rohan Mehta',
      role: 'Senior Data Scientist',
      company: 'Analytics Global',
      content: 'Hands-down the best structured learning path for working professionals. The mentors are domain experts currently leading top engineering teams.',
      rating: 5
    },
    {
      id: 3,
      name: 'Priya Sundaram',
      role: 'Engineering Manager',
      company: 'Fintech Innovations',
      content: 'I referred 3 colleagues and earned ₹45,000 while elevating my entire team’s capability. The ROI is unmatched!',
      rating: 5
    }
  ];

  const list = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % list.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [list.length]);

  const handlePrev = () => setIndex((prev) => (prev - 1 + list.length) % list.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % list.length);

  const current = list[index];

  return (
    <section id="testimonials" data-section style={{ padding: '5rem 0', background: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <MessageSquare size={14} /> Alumni Reviews
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
            Loved by 18,000+ Professionals
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
            Discover how Accredian credentialing transformed their career trajectories.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div style={{ position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id || index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="glass-card"
              style={{
                borderRadius: '1.5rem',
                padding: '3rem 2.5rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid #e2e8f0',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative'
              }}
            >
              <Quote size={48} color="rgba(37, 99, 235, 0.15)" style={{ position: 'absolute', top: '2rem', right: '2.5rem' }} />

              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem', color: '#eab308' }}>
                {[...Array(current.rating || 5)].map((_, i) => (
                  <Star key={i} size={18} fill="#eab308" />
                ))}
              </div>

              <p style={{ fontSize: '1.2rem', color: '#1e293b', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '2rem', fontWeight: 500 }}>
                "{current.content}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--gradient-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem' }}>
                  {current.name ? current.name.charAt(0) : 'A'}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{current.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{current.role} • {current.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
            <button
              onClick={handlePrev}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#334155',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {list.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    width: i === index ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === index ? '#2563eb' : '#cbd5e1',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#334155',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
