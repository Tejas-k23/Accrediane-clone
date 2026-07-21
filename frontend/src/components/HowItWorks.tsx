import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Presentation, Tv } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: <BarChart2 size={30} color="#ffffff" />,
      title: 'Skill Gap Analysis',
      desc: 'Assess team skill gaps and developmental needs.'
    },
    {
      number: 2,
      icon: <Presentation size={30} color="#ffffff" />,
      title: 'Customized Training Plan',
      desc: 'Create a tailored roadmap addressing organizational goals.'
    },
    {
      number: 3,
      icon: <Tv size={30} color="#ffffff" />,
      title: 'Flexible Program Delivery',
      desc: 'Deliver adaptable programs aligned with industry and organizational needs.'
    }
  ];

  return (
    <section id="how-it-works" data-section style={{ padding: '5.5rem 0', background: '#ffffff', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Section Header matching attached image */}
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
              color: '#000000',
              marginBottom: '0.5rem',
              letterSpacing: '-0.01em',
              fontFamily: 'var(--font-heading)'
            }}
          >
            How We <span style={{ color: '#1d6bf3' }}>Deliver Results</span> That Matter?
          </h2>

          <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#475569' }}>
            A Structured Three-Step Approach to <span style={{ color: '#1d6bf3' }}>Skill Development</span>
          </p>
        </motion.div>

        {/* 3 Step Cards Grid matching image */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6, boxShadow: '0 16px 35px -5px rgba(29, 107, 243, 0.15)' }}
              style={{
                background: 'linear-gradient(180deg, #f3f8ff 0%, #ebf4ff 100%)',
                borderRadius: '1.25rem',
                padding: '2.5rem 2rem',
                border: '1px solid #dbeafe',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 8px 24px -6px rgba(29, 107, 243, 0.08)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Vertical Blue Accent Bar on Left Edge */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  bottom: '18px',
                  left: 0,
                  width: '6px',
                  background: '#1d6bf3',
                  borderRadius: '0 4px 4px 0'
                }}
              />

              {/* Step Number Badge (Top-Left Circle) */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1.5px solid #bfdbfe',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
                }}
              >
                {step.number}
              </div>

              {/* Center Blue Circle Icon */}
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: '#1d6bf3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '0.5rem',
                  marginBottom: '1.75rem',
                  boxShadow: '0 8px 20px rgba(29, 107, 243, 0.28)'
                }}
              >
                {step.icon}
              </div>

              {/* Card Title & Description */}
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem' }}>
                {step.title}
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, maxWidth: '280px' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


