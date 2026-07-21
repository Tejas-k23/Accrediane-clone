import React from 'react';
import { motion } from 'framer-motion';
import accredianEdgeSvg from '../assets/accredian-edge-usp-v3.svg';
import humanImg from '../assets/imagehuman.png';
import { Lightbulb, Brain, Users, BarChart3, Settings, Globe, CreditCard, MonitorCheck, MonitorX, GraduationCap, Briefcase } from 'lucide-react';

export const EdgeSection: React.FC = () => {
  const domains = [
    {
      title: 'Product & Innovation Hub',
      icon: <Lightbulb size={40} color="#1d6bf3" strokeWidth={1.75} />
    },
    {
      title: 'Gen-AI Mastery',
      icon: <Brain size={40} color="#1d6bf3" strokeWidth={1.75} />
    },
    {
      title: 'Leadership Elevation',
      icon: <Users size={40} color="#1d6bf3" strokeWidth={1.75} />
    },
    {
      title: 'Tech & Data Insights',
      icon: <BarChart3 size={40} color="#1d6bf3" strokeWidth={1.75} />
    },
    {
      title: 'Operations Excellence',
      icon: <Settings size={40} color="#1d6bf3" strokeWidth={1.75} />
    },
    {
      title: 'Digital Enterprise',
      icon: <Globe size={40} color="#1d6bf3" strokeWidth={1.75} />
    },
    {
      title: 'Fintech Innovation Lab',
      icon: <CreditCard size={40} color="#1d6bf3" strokeWidth={1.75} />
    }
  ];

  return (
    <section id="edge" data-section style={{ padding: '4.5rem 0', background: '#ffffff', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        {/* Accredian Edge Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '0.4rem',
              letterSpacing: '-0.01em',
              fontFamily: 'var(--font-heading)'
            }}
          >
            The <span style={{ color: '#1d6bf3' }}>Accredian Edge</span>
          </h2>
          
          <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#475569' }}>
            Key Aspects of <span style={{ color: '#1d6bf3' }}>Our Strategic Training</span>
          </p>
        </motion.div>

        {/* Accredian Edge SVG Infographic Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
            borderRadius: '1.5rem',
            padding: '2rem 1.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 15px 35px -15px rgba(29, 107, 243, 0.08)',
            marginBottom: '4.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <img
              src={accredianEdgeSvg}
              alt="The Accredian Edge Diagram"
              style={{
                width: '100%',
                maxWidth: '1100px',
                height: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </motion.div>
        </motion.div>

        {/* Our Domain Expertise Component (Under Accredian Edge USP diagram) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '0.4rem',
              letterSpacing: '-0.01em',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Our <span style={{ color: '#1d6bf3' }}>Domain Expertise</span>
          </h2>

          <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#475569' }}>
            <span style={{ color: '#1d6bf3' }}>Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </motion.div>

        {/* 7 Domain Cards Layout in a Single Responsive CSS Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {domains.map((domain, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5, boxShadow: '0 15px 30px -5px rgba(29, 107, 243, 0.12)' }}
              style={{
                background: '#ffffff',
                borderRadius: '1.25rem',
                padding: '2.25rem 1.5rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '1.25rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {domain.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>
                {domain.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Tailored Course Segmentation Component (Under Domain Expertise) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '3rem' }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '0.4rem',
              letterSpacing: '-0.01em',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Tailored <span style={{ color: '#1d6bf3' }}>Course Segmentation</span>
          </h2>

          <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#475569' }}>
            Explore <span style={{ color: '#1d6bf3' }}>Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </motion.div>

        {/* 4 Segmentation Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
          {[
            {
              title: 'Program Specific',
              desc: 'Certificate, Executive, Post Graduate Certificate',
              img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Industry Specific',
              desc: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
              img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Topic Specific',
              desc: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
              img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
            },
            {
              title: 'Level Specific',
              desc: 'Senior Leadership, Mid-Career Professionals, Freshers',
              img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'
            }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 18px 35px -5px rgba(29, 107, 243, 0.15)' }}
              style={{
                background: '#ffffff',
                borderRadius: '1.25rem',
                border: '1px solid #e2e8f0',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ height: '185px', overflow: 'hidden' }}>
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              <div style={{ padding: '1.5rem 1.25rem 1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1d6bf3', marginBottom: '0.65rem' }}>
                  {card.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5, fontWeight: 500, maxWidth: '240px' }}>
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Who Should Join? Strategic Skill Enhancement Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            marginTop: '5rem',
            background: 'linear-gradient(135deg, #1d6bf3 0%, #1557c0 100%)',
            borderRadius: '1.75rem',
            padding: '3.5rem 3.5rem 0',
            color: '#ffffff',
            boxShadow: '0 20px 40px -10px rgba(29, 107, 243, 0.3)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '3rem',
            alignItems: 'flex-start'
          }}
          className="strategic-enhancement-card"
        >
          {/* Left Column: Title & Human Image */}
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ paddingBottom: '2rem' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgba(255, 255, 255, 0.9)', display: 'block', marginBottom: '0.65rem' }}>
                Who Should Join?
              </span>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Strategic Skill Enhancement
              </h2>
            </div>

            {/* Human Professionals Image at bottom left */}
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <img
                src={humanImg}
                alt="Who Should Join Strategic Skill Enhancement"
                style={{
                  maxHeight: '320px',
                  width: 'auto',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Target Audience */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2.5rem 2rem',
              paddingBottom: '3.5rem',
              paddingTop: '0.5rem'
            }}
            className="target-audience-grid"
          >
            {/* Tech Professionals */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                <MonitorCheck size={28} strokeWidth={2} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                Tech Professionals
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
                Enhance expertise, embrace tech, drive innovation.
              </p>
            </div>

            {/* Non-Tech Professionals */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                <MonitorX size={28} strokeWidth={2} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                Non-Tech Professionals
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
                Adapt digitally, collaborate in tech environments.
              </p>
            </div>

            {/* Emerging Professionals */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                <GraduationCap size={28} strokeWidth={2} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                Emerging Professionals
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
                Develop powerful skills for rapid career growth.
              </p>
            </div>

            {/* Senior Professionals */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', background: 'rgba(255, 255, 255, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                <Briefcase size={28} strokeWidth={2} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                Senior Professionals
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
                Strengthen leadership, enhance strategic decisions.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};




