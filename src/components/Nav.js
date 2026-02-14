import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollRafRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
                  className="main-nav__link"
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
