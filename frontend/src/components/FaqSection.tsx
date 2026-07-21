import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string | number;
  category: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqItems: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqItems }) => {
  const defaultFaqs: FaqItem[] = [
    {
      id: 1,
      category: 'About the Course',
      question: 'Do I need prior experience in coding to join the Data Science & AI program?',
      answer: 'No prior programming experience is required. Our foundation modules start with basic python concepts and math prerequisites before moving into machine learning algorithms.'
    },
    {
      id: 2,
      category: 'About the Course',
      question: 'How are the live sessions conducted?',
      answer: 'Sessions are conducted online over weekends (Saturdays and Sundays) with live Q&A, interactive breakout rooms, and hands-on coding work.'
    },
    {
      id: 3,
      category: 'Eligibility',
      question: 'What are the minimum eligibility criteria?',
      answer: 'Applicants must hold a Bachelor’s degree in any discipline with a minimum of 50% marks from a recognized university.'
    },
    {
      id: 4,
      category: 'Certification',
      question: 'Will I receive an accredited certificate upon completion?',
      answer: 'Yes! Graduates receive an industry-recognized Post Graduate Certificate co-branded by Accredian and partner academic institutions.'
    },
    {
      id: 5,
      category: 'Referral',
      question: 'How does the Refer & Earn program work?',
      answer: 'When your referred friend successfully enrolls into any PG program, you earn up to ₹15,000 cash reward directly credited to your bank account.'
    }
  ];

  const itemsToUse = faqItems && faqItems.length > 0 ? faqItems : defaultFaqs;

  const categories = Array.from(new Set(itemsToUse.map(i => i.category || 'About the Course')));
  if (categories.length === 0) categories.push('About the Course');

  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredItems = itemsToUse.filter(item => item.category === activeCategory);

  return (
    <section id="faqs" data-section style={{ padding: '5rem 0', background: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge-pill" style={{ marginBottom: '0.75rem' }}>
            <HelpCircle size={14} /> Got Questions?
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
            Everything you need to know about our programs, eligibility, and referral rewards.
          </p>

          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginTop: '1.75rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#2563eb' : '#cbd5e1',
                  background: activeCategory === cat ? '#2563eb' : '#ffffff',
                  color: activeCategory === cat ? '#ffffff' : '#475569',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id || idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '1rem',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: 'none',
                    background: 'transparent',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '1rem'
                  }}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: '#2563eb', flexShrink: 0 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div
                        style={{
                          padding: '0 1.5rem 1.25rem',
                          color: '#475569',
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                          borderTop: '1px solid #f1f5f9',
                          paddingTop: '1rem'
                        }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
