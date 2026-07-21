import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  id: string | number;
  category: string;
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqItems: FaqItem[];
  onOpenEnquire?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqItems, onOpenEnquire }) => {
  const defaultFaqs: FaqItem[] = [
    // About the Course
    {
      id: 1,
      category: 'About the Course',
      question: 'What types of corporate training programs does Accredian offer?',
      answer: 'Accredian offers specialized corporate upskilling in Data Science, Gen-AI, Product Management, Executive Leadership, and Digital Transformation tailored for high-performance teams.'
    },
    {
      id: 2,
      category: 'About the Course',
      question: 'What domain specializations are available?',
      answer: 'Our specializations include AI & Machine Learning, Data Analytics, Fintech, Supply Chain Operations, Product Strategy, and Strategic Executive Leadership.'
    },
    {
      id: 3,
      category: 'About the Course',
      question: 'Are certificates co-branded with university accreditation?',
      answer: 'Yes, graduates receive industry-recognized credentials co-branded by Accredian and premier academic & corporate learning partners.'
    },

    // About the Delivery
    {
      id: 4,
      category: 'About the Delivery',
      question: 'How are live training sessions conducted?',
      answer: 'Sessions are delivered via live interactive virtual classrooms, hands-on capstone labs, and expert-led weekend workshops with real-world case studies.'
    },
    {
      id: 5,
      category: 'About the Delivery',
      question: 'Can programs be customized for our company’s internal tools?',
      answer: 'Absolutely. We design custom-fit curricula aligned with your organization’s tech stack, proprietary datasets, and specific business goals.'
    },

    // Miscellaneous
    {
      id: 6,
      category: 'Miscellaneous',
      question: 'How do I refer my colleagues or organization?',
      answer: 'You can use the Refer & Earn option or click Enquire Now to submit your team requirements and unlock referral bonuses up to ₹15,000 per enrollment.'
    },
    {
      id: 7,
      category: 'Miscellaneous',
      question: 'What is the typical team size per batch?',
      answer: 'Batch sizes range from small executive cohorts of 10-15 leaders to enterprise-wide learning tracks for hundreds of professionals.'
    }
  ];

  const itemsToUse = faqItems && faqItems.length > 0 ? faqItems : defaultFaqs;
  const categories = ['About the Course', 'About the Delivery', 'Miscellaneous'];

  const [activeCategory, setActiveCategory] = useState<string>('About the Course');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredItems = itemsToUse.filter(
    item => item.category === activeCategory || (activeCategory === 'About the Course' && (!item.category || item.category === 'About the Course'))
  );

  return (
    <section id="faqs" data-section style={{ padding: '5rem 0', background: '#ffffff', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Section Header matching screenshot */}
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
            Frequently Asked <span style={{ color: '#1d6bf3' }}>Questions</span>
          </h2>
        </motion.div>

        {/* 2 Column Layout: Left Tabs & Right Accordion Questions */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '3rem',
            alignItems: 'flex-start',
            marginBottom: '3.5rem'
          }}
          className="faq-grid"
        >
          {/* Left Tabs List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(0);
                  }}
                  style={{
                    padding: '1.1rem 1.5rem',
                    borderRadius: '0.85rem',
                    border: isActive ? '1px solid transparent' : '1px solid #e2e8f0',
                    background: '#ffffff',
                    color: isActive ? '#1d6bf3' : '#64748b',
                    fontSize: '0.975rem',
                    fontWeight: isActive ? 700 : 600,
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 8px 24px rgba(29, 107, 243, 0.12)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Accordion Questions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.id || idx}
                  style={{
                    background: '#ffffff',
                    borderRadius: '0.85rem',
                    border: 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.1rem 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: 'none',
                      background: 'transparent',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '1.5rem'
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0f172a', lineHeight: 1.4 }}>
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: '#94a3b8', flexShrink: 0 }}
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
                            padding: '0 0 1.25rem',
                            color: '#475569',
                            fontSize: '0.95rem',
                            lineHeight: 1.6
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

        {/* Centered Enquire Now Button */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={onOpenEnquire}
            style={{
              background: '#1d6bf3',
              color: '#ffffff',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.85rem 2.5rem',
              fontSize: '1rem',
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

      </div>
    </section>
  );
};
