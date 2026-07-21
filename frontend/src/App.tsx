import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Circle, Menu, X } from 'lucide-react';
import { clients, courseCards, domains, features, frameworkSteps, highlights, stats, steps } from './data/content';

const api = axios.create({ baseURL: 'http://localhost:5000/api' });

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqItems, setFaqItems] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [faqCategory, setFaqCategory] = useState('About the Course');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    api.get('/faq').then((res) => setFaqItems(res.data.items || [])).catch(() => setFaqItems([]));
    api.get('/testimonials').then((res) => setTestimonials(res.data.items || [])).catch(() => setTestimonials([]));
  }, []);

  const filteredFaq = faqItems.filter((item) => item.category === faqCategory);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % Math.max(testimonials.length, 1));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [testimonials.length]);

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

  return (
    <div style={{ background: '#f8fbff', color: '#0f172a' }}>
      <header className="container" style={{ position: 'sticky', top: 0, zIndex: 50, paddingTop: '1rem' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.2rem', borderRadius: '999px', background: 'rgba(255,255,255,0.9)', boxShadow: '0 10px 35px rgba(15,23,42,0.08)', backdropFilter: 'blur(15px)' }}>
          <a href="#home" style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0f172a' }}>Accredian Studio</a>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="hide-mobile">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} style={{ color: activeSection === item.id ? '#2563eb' : '#475569', fontWeight: activeSection === item.id ? 700 : 500 }}>
                  {item.label}
                </a>
              ))}
            </div>
            <button style={{ border: 'none', background: '#2563eb', color: 'white', padding: '0.8rem 1rem', borderRadius: '999px', cursor: 'pointer' }} onClick={() => setMobileOpen(false)}>Enquire Now</button>
            <button style={{ border: '1px solid #cbd5e1', background: 'white', padding: '0.65rem', borderRadius: '999px', cursor: 'pointer' }} onClick={() => setMobileOpen((prev) => !prev)} className="hide-desktop">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {mobileOpen && (
          <div style={{ marginTop: '0.75rem', background: 'white', borderRadius: '1.25rem', padding: '1rem', boxShadow: '0 15px 40px rgba(15,23,42,0.1)' }} className="hide-desktop">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} style={{ display: 'block', padding: '0.7rem 0', color: '#0f172a', fontWeight: 600 }} onClick={() => setMobileOpen(false)}>{item.label}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" data-section style={{ padding: '4rem 0 2rem' }}>
          <div className="container" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p style={{ color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>Enterprise learning, designed for momentum</p>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05, margin: '0.75rem 0' }}>Turn strategic ambition into practical capability.</h1>
              <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '580px' }}>A modern learning experience for organizations that need sharper execution, deeper alignment, and measurable growth across teams.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1.25rem 0' }}>
                {['Outcome-driven programs', 'Live and hybrid delivery', 'Expert-led facilitation'].map((value) => (
                  <span key={value} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', border: '1px solid #bfdbfe', padding: '0.6rem 0.85rem', borderRadius: '999px', background: 'white' }}>
                    <Check size={16} color="#2563eb" /> {value}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#cat" style={{ background: '#2563eb', color: 'white', padding: '0.95rem 1.2rem', borderRadius: '999px', fontWeight: 700 }}>Explore the framework</a>
                <a href="#faqs" style={{ background: 'white', color: '#0f172a', padding: '0.95rem 1.2rem', borderRadius: '999px', border: '1px solid #cbd5e1', fontWeight: 700 }}>See common questions</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ borderRadius: '2rem', background: 'linear-gradient(135deg, #dbeafe, #eff6ff)', padding: '1rem' }}>
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80" alt="Professional workshop session" style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: '1.5rem' }} />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="clients" data-section style={{ padding: '1rem 0 3rem' }}>
          <div className="container section-card" style={{ padding: '1.4rem 1.5rem' }}>
            <p style={{ textAlign: 'center', color: '#64748b', fontWeight: 600, marginBottom: '1rem' }}>Trusted by teams building momentum across the region</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.75rem' }}>
              {clients.map((client) => (
                <div key={client} style={{ textAlign: 'center', padding: '0.9rem', borderRadius: '999px', background: '#f8fbff', border: '1px solid #e2e8f0', fontWeight: 700, color: '#334155' }}>{client}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="stats" data-section style={{ padding: '1rem 0 3rem' }}>
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', borderRadius: '2rem', background: 'white', boxShadow: '0 20px 45px rgba(15,23,42,0.08)' }}>
              {stats.map((stat, index) => (
                <div key={stat.label} style={{ padding: '2rem', textAlign: 'center', borderRight: index < stats.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#2563eb' }}>{stat.value}</div>
                  <div style={{ color: '#64748b', marginTop: '0.35rem' }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="edge" data-section style={{ padding: '1rem 0 3rem' }}>
          <div className="container section-card" style={{ overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', padding: '0' }}>
            <div style={{ padding: '2rem', background: 'linear-gradient(135deg, #2563eb, #3b82f6)' , color: 'white' }}>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', opacity: 0.8 }}>Strategic training that keeps pace</p>
              <h2 style={{ fontSize: '2rem', margin: '0.6rem 0' }}>A modern learning system for ambitious teams.</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>We blend guided practice, clear frameworks, and tailored support to make growth more visible and easier to sustain.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem', padding: '2rem', background: '#f8fbff' }}>
              {features.map((feature) => (
                <div key={feature.title} style={{ background: 'white', borderRadius: '1rem', padding: '1rem', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ margin: '0 0 0.35rem', fontSize: '1rem' }}>{feature.title}</h3>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.94rem' }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cat" data-section style={{ padding: '1rem 0 3rem' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.8rem', margin: 0 }}>The CAT framework</h2>
              <p style={{ color: '#64748b', margin: 0 }}>A simple pattern for turning insight into action.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {frameworkSteps.map((step, index) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} style={{ background: 'white', borderRadius: '1.5rem', padding: '1.4rem', boxShadow: '0 12px 30px rgba(15,23,42,0.08)' }}>
                  <div style={{ width: '2.8rem', height: '2.8rem', borderRadius: '999px', background: '#dbeafe', display: 'grid', placeItems: 'center', color: '#2563eb', fontWeight: 800 }}>{index + 1}</div>
                  <h3 style={{ margin: '0.9rem 0 0.4rem' }}>{step.title}</h3>
                  <p style={{ margin: 0, color: '#64748b' }}>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" data-section style={{ padding: '1rem 0 3rem' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>How we deliver results</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {steps.map((step, index) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="section-card" style={{ padding: '1.5rem' }}>
                  <div style={{ fontWeight: 800, color: '#2563eb', fontSize: '0.95rem' }}>0{index + 1}</div>
                  <h3 style={{ margin: '0.7rem 0 0.4rem' }}>{step.title}</h3>
                  <p style={{ margin: 0, color: '#64748b' }}>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '1rem 0 3rem' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>Program pathways</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem' }}>
              {courseCards.map((card) => (
                <motion.div key={card.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ borderRadius: '1.3rem', overflow: 'hidden', background: 'white', boxShadow: '0 15px 35px rgba(15,23,42,0.08)' }}>
                  <img src={card.image} alt={card.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                  <div style={{ padding: '1rem' }}>
                    <h3 style={{ margin: '0 0 0.35rem' }}>{card.title}</h3>
                    <p style={{ margin: 0, color: '#64748b' }}>{card.examples}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '1rem 0 3rem' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>Domain expertise</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.9rem' }}>
              {domains.map((domain) => (
                <div key={domain} style={{ background: 'white', borderRadius: '1rem', padding: '1rem', border: '1px solid #e2e8f0', textAlign: 'center', fontWeight: 700 }}>{domain}</div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '1rem 0 3rem' }}>
          <div className="container section-card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>Key aspects of the experience</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
              {highlights.map((highlight) => (
                <div key={highlight.title} style={{ borderRadius: '1rem', padding: '1rem', background: '#f8fbff', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '2.4rem', height: '2.4rem', borderRadius: '999px', background: '#dbeafe', display: 'grid', placeItems: 'center', color: '#2563eb', marginBottom: '0.7rem' }}><Circle size={14} /></div>
                  <h3 style={{ margin: '0 0 0.35rem', fontSize: '1rem' }}>{highlight.title}</h3>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" data-section style={{ padding: '1rem 0 3rem' }}>
          <div className="container section-card" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>Frequently asked questions</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.5rem' }}>
              <div>
                {['About the Course', 'About the Delivery', 'Misc'].map((category) => (
                  <button key={category} onClick={() => setFaqCategory(category)} style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', padding: '0.8rem 1rem', marginBottom: '0.6rem', borderRadius: '0.9rem', background: faqCategory === category ? '#2563eb' : '#f8fbff', color: faqCategory === category ? 'white' : '#0f172a', cursor: 'pointer' }}>{category}</button>
                ))}
              </div>
              <div>
                {filteredFaq.length > 0 ? filteredFaq.map((item) => (
                  <div key={item.id} style={{ padding: '1rem 0', borderBottom: '1px solid #e2e8f0' }}>
                    <h3 style={{ margin: '0 0 0.3rem' }}>{item.question}</h3>
                    <p style={{ margin: 0, color: '#64748b' }}>{item.answer}</p>
                  </div>
                )) : <p>No FAQ items available yet.</p>}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" data-section style={{ padding: '1rem 0 3rem' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>What partners say</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {testimonials.length > 0 ? testimonials.slice(testimonialIndex, testimonialIndex + 2).map((item) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-card" style={{ padding: '1.4rem' }}>
                  <div style={{ fontWeight: 800, color: '#2563eb', marginBottom: '0.7rem' }}>{item.company}</div>
                  <p style={{ color: '#334155', margin: '0 0 0.8rem' }}>“{item.quote}”</p>
                  <p style={{ margin: 0, color: '#64748b' }}>{item.role}</p>
                </motion.div>
              )) : <p>No testimonials available yet.</p>}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              <button onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % Math.max(testimonials.length, 1))} style={{ border: '1px solid #cbd5e1', background: 'white', padding: '0.6rem', borderRadius: '999px' }}><ChevronLeft size={18} /></button>
              <button onClick={() => setTestimonialIndex((prev) => (prev + 1) % Math.max(testimonials.length, 1))} style={{ border: '1px solid #cbd5e1', background: 'white', padding: '0.6rem', borderRadius: '999px' }}><ChevronRight size={18} /></button>
            </div>
          </div>
        </section>

        <section style={{ padding: '1rem 0 3rem' }}>
          <div className="container" style={{ borderRadius: '2rem', background: 'linear-gradient(135deg, #2563eb, #3b82f6)', padding: '2rem', color: 'white' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Ready to shape something meaningful for your team?</h2>
            <p style={{ margin: '0 0 1rem', color: 'rgba(255,255,255,0.8)' }}>Let’s build a learning experience that turns strategy into action.</p>
            <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#2563eb', padding: '0.95rem 1.2rem', borderRadius: '999px', fontWeight: 700 }}>Contact us <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer style={{ padding: '2rem 0 3rem' }}>
        <div className="container section-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ margin: '0 0 0.4rem' }}>Accredian Studio</h3>
              <p style={{ margin: 0, color: '#64748b' }}>Practical learning experiences for modern enterprise teams.</p>
            </div>
            <div>
              <a href="#home" style={{ color: '#2563eb', fontWeight: 700 }}>Enquire Now</a>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
            <div>
              <h4 style={{ margin: '0 0 0.5rem' }}>Explore</h4>
              <div style={{ display: 'grid', gap: '0.35rem', color: '#64748b' }}>
                <a href="#home" style={{ color: 'inherit' }}>Home</a>
                <a href="#stats" style={{ color: 'inherit' }}>Stats</a>
                <a href="#faqs" style={{ color: 'inherit' }}>FAQs</a>
              </div>
            </div>
            <div>
              <h4 style={{ margin: '0 0 0.5rem' }}>Contact</h4>
              <p style={{ margin: '0 0 0.3rem', color: '#64748b' }}>hello@accredianstudio.com</p>
              <p style={{ margin: 0, color: '#64748b' }}>Brighton, UK</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
