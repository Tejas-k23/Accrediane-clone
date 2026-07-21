import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Counter: React.FC<{ target: number; suffix: string; duration?: number }> = ({ target, suffix, duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}{suffix}</>;
};

export const StatsSection: React.FC = () => {
  const statItems = [
    {
      target: 10,
      suffix: 'K+',
      desc: 'Professionals Trained For Exceptional Career Success'
    },
    {
      target: 200,
      suffix: '+',
      desc: 'Sessions Delivered With Unmatched Learning Excellence'
    },
    {
      target: 5,
      suffix: 'K+',
      desc: 'Active Learners Engaged In Dynamic Courses'
    }
  ];

  return (
    <section id="stats" data-section style={{ padding: '5.5rem 0 4.5rem', background: '#ffffff', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Section Header matching attached screenshot */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
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
            Our <span style={{ color: '#1d6bf3' }}>Track Record</span>
          </h2>

          <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#475569' }}>
            The Numbers Behind <span style={{ color: '#1d6bf3' }}>Our Success</span>
          </p>
        </motion.div>

        {/* 3 Stat Columns with Pill Badges & Dividers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            alignItems: 'center'
          }}
          className="stats-grid"
        >
          {statItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1rem 1.5rem',
                position: 'relative',
                borderLeft: idx > 0 ? '1px solid #e2e8f0' : 'none'
              }}
              className="stat-column"
            >
              {/* Blue Pill Badge */}
              <div
                style={{
                  background: 'linear-gradient(180deg, #eff6ff 0%, #e0edff 100%)',
                  color: '#1d6bf3',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  padding: '0.65rem 2.25rem',
                  borderRadius: '9999px',
                  border: '1px solid #dbeafe',
                  marginBottom: '1.75rem',
                  boxShadow: '0 4px 14px rgba(29, 107, 243, 0.12)'
                }}
              >
                <Counter target={item.target} suffix={item.suffix} />
              </div>

              {/* Description Text */}
              <p
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1.5,
                  maxWidth: '280px',
                  margin: '0 auto'
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

