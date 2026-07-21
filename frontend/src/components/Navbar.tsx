import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenEnquire: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'stats', label: 'Stats' },
    { id: 'clients', label: 'Clients' },
    { id: 'edge', label: 'Accredian Edge' },
    { id: 'cat', label: 'CAT' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'testimonials', label: 'Testimonials' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.06)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4.75rem'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
        >
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.65rem', color: '#1d6bf3', lineHeight: 1, letterSpacing: '-0.02em' }}>
            accredian
          </span>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#64748b', letterSpacing: '0.02em', marginTop: '3px' }}>
            credentials that matter
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }} className="hide-mobile">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                style={{
                  position: 'relative',
                  padding: '0.5rem 0',
                  fontSize: '0.925rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#1d6bf3' : '#334155',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  borderBottom: isActive ? '2.5px solid #1d6bf3' : '2.5px solid transparent'
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="hide-desktop">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              border: '1px solid #cbd5e1',
              background: 'white',
              padding: '0.45rem',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#334155'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          className="hide-desktop"
          style={{
            background: 'white',
            borderTop: '1px solid #e2e8f0',
            padding: '1rem 1.5rem',
            boxShadow: 'var(--shadow-xl)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  style={{
                    padding: '0.65rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#1d6bf3' : '#334155',
                    background: isActive ? 'rgba(29, 107, 243, 0.08)' : 'transparent',
                    textDecoration: 'none'
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

