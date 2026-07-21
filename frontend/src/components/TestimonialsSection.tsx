import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, ChevronRight } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials?: any[];
  onOpenEnquire?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenEnquire }) => {
  const slides = [
    // Slide 1 (ADP & Bayer)
    [
      {
        id: 'adp',
        company: 'ADP',
        logo: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.png',
        quote: 'We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.'
      },
      {
        id: 'bayer-1',
        company: 'BAYER',
        logo: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.png',
        quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
      }
    ],
    // Slide 2 (Bayer & Reliance)
    [
      {
        id: 'bayer-2',
        company: 'BAYER',
        logo: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.png',
        quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
      },
      {
        id: 'reliance',
        company: 'Reliance Industries',
        logo: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png',
        quote: 'Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.'
      }
    ]
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide transition every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="testimonials" data-section style={{ padding: '5rem 0 3.5rem', background: '#ffffff', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Header matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '0.5rem',
              letterSpacing: '-0.01em',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Testimonials from <span style={{ color: '#1d6bf3' }}>Our Partners</span>
          </h2>
          
          <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#475569' }}>
            What <span style={{ color: '#1d6bf3' }}>Our Clients</span> Are Saying
          </p>
        </motion.div>

        {/* Testimonial Cards Slide Container */}
        <div style={{ minHeight: '260px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                marginBottom: '2.5rem'
              }}
            >
              {slides[currentSlide].map((card) => (
                <div
                  key={card.id}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '1.25rem',
                    padding: '2.5rem 2.25rem',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.75rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ height: '48px', display: 'flex', alignItems: 'center' }}>
                    <img
                      src={card.logo}
                      alt={`${card.company} logo`}
                      style={{
                        height: '44px',
                        width: 'auto',
                        maxWidth: '150px',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.65, fontWeight: 500 }}>
                    "{card.quote}"
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots below cards */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '4.5rem' }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                border: 'none',
                background: currentSlide === idx ? '#1d6bf3' : '#cbd5e1',
                cursor: 'pointer',
                padding: 0,
                transition: 'background-color 0.3s ease'
              }}
            />
          ))}
        </div>

        {/* Callout Banner Box matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #1d6bf3 0%, #1557c0 100%)',
            borderRadius: '1.25rem',
            padding: '2.5rem 3rem',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 15px 35px -10px rgba(29, 107, 243, 0.3)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          {/* Background Concentric Arch Decoration */}
          <div
            style={{
              position: 'absolute',
              right: '-10%',
              bottom: '-80%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              border: '40px solid rgba(255, 255, 255, 0.08)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: '5%',
              bottom: '-60%',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              border: '30px solid rgba(255, 255, 255, 0.08)',
              pointerEvents: 'none'
            }}
          />

          {/* Left Side: Headset Icon + Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 1, flex: 1, minWidth: '280px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '1rem',
                background: '#ffffff',
                color: '#1d6bf3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Headphones size={30} strokeWidth={2.2} />
            </div>

            <div>
              <h3 style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                Want to Learn More About Our Training Solutions?
              </h3>
              <p style={{ fontSize: '0.975rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}>
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>

          {/* Right Side: Contact Us Button */}
          <div style={{ zIndex: 1 }}>
            <button
              onClick={onOpenEnquire}
              style={{
                background: '#ffffff',
                color: '#1d6bf3',
                border: 'none',
                borderRadius: '0.65rem',
                padding: '0.8rem 1.6rem',
                fontSize: '0.975rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.1)';
              }}
            >
              Contact Us <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


