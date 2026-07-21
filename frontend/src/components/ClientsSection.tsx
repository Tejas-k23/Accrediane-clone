import React from 'react';
import { motion } from 'framer-motion';

export const ClientsSection: React.FC = () => {
  const clientLogos = [
    { name: 'Reliance Industries', src: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png' },
    { name: 'HCL', src: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png' },
    { name: 'IBM', src: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png' },
    { name: 'CRIF', src: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png' },
    { name: 'ADP', src: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.png' },
    { name: 'BAYER', src: 'https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.png' }
  ];

  return (
    <section id="clients" data-section style={{ padding: '5rem 0', background: '#ffffff', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
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
            Our Proven <span style={{ color: '#1d6bf3' }}>Partnerships</span>
          </h2>

          <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#475569' }}>
            Successful Collaborations With the <span style={{ color: '#1d6bf3' }}>Industry's Best</span>
          </p>
        </motion.div>

        {/* Company Logos Grid with larger minmax width */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            justifyItems: 'center',
            padding: '1rem 0'
          }}
        >
          {clientLogos.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ scale: 1.08 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem',
                transition: 'all 0.25s ease'
              }}
            >
              <img
                src={client.src}
                alt={client.name}
                style={{
                  maxHeight: '68px',
                  maxWidth: '160px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'grayscale(0%)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

