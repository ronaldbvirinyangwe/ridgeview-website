// src/app/page.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './page.css';

export default function Home(): JSX.Element {
  return (
    <div className="page-container">
      <Header />

      <main className="main-content" id="main">
        {/* HERO */}
        <section className="hero" aria-label="Welcome section">
          <div className="hero-inner container">
            <div className="hero-left">
              <h1 className="hero-title">Ridgeview International School</h1>
              <p className="hero-sub">
                A place where students learn, grow, and prepare for a brighter future — academic excellence with character.
              </p>

              <div className="hero-ctas">
                <a href="#admissions" className="btn btn-primary">Apply Now</a>
                <a href="#about" className="btn btn-ghost">Learn More</a>
              </div>

              <ul className="hero-highlights" aria-hidden="true">
                <li>Blended Cambridge &amp; ZIMSEC curriculum</li>
                <li>Strong pastoral care &amp; extracurriculars</li>
                <li>Small class sizes • Skilled teachers</li>
              </ul>
            </div>

            <div className="hero-right" role="img" aria-label="Students learning in a bright classroom">
              <div className="card-visual" aria-hidden="true">
                {/* Decorative SVG placeholder — no external images */}
                <svg viewBox="0 0 120 80" width="100%" height="100%" aria-hidden="true" focusable="false">
                  <rect x="2" y="2" rx="6" ry="6" width="116" height="76" fill="url(#g1)"></rect>
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0" stopColor="rgba(255,255,255,0.12)" />
                      <stop offset="1" stopColor="rgba(255,255,255,0.04)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>


        <section className="section admissions" id="admissions" aria-labelledby="admissions-heading">
          <div className="container admissions-panel">
            <div>
              <h2 id="admissions-heading">Admissions open for 2026</h2>
              <p>Limited places — apply early. We run entrance assessments and interviews to find the best fit for every child.</p>

              <ul className="admissions-list">
                <li>Open days &amp; campus tours</li>
                <li>Sibling discounts &amp; scholarship options</li>
                <li>Flexible payment plans</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
