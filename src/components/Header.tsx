import React, { useState, useEffect } from 'react';

const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // highlight the section currently in view
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-brand" onClick={() => handleClick('home')} style={{ cursor: 'pointer' }}>
          Brindhasri <em>S</em>
        </div>

        <nav className="nav-menu">
          {sections.filter(s => s !== 'home').map(s => (
            s === 'contact' ? (
              <a
                key={s}
                href={`#${s}`}
                className="nav-cta"
                onClick={e => { e.preventDefault(); handleClick(s); }}
              >
                Contact
              </a>
            ) : (
              <a
                key={s}
                href={`#${s}`}
                className={active === s ? 'nav-active' : ''}
                onClick={e => { e.preventDefault(); handleClick(s); }}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            )
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
