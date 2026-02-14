import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

const SECTION_IDS = ['home', 'projects', 'about', 'contact'];
const ACTIVE_THRESHOLD = 120; // px from top of viewport - section "in view" when its top is above this

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const scrollRafRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY ?? document.documentElement.scrollTop ?? document.body.scrollTop ?? 0;
      setScrolled(scrollY > 20);
      if (location.pathname !== '/') return;
      const trigger = scrollY + ACTIVE_THRESHOLD;
      let current = SECTION_IDS[SECTION_IDS.length - 1];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionBottom = sectionTop + rect.height;
        if (trigger >= sectionTop && trigger < sectionBottom) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };
    const run = () => {
      onScroll();
    };
    window.addEventListener('scroll', run, { passive: true });
    document.documentElement.addEventListener('scroll', run, { passive: true });
    document.body.addEventListener('scroll', run, { passive: true });
    requestAnimationFrame(run);
    const t = setTimeout(run, 100);
    return () => {
      window.removeEventListener('scroll', run);
      document.documentElement.removeEventListener('scroll', run);
      document.body.removeEventListener('scroll', run);
      clearTimeout(t);
    };
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    setMobileOpen(false);
    if (scrollRafRef.current != null) {
      cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = null;
    }
    const runScroll = () => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const startY = Math.max(
        window.scrollY ?? 0,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
      const targetY = element.getBoundingClientRect().top + startY;
      const distance = targetY - startY;
      const duration = 700;
      const startTime = performance.now();

      const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuart(progress);
        const y = Math.round(startY + distance * eased);
        window.scrollTo(0, y);
        document.documentElement.scrollTop = y;
        document.body.scrollTop = y;
        if (progress < 1) {
          scrollRafRef.current = requestAnimationFrame(tick);
        } else {
          scrollRafRef.current = null;
        }
      };
      scrollRafRef.current = requestAnimationFrame(tick);
    };
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(runScroll, 200);
    } else {
      runScroll();
    }
  };

  const navLinks = [
    { sectionId: 'home', label: 'Home' },
    { sectionId: 'projects', label: 'Projects' },
    { sectionId: 'about', label: 'About Me' },
    { sectionId: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`main-nav ${scrolled ? 'main-nav--scrolled' : ''}`}>
      <div className="main-nav__left">
        <button
          type="button"
          className="main-nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="main-nav__center">
        <nav className={`main-nav__links ${mobileOpen ? 'main-nav__links--open' : ''}`}>
          <ul>
            {navLinks.map(({ sectionId, label }) => (
              <li key={sectionId}>
                <button
                  type="button"
                  className={`main-nav__link ${location.pathname === '/' && activeSection === sectionId ? 'active' : ''}`}
                  onClick={() => scrollToSection(sectionId)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="main-nav__right" aria-hidden="true" />
      {/* <div className="main-nav__right">
        <Link
          to="/contact"
          className="main-nav__cta"
          onClick={() => setMobileOpen(false)}
        >
          Get in touch
        </Link>
      </div> */}
    </header>
  );
}

export default Nav;
