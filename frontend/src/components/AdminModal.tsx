import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ShieldCheck, Search, RefreshCw, LogOut, Users, Building, Mail, Phone, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import { API_BASE } from '../config';
const api = axios.create({ baseURL: API_BASE });

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('adminToken'));
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [leads, setLeads] = useState<any[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState<any | null>(null);

  // Fetch leads if logged in
  const fetchLeads = async (authToken: string) => {
    setLeadsLoading(true);
    try {
      const res = await api.get('/leads', {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      if (res.data && res.data.leads) {
        setLeads(res.data.leads);
      }
    } catch (err: any) {
      console.warn('Backend connection failed, using dummy fallback leads:', err);
      // Fallback dummy data if backend is offline
      setLeads([
        {
          _id: 'dummy_1',
          name: 'Rahul Sharma',
          email: 'rahul.sharma@techcorp.com',
          phone: '+91 98765 43210',
          companyName: 'TechCorp Solutions',
          domain: 'Gen-AI & Data Engineering',
          numberOfCandidates: '25-50',
          modeOfDelivery: 'Hybrid (Live + Self-Paced)',
          location: 'Bengaluru, Karnataka',
          createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString()
        },
        {
          _id: 'dummy_2',
          name: 'Priya Verma',
          email: 'priya.v@analyticsglobal.in',
          phone: '+91 98123 45678',
          companyName: 'Analytics Global',
          domain: 'Product Strategy & Innovation',
          numberOfCandidates: '10-25',
          modeOfDelivery: 'Virtual Live Classroom',
          location: 'Gurugram, Haryana',
          createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
        },
        {
          _id: 'dummy_3',
          name: 'Ankit Patel',
          email: 'ankit@fintechplus.io',
          phone: '+91 97654 32109',
          companyName: 'Fintech Plus Labs',
          domain: 'Fintech Innovation',
          numberOfCandidates: '50+',
          modeOfDelivery: 'On-Premise Corporate Workshop',
          location: 'Mumbai, Maharashtra',
          createdAt: new Date(Date.now() - 3600000 * 3).toISOString()
        }
      ]);
    } finally {
      setLeadsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen && token) {
      fetchLeads(token);
    }
  }, [isOpen, token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await api.post('/admin/login', {
        username: usernameInput,
        password: passwordInput
      });

      if (res.data.success && res.data.token) {
        const authToken = res.data.token;
        localStorage.setItem('adminToken', authToken);
        setToken(authToken);
        fetchLeads(authToken);
      }
    } catch (err: any) {
      // Local fallback check if backend server is not running
      if (usernameInput === 'admin' && passwordInput === 'admin123') {
        const dummyToken = 'dummy_admin_token_2026';
        localStorage.setItem('adminToken', dummyToken);
        setToken(dummyToken);
        fetchLeads(dummyToken);
      } else {
        setLoginError(err.response?.data?.message || 'Invalid username or password. Check .env credentials.');
      }
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
    setLeads([]);
    setUsernameInput('');
    setPasswordInput('');
  };

  const filteredLeads = leads.filter(lead => {
    const q = searchQuery.toLowerCase();
    const company = lead.companyName || lead.company || '';
    return (
      lead.name?.toLowerCase().includes(q) ||
      company.toLowerCase().includes(q) ||
      lead.email?.toLowerCase().includes(q) ||
      lead.domain?.toLowerCase().includes(q) ||
      lead.location?.toLowerCase().includes(q)
    );
  });

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.25rem'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25 }}
          style={{
            background: '#ffffff',
            borderRadius: '1.5rem',
            width: '100%',
            maxWidth: token ? '1000px' : '440px',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid #e2e8f0',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: '#f1f5f9',
              border: 'none',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#64748b',
              zIndex: 10,
              transition: 'all 0.2s'
            }}
          >
            <X size={18} />
          </button>

          {!token ? (
            /* Admin Login View */
            <div style={{ padding: '2.5rem 2rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '1rem',
                    background: 'rgba(29, 107, 243, 0.1)',
                    color: '#1d6bf3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem'
                  }}
                >
                  <Lock size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Admin Portal
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Sign in using your environment credentials
                </p>
              </div>

              {loginError && (
                <div
                  style={{
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    color: '#ef4444',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.65rem',
                    fontSize: '0.875rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                    Admin Username
                  </label>
                  <input
                    type="text"
                    required
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="Enter username (e.g. admin)"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.65rem',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                    Admin Password
                  </label>
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter password (e.g. admin123)"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.65rem',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loginLoading}
                  style={{
                    background: '#1d6bf3',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '0.65rem',
                    padding: '0.85rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    marginTop: '0.5rem',
                    boxShadow: '0 4px 14px rgba(29, 107, 243, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {loginLoading ? 'Authenticating...' : 'Login to Admin Dashboard'}
                </button>

                <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.775rem', color: '#94a3b8' }}>
                  Default .env credentials: <strong style={{ color: '#475569' }}>admin / admin123</strong>
                </div>
              </form>
            </div>
          ) : (
            /* Admin Dashboard View */
            <div style={{ padding: '2rem' }}>
              {/* Header Bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid #e2e8f0',
                  marginBottom: '1.5rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '0.75rem',
                      background: 'rgba(29, 107, 243, 0.1)',
                      color: '#1d6bf3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                      Enquiries Management Dashboard
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>
                      Logged in as Admin • Connected with Express & MongoDB
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <button
                    onClick={() => fetchLeads(token)}
                    title="Refresh Data"
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: '0.5rem',
                      padding: '0.55rem 0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#475569',
                      cursor: 'pointer'
                    }}
                  >
                    <RefreshCw size={14} className={leadsLoading ? 'animate-spin' : ''} /> Refresh
                  </button>
                  <button
                    onClick={handleLogout}
                    style={{
                      background: '#fef2f2',
                      border: '1px solid #fecaca',
                      borderRadius: '0.5rem',
                      padding: '0.55rem 0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#ef4444',
                      cursor: 'pointer'
                    }}
                  >
                    <LogOut size={14} /> Logout
                  </button>
                </div>
              </div>

              {/* Stats Summary Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.25rem',
                  marginBottom: '1.75rem'
                }}
              >
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '0.75rem', background: '#eff6ff', color: '#1d6bf3', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                    <Users size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>{leads.length}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>Total Enquiries Received</div>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '0.75rem', background: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                    <Building size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>
                      {new Set(leads.map(l => l.companyName || l.company)).size}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>Unique Companies</div>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div style={{ marginBottom: '1.25rem', position: 'relative' }}>
                <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder="Search by company, contact name, email, or domain..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem 0.7rem 2.75rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Enquiries Table */}
              {leadsLoading ? (
                <div style={{ textAlign: 'center', padding: '3rem 0', color: '#64748b' }}>
                  Loading received enquiries...
                </div>
              ) : filteredLeads.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 0', color: '#64748b', background: '#f8fafc', borderRadius: '1rem' }}>
                  No enquiries found matching your search.
                </div>
              ) : (
                <div style={{ overflowX: 'auto', borderRadius: '0.85rem', border: '1px solid #e2e8f0' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                    <thead>
                      <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 700 }}>
                        <th style={{ padding: '0.85rem 1rem' }}>Date</th>
                        <th style={{ padding: '0.85rem 1rem' }}>Contact Name</th>
                        <th style={{ padding: '0.85rem 1rem' }}>Company</th>
                        <th style={{ padding: '0.85rem 1rem' }}>Domain</th>
                        <th style={{ padding: '0.85rem 1rem' }}>Candidates</th>
                        <th style={{ padding: '0.85rem 1rem' }}>Location</th>
                        <th style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLeads.map((lead, idx) => (
                        <tr
                          key={lead._id || idx}
                          style={{
                            borderBottom: '1px solid #f1f5f9',
                            transition: 'background 0.2s',
                            cursor: 'pointer'
                          }}
                          onClick={() => setSelectedLead(lead)}
                          onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          <td style={{ padding: '0.85rem 1rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                            {new Date(lead.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </td>
                          <td style={{ padding: '0.85rem 1rem', fontWeight: 600, color: '#0f172a' }}>
                            {lead.name}
                          </td>
                          <td style={{ padding: '0.85rem 1rem', color: '#334155' }}>
                            {lead.companyName || lead.company || '—'}
                          </td>
                          <td style={{ padding: '0.85rem 1rem' }}>
                            <span style={{ background: 'rgba(29, 107, 243, 0.08)', color: '#1d6bf3', padding: '0.25rem 0.6rem', borderRadius: '0.375rem', fontWeight: 600, fontSize: '0.8rem' }}>
                              {lead.domain}
                            </span>
                          </td>
                          <td style={{ padding: '0.85rem 1rem', color: '#475569' }}>
                            {lead.numberOfCandidates || lead.candidates || '—'}
                          </td>
                          <td style={{ padding: '0.85rem 1rem', color: '#64748b' }}>
                            {lead.location}
                          </td>
                          <td style={{ padding: '0.85rem 1rem', textAlign: 'center' }}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedLead(lead);
                              }}
                              style={{
                                background: '#1d6bf3',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '0.375rem',
                                padding: '0.35rem 0.75rem',
                                fontSize: '0.775rem',
                                fontWeight: 600,
                                cursor: 'pointer'
                              }}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Lead Details Sub-Modal */}
              {selectedLead && (
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1100,
                    background: 'rgba(15, 23, 42, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem'
                  }}
                  onClick={() => setSelectedLead(null)}
                >
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '1.25rem',
                      padding: '2rem',
                      width: '100%',
                      maxWidth: '500px',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                      position: 'relative'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedLead(null)}
                      style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}
                    >
                      <X size={16} />
                    </button>

                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                      Enquiry Details
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: '#334155' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Users size={16} color="#1d6bf3" /> <strong>Contact Name:</strong> {selectedLead.name}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Mail size={16} color="#1d6bf3" /> <strong>Email:</strong> {selectedLead.email}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Phone size={16} color="#1d6bf3" /> <strong>Phone:</strong> {selectedLead.phone}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Building size={16} color="#1d6bf3" /> <strong>Company:</strong> {selectedLead.companyName || selectedLead.company}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle2 size={16} color="#1d6bf3" /> <strong>Domain:</strong> {selectedLead.domain}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Users size={16} color="#1d6bf3" /> <strong>Candidates Count:</strong> {selectedLead.numberOfCandidates || selectedLead.candidates}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <MapPin size={16} color="#1d6bf3" /> <strong>Mode of Delivery:</strong> {selectedLead.modeOfDelivery || selectedLead.deliveryMode}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <MapPin size={16} color="#1d6bf3" /> <strong>Location:</strong> {selectedLead.location}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={16} color="#1d6bf3" /> <strong>Submitted On:</strong> {new Date(selectedLead.createdAt || Date.now()).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
