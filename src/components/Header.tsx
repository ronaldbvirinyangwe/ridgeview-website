'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './Header.css';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // On mount, read stored theme or system preference (client-only)
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      setTheme(prefersLight ? 'light' : 'dark');
    }
    setMounted(true);
  }, []);

  // Apply theme (after mount) and persist; also sync across tabs
  useEffect(() => {
    if (!mounted) return;
    if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');

    try { localStorage.setItem('theme', theme); } catch { /* ignore */ }

    function onStorage(e: StorageEvent) {
      if (e.key === 'theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue as 'light' | 'dark');
      }
    }
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [theme, mounted]);

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  // deterministic class string prevents hydration mismatch
  const navClass = menuOpen ? 'nav-links open' : 'nav-links';

  return (
    <header className="header" role="banner">
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <Link href="/" className="logo" aria-label="Ridgeview home">
          <span className="mark">R</span>
          <span className="brand-name">Ridgeview International</span>
        </Link>

        <ul className={navClass} role="menubar" aria-hidden={!menuOpen}>
          <li role="none"><Link role="menuitem" href="/">Home</Link></li>
          <li role="none"><Link role="menuitem" href="/about">About</Link></li>
          <li role="none"><Link role="menuitem" href="/admissions">Admissions</Link></li>
          <li role="none"><Link role="menuitem" href="/academics">Academics</Link></li>
          <li role="none"><Link role="menuitem" href="/contact">Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-pressed={theme === 'light'}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 4.5V3m0 18v-1.5M4.5 12H3m18 0h-1.5M6.8 6.8 5.4 5.4M18.6 18.6l-1.4-1.4M6.8 17.2 5.4 18.6M18.6 5.4l-1.4 1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>

          <button
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <span className="hamburger" aria-hidden />
          </button>
        </div>
      </nav>
    </header>
  );
}
