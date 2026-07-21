import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { ClientsSection } from './components/ClientsSection';
import { EdgeSection } from './components/EdgeSection';
import { CatSection } from './components/CatSection';
import { HowItWorks } from './components/HowItWorks';
import { FaqSection } from './components/FaqSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { EnquireModal } from './components/EnquireModal';

const api = axios.create({ baseURL: 'http://localhost:5000/api' });

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [faqItems, setFaqItems] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }
      const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
      let currentSection = 'home';
      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    api.get('/faq').then((res) => setFaqItems(res.data.items || [])).catch(() => setFaqItems([]));
    api.get('/testimonials').then((res) => setTestimonials(res.data.items || [])).catch(() => setTestimonials([]));
  }, []);

  const handleOpenEnquire = () => setEnquireModalOpen(true);
  const handleCloseEnquire = () => setEnquireModalOpen(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
      <Navbar activeSection={activeSection} onOpenEnquire={handleOpenEnquire} />

      <main style={{ flex: 1 }}>
        <Hero onOpenEnquire={handleOpenEnquire} />
        <StatsSection />
        <ClientsSection />
        <EdgeSection />
        <CatSection />
        <HowItWorks />
        <FaqSection faqItems={faqItems} onOpenEnquire={handleOpenEnquire} />
        <TestimonialsSection testimonials={testimonials} onOpenEnquire={handleOpenEnquire} />
      </main>

      <Footer onOpenEnquire={handleOpenEnquire} />

      <EnquireModal isOpen={enquireModalOpen} onClose={handleCloseEnquire} />
    </div>
  );
}
