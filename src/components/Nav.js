import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/contact', label: 'Contact' },
    { to: '/fun-corner', label: 'Fun Corner' },
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
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </NavLink>
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
