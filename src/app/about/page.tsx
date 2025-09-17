// src/app/about/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './page.css';

export default function About() {
  return (
    <div className="page-container about-page">
      <Header />

      <main className="main-content" id="main">
        {/* HERO */}
        <section className="about-hero" aria-labelledby="about-hero-title">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1 id="about-hero-title">About Ridgeview International School</h1>
              <p className="lede">
                We combine academic excellence with character formation. Ridgeview prepares students
                for Cambridge &amp; ZIMSEC exams while nurturing leadership, creativity and resilience.
              </p>

              <div className="hero-ctas" role="group" aria-label="Primary actions">
                <a className="btn btn-primary" href="/admissions">Admissions</a>
                <a className="btn btn-ghost" href="#programs">Our Programs</a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="visual-card">
                <div className="visual-gloss" />
                <div className="visual-placeholder">Ridgeview</div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="section mission" aria-labelledby="mission-title">
          <div className="container grid-2">
            <div>
              <h2 id="mission-title">Our Mission &amp; Vision</h2>
              <p>
                <strong>Mission:</strong> To provide a safe, stimulating and inclusive learning
                environment where every child can fulfil their academic potential and develop strong moral character.
              </p>

              <p style={{ marginTop: 12 }}>
                <strong>Vision:</strong> To be a leading school in Zimbabwe known for outstanding exam results,
                holistic development and graduates who contribute positively to their communities.
              </p>

              <h3 style={{ marginTop: 20 }}>Quick Facts</h3>
              <ul className="quick-facts">
                <li><strong>Founded:</strong> 2015</li>
                <li><strong>Curriculum:</strong> Cambridge &amp; ZIMSEC</li>
                <li><strong>Student-teacher ratio:</strong> 12:1</li>
                <li><strong>Clubs &amp; activities:</strong> 20+</li>
              </ul>
            </div>

            <aside className="quick-facts" aria-label="Quick facts">
              <h3>Why choose Ridgeview?</h3>
              <ul>
                <li>Individualised learning plans</li>
                <li>Strong pastoral care and wellbeing</li>
                <li>Modern STEM and arts facilities</li>
                <li>Extracurriculars that build confidence</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="section values" aria-labelledby="values-title">
          <div className="container">
            <h2 id="values-title">Core Values</h2>
            <div className="values-grid" role="list">
              <article className="value-card" role="listitem">
                <h4>Respect</h4>
                <p>Treating everyone with courtesy and kindness; valuing diverse perspectives.</p>
              </article>
              <article className="value-card" role="listitem">
                <h4>Excellence</h4>
                <p>Setting high standards and supporting students to achieve them.</p>
              </article>
              <article className="value-card" role="listitem">
                <h4>Integrity</h4>
                <p>Honesty, responsibility and ethical behaviour in all we do.</p>
              </article>
              <article className="value-card" role="listitem">
                <h4>Creativity</h4>
                <p>Encouraging curiosity, problem-solving and innovation.</p>
              </article>
            </div>
          </div>
        </section>

        {/* HISTORY */}
        <section className="section history" aria-labelledby="history-title">
          <div className="container">
            <h2 id="history-title">Our Story</h2>
            <ol className="timeline" aria-live="polite">
              <li>
                <strong>2015 — Founded</strong>
                <p>Ridgeview opened with a small cohort of primary learners and big ambitions.</p>
              </li>
              <li>
                <strong>2018 — Secondary &amp; Exam Prep</strong>
                <p>Expanded to include secondary classes and formal exam preparation tracks.</p>
              </li>
              <li>
                <strong>2022 — STEM &amp; Clubs</strong>
                <p>Launched robotics, coding and expanded extracurricular programmes.</p>
              </li>
              <li>
                <strong>2024 — Scholarship Programme</strong>
                <p>Introduced need-based scholarships and outreach partnerships.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* PROGRAMS */}
        <section id="programs" className="section programs" aria-labelledby="programs-title">
          <div className="container">
            <h2 id="programs-title">Programs &amp; Enrichment</h2>
            <div className="programs-grid" role="list">
              <div className="program" role="listitem">
                <h4>Early Years</h4>
                <p>Play-based learning focusing on literacy, numeracy and social skills.</p>
              </div>
              <div className="program" role="listitem">
                <h4>Primary</h4>
                <p>Strong foundations across core subjects with project work and assessments.</p>
              </div>
              <div className="program" role="listitem">
                <h4>Secondary</h4>
                <p>Subject choice, exam preparation and personalised academic support.</p>
              </div>
              <div className="program" role="listitem">
                <h4>Enrichment</h4>
                <p>Robotics, debate, music, sports and leadership training.</p>
              </div>
            </div>
          </div>
        </section>

        {/* STAFF */}
        <section className="section staff" aria-labelledby="staff-title">
          <div className="container">
            <h2 id="staff-title">Meet our team</h2>
            <p className="muted">Experienced teachers and support staff dedicated to student success.</p>

            <div className="staff-grid" role="list">
              <div className="staff-card" role="listitem">
                <div className="avatar" aria-hidden>TM</div>
                <h4>Mrs. Thandi M.</h4>
                <p className="muted">Head of School</p>
              </div>

              <div className="staff-card" role="listitem">
                <div className="avatar" aria-hidden>JK</div>
                <h4>Mr. John K.</h4>
                <p className="muted">Head of Academics</p>
              </div>

              <div className="staff-card" role="listitem">
                <div className="avatar" aria-hidden>AP</div>
                <h4>Ms. A. Panganayi</h4>
                <p className="muted">Pastoral Lead</p>
              </div>

              <div className="staff-card" role="listitem">
                <div className="avatar" aria-hidden>RL</div>
                <h4>Mr. R. Lunga</h4>
                <p className="muted">STEM &amp; Robotics</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section testimonials" aria-labelledby="testimonials-title">
          <div className="container">
            <h2 id="testimonials-title">What families say</h2>
            <div className="testimonials-grid" role="list">
              <blockquote className="testimonial" role="listitem">
                <p>&ldquo;Ridgeview helped my child gain confidence and improve grades.&rdquo;</p>
                <cite>— Mrs. Chipo M.</cite>
              </blockquote>

              <blockquote className="testimonial" role="listitem">
                <p>&ldquo;The teachers are supportive and the school listens to parents.&rdquo;</p>
                <cite>— Parent</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section cta" aria-labelledby="cta-title">
          <div className="container cta-panel">
            <div>
              <h3 id="cta-title">Interested in a tour or application?</h3>
              <p className="muted">Book a campus tour or start your child s application today.</p>
            </div>
            <div className="cta-actions" role="group" aria-label="Call to action">
              <a className="btn btn-primary" href="/admissions">Start Application</a>
              <a className="btn btn-ghost" href="/contact">Contact Admissions</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
