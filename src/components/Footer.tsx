import React from 'react';
import './Footer.css';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-col footer-brand">
                    
              <span className="brand-name">Ridgeview International</span>
            <p className="footer-desc">
              Academic excellence with character. Cambridge &amp; ZIMSEC pathways, pastoral care and rich extracurriculars.
            </p>
          </div>

          <nav className="footer-col footer-links" aria-label="Footer navigation">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/academics">Academics</Link></li>
              <li><Link href="/admissions">Admissions</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="footer-col footer-contact" aria-label="Contact information">
            <h4>Contact</h4>
            <p className="muted">12 Ridgeview Road, Harare</p>
            <p className="muted">Phone: <a href="tel:+263771234567">+263 77 123 4567</a></p>
            <p className="muted">Email: <a href="mailto:admissions@ridgeview.school">admissions@ridgeview.school</a></p>

            <div className="social" aria-hidden="false" style={{ marginTop: 12 }}>
              <a href="#" className="social-link" aria-label="Facebook (opens in new tab)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M22 12a10 10 0 10-11.6 9.9v-7H8.9v-3h1.5V9.4c0-1.5.9-2.4 2.3-2.4.7 0 1.4.1 1.4.1v1.6h-.8c-.8 0-1 0-1 1v1.2h1.8l-.3 3H13v7A10 10 0 0022 12z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter (opens in new tab)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M22 5.9c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.7.4-1.5.7-2.3.9C18 4.7 17 4 16 4c-1.7 0-3 1.4-3 3 0 .2 0 .4.1.6C10 7.5 7.4 6.1 5.6 4c-.2.4-.3.8-.3 1.3 0 1 0 1.9.6 2.7C4.4 8 3.7 7.9 3 7.6v.1c0 1.3.9 2.4 2.1 2.7-.4.1-.8.2-1.2.1.3 1 1.2 1.7 2.2 1.8C7 14 5.5 14.6 4 14.6c-.3 0-.6 0-.9-.1C4.9 16 6.9 17 9.2 17c6 0 9.3-5 9.3-9.2v-.4c.7-.5 1.4-1.1 2-1.8-.6.3-1.3.5-2 .6z"/></svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram (opens in new tab)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.8A4.2 4.2 0 1016.2 12 4.2 4.2 0 0012 7.8zm6.4-.6a1.2 1.2 0 11-1.2 1.2 1.2 1.2 0 011.2-1.2zM12 9.2a2.8 2.8 0 11-2.8 2.8A2.8 2.8 0 0112 9.2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Ridgeview International School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
