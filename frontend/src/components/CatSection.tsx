import React from 'react';
import { motion } from 'framer-motion';
import catV2Svg from '../assets/catV2.svg';

export const CatSection: React.FC = () => {
  return (
    <section id="cat" data-section style={{ padding: '5rem 0', background: '#f8fafc', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Section Header matching image 2 */}
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
            The <span style={{ color: '#1d6bf3' }}>CAT Framework</span>
          </h2>

          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: '#475569' }}>
            Our Proven Approach to <span style={{ color: '#1d6bf3' }}>Learning Excellence</span>
          </p>
        </motion.div>

        {/* CAT Framework SVG Graphic Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #edf5ff 100%)',
            borderRadius: '1.75rem',
            padding: '3.5rem 2.5rem',
            border: '1px solid #dbeafe',
            boxShadow: '0 20px 40px -15px rgba(29, 107, 243, 0.09)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <img
              src={catV2Svg}
              alt="The CAT Framework - Concept, Application, Tools"
              style={{
                width: '100%',
                maxWidth: '960px',
                height: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
