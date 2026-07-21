import React from 'react';

interface FooterProps {
  onOpenEnquire?: () => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquire, onOpenAdmin }) => {
  return (
    <footer style={{ background: '#ffffff', color: '#475569', paddingTop: '3.5rem', paddingBottom: '2.5rem' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Main Footer Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '2.5rem'
          }}
        >
          {/* Left Side: Brand Logo & Social Icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Logo */}
            <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.65rem' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAz1BMVEVHcEwFVpwDZZ8HZJwBZqIEZaEUaJkIYpsNssoFrdMLstoOOW0POXAJaZ4DZ54IaJwMrdUCrtcJqNcMOm8LO3EOPGoDZJwnXGcGp9IFbKPA5GYGrdoLOW3b/WvE720GpNwGr9oFDWLA6m4NO28HrNgLNW4JW5gRJWEMI2XL7nHP9GgFMnAFq9YEIGUDqdgBaJ/E5nPe71YBZ6IPOGEBZ6QJrtQPO3DG73IONmiXyIbB7W9Kv78ErdUOOnIJS4O85n7g+1kFhrnA7mq11G256XfYa13XAAAARXRSTlMAPJ4ki/8ybwq3HUuhE9pdFf8/ef40ugSMR0frZy2dKnIl+evjW1MKHSZij50+//eSE8IR7lu/edi0uK3Jr5tQC8XSJVYbAJz5AAAB7UlEQVR4AX3SBXbqQABA0Qdk4p4JaSAUJ8Fpceqy/y19gVOXu4bLJ6VyhV8pQq1oFd0w+cqyHdehgic0Pwj5IpIyriZnAU6aUIOIV2bdjCMcsqhx3mzRrgRhp9Hu8srvmVF/ILy8GI6KcVcy0RttCt7LqZRVZAaZtBgIVU4nE154oi9rNVozsCIAb54yOjvjhZPm/dGCcAJWxslFh0EJTvIIb8BJwonEXBIDmKE1XooVR4nuc7LWNdXaABgB59tSCQB9ZwRifwH4QQu6EiDx88MCwjWURJyGpcVVEzD7trWZArDc5G247rEOVABmLYA4y3OlCnAjkZscSCcc5fMKTHPGN6kGFHKMLYHkJuNoWQakTY2jHG6iDEAonOxiSFA7zcAHmJezAiDRbgFI1nWAaDw0r3UAJ55uhwBjeQewPDOAQt6UBEdd2T7cTXQg6RTLsDEQAEnW1T2ONjfQDJrAPeJhtn/kpKCqAJDlZcGrkCMnDwNTXHJSFhS8s8woi/Rax+GVXPKKWOaD6tM9H9KhiQFkQNOAbAydZ1759SbpZQVLSotwlhD3Ez4YOPejTLKJYrZb0gq7rpryjhhsF1O7kpBNn7YIlziuunz0BGJFFI/HaB7faPZ0RcNRMtld8p1m3WcdePOiH+f8RG/x2V/VDy8B6rMJywAAAABJRU5ErkJggg=="
                alt="Accredian logo icon"
                style={{ width: '28px', height: '28px', objectFit: 'contain' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.65rem', fontWeight: 800, color: '#1d6bf3', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
                  accredian
                </span>
                <span style={{ display: 'block', fontSize: '0.65rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.04em', marginTop: '-4px' }}>
                  credentials that matter
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem', color: '#334155' }}>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#0f172a', transition: 'opacity 0.2s' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.73 5.6c1.07 0 2.19.19 2.19.19v2.41h-1.24c-1.23 0-1.62.77-1.62 1.56V12h2.72l-.43 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#0f172a', transition: 'opacity 0.2s' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: '#0f172a', transition: 'opacity 0.2s' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#0f172a', transition: 'opacity 0.2s' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ color: '#0f172a', transition: 'opacity 0.2s' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Enquire Now Button & Advisor Subtext */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
            <button
              onClick={onOpenEnquire}
              style={{
                background: '#1d6bf3',
                color: '#ffffff',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.75rem 1.85rem',
                fontSize: '0.95rem',
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
            <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>
              Speak with our Advisor
            </span>
          </div>
        </div>

        {/* Top Divider Line */}
        <div style={{ borderTop: '1px solid #cbd5e1', width: '100%', margin: '0 0 2rem 0' }} />

        {/* Middle Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            paddingBottom: '2.25rem'
          }}
        >
          {/* Accredian Column */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.85rem' }}>
              Accredian
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.925rem', color: '#475569', fontWeight: 500 }}>
              <li><a href="#edge" style={{ color: '#475569', textDecoration: 'none' }}>About</a></li>
              <li><a href="#faqs" style={{ color: '#475569', textDecoration: 'none' }}>Blog</a></li>
              <li><a href="#edge" style={{ color: '#475569', textDecoration: 'none' }}>Why Accredian</a></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.85rem' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.925rem', color: '#475569', lineHeight: 1.55, fontWeight: 500 }}>
              <p>
                Email us: <a href="mailto:enterprise@accredian.com" style={{ color: '#1d6bf3', textDecoration: 'none', fontWeight: 600 }}>enterprise@accredian.com</a>
              </p>
              <p style={{ maxWidth: '440px' }}>
                <span style={{ fontWeight: 600, color: '#334155' }}>Office Address:</span> 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div style={{ borderTop: '1px solid #cbd5e1', width: '100%', marginBottom: '1.75rem' }} />

        {/* Bottom Internship Task Credit & Admin Link */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem', color: '#475569', fontWeight: 500 }}>
          <div>
            © 2026 Developed by Tejas Kumbharkar as an Internship Task
          </div>

          <button
            onClick={onOpenAdmin}
            style={{
              background: '#f1f5f9',
              border: '1px solid #cbd5e1',
              color: '#334155',
              padding: '0.35rem 0.85rem',
              borderRadius: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e2e8f0';
              e.currentTarget.style.color = '#1d6bf3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f1f5f9';
              e.currentTarget.style.color = '#334155';
            }}
          >
            <span>Admin Portal</span> 🔒
          </button>
        </div>

      </div>
    </footer>
  );
};
