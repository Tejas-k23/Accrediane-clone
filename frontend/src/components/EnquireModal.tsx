import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ChevronDown } from 'lucide-react';
import axios from 'axios';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || (import.meta.env.PROD ? '/api' : 'http://localhost:5000/api');

export const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    domain: '',
    candidates: '',
    deliveryMode: '',
    location: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API_BASE}/leads`, formData);
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      domain: '',
      candidates: '',
      deliveryMode: '',
      location: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={resetAndClose} style={{ zIndex: 1000 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              width: '100%',
              maxWidth: '860px',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -12px rgba(15, 23, 42, 0.35)',
              background: '#ffffff',
              display: 'grid',
              gridTemplateColumns: '0.9fr 1.1fr'
            }}
            className="enquire-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side Image */}
            <div style={{ height: '100%', minHeight: '520px', position: 'relative', overflow: 'hidden' }} className="hide-mobile">
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp"
                alt="Corporate Business Executives"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Right Side Form Content */}
            <div style={{ padding: '2rem 2.25rem', position: 'relative', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <button
                onClick={resetAndClose}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  border: 'none',
                  background: 'transparent',
                  color: '#64748b',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  transition: 'color 0.2s'
                }}
              >
                <X size={22} />
              </button>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle size={64} color="#22c55e" style={{ margin: '0 auto 1rem' }} />
                  </motion.div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
                    Enquiry Submitted!
                  </h3>
                  <p style={{ color: '#64748b', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                    Thank you for reaching out, <strong>{formData.name || 'Partner'}</strong>. Our team will contact you shortly.
                  </p>
                  <button className="btn-primary" style={{ width: '100%', background: '#1d6bf3' }} onClick={resetAndClose}>
                    Done
                  </button>
                </div>
              ) : (
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                    Enquire Now
                  </h3>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {/* Enter Name */}
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.25rem',
                          border: 'none',
                          borderBottom: '1px solid #cbd5e1',
                          outline: 'none',
                          fontSize: '0.925rem',
                          color: '#0f172a'
                        }}
                      />
                    </div>

                    {/* Enter Email */}
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.25rem',
                          border: 'none',
                          borderBottom: '1px solid #cbd5e1',
                          outline: 'none',
                          fontSize: '0.925rem',
                          color: '#0f172a'
                        }}
                      />
                    </div>

                    {/* Phone Number with +91 badge */}
                    <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #cbd5e1', padding: '0.35rem 0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', paddingRight: '0.75rem', borderRight: '1px solid #e2e8f0' }}>
                        <span style={{ fontSize: '1.1rem' }}>🇮🇳</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>+91</span>
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Enter Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          flex: 1,
                          padding: '0.4rem 0.75rem',
                          border: 'none',
                          outline: 'none',
                          fontSize: '0.925rem',
                          color: '#0f172a'
                        }}
                      />
                    </div>

                    {/* Enter Company Name */}
                    <div>
                      <input
                        type="text"
                        placeholder="Enter company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.25rem',
                          border: 'none',
                          borderBottom: '1px solid #cbd5e1',
                          outline: 'none',
                          fontSize: '0.925rem',
                          color: '#0f172a'
                        }}
                      />
                    </div>

                    {/* Select Domain */}
                    <div style={{ position: 'relative' }}>
                      <select
                        value={formData.domain}
                        onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.25rem',
                          border: 'none',
                          borderBottom: '1px solid #cbd5e1',
                          outline: 'none',
                          fontSize: '0.925rem',
                          color: formData.domain ? '#0f172a' : '#94a3b8',
                          background: 'transparent',
                          appearance: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="" disabled hidden>Select Domain</option>
                        <option value="Data Science & AI">Data Science & AI</option>
                        <option value="Product Management">Product Management</option>
                        <option value="Executive Leadership">Executive Leadership</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="Fintech & Analytics">Fintech & Analytics</option>
                      </select>
                      <ChevronDown size={18} style={{ position: 'absolute', right: '0.25rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' }} />
                    </div>

                    {/* Enter No. of candidates */}
                    <div>
                      <input
                        type="text"
                        placeholder="Enter No. of candidates"
                        value={formData.candidates}
                        onChange={(e) => setFormData({ ...formData, candidates: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.25rem',
                          border: 'none',
                          borderBottom: '1px solid #cbd5e1',
                          outline: 'none',
                          fontSize: '0.925rem',
                          color: '#0f172a'
                        }}
                      />
                    </div>

                    {/* Select Mode of Delivery * */}
                    <div style={{ position: 'relative' }}>
                      <select
                        required
                        value={formData.deliveryMode}
                        onChange={(e) => setFormData({ ...formData, deliveryMode: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.25rem',
                          border: 'none',
                          borderBottom: '1px solid #cbd5e1',
                          outline: 'none',
                          fontSize: '0.925rem',
                          color: formData.deliveryMode ? '#0f172a' : '#94a3b8',
                          background: 'transparent',
                          appearance: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="" disabled hidden>Select Mode of Delivery *</option>
                        <option value="Live Virtual Online">Live Virtual Online</option>
                        <option value="On-Premise Corporate">On-Premise Corporate</option>
                        <option value="Hybrid Custom Track">Hybrid Custom Track</option>
                      </select>
                      <ChevronDown size={18} style={{ position: 'absolute', right: '0.25rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' }} />
                    </div>

                    {/* Location */}
                    <div>
                      <input
                        type="text"
                        placeholder="Eg: Gurgaon, Delhi, India"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.25rem',
                          border: 'none',
                          borderBottom: '1px solid #cbd5e1',
                          outline: 'none',
                          fontSize: '0.925rem',
                          color: '#0f172a'
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        width: '100%',
                        marginTop: '1.25rem',
                        padding: '0.8rem',
                        background: '#1d6bf3',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontSize: '0.975rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(29, 107, 243, 0.35)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {loading ? 'Submitting...' : 'Submit'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

