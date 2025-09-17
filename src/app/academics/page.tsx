// src/app/academics/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './page.css';

export default function Academics() {
  return (
    <div className="page-container academics-page">
      <Header />

      <main className="main-content" id="main">
        {/* HERO BRIEF */}
        <section className="hero-brief" aria-labelledby="academics-hero-title">
          <div className="container hero-inner">
            <div>
              <h1 id="academics-hero-title">Academics at Ridgeview</h1>
              <p className="lede">
                A stimulating curriculum combining Cambridge &amp; ZIMSEC pathways, strong assessment practices,
                and enrichment programmes that prepare students for exams and life beyond school.
              </p>

              <div className="hero-ctas" role="group" aria-label="Academic calls to action">
                <a className="btn btn-primary" href="/academics/curriculum">View Curriculum</a>
                <a className="btn btn-ghost" href="/admissions">Admissions</a>
              </div>
            </div>

            <aside aria-hidden="true">
              <div className="visual-card">
                <div className="visual-placeholder">Curriculum snapshot</div>
              </div>
            </aside>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="section curriculum" aria-labelledby="curriculum-title">
          <div className="container">
            <h2 id="curriculum-title">Curriculum overview</h2>
            <p className="muted">We provide structured programmes and broad subject choice across all key stages.</p>

            <div className="curriculum-grid" role="list">
              <article className="curriculum-card" role="listitem">
                <h3>Early Years</h3>
                <p className="muted">Play-based foundations in literacy, numeracy & social skills.</p>
                <ul className="subjects-list">
                  <li>Phonics</li>
                  <li>Number sense</li>
                  <li>Early exploration</li>
                </ul>
              </article>

              <article className="curriculum-card" role="listitem">
                <h3>Primary</h3>
                <p className="muted">A broad curriculum with project-based learning and assessments.</p>
                <ul className="subjects-list">
                  <li>English & Reading</li>
                  <li>Mathematics</li>
                  <li>Science & Computing</li>
                </ul>
              </article>

              <article className="curriculum-card" role="listitem">
                <h3>Secondary</h3>
                <p className="muted">Exam pathways (Cambridge &amp; ZIMSEC), subject choices and personalised support.</p>
                <ul className="subjects-list">
                  <li>Sciences, Maths & ICT</li>
                  <li>Humanities & Languages</li>
                  <li>Creative & Performing Arts</li>
                </ul>
              </article>

              <article className="curriculum-card" role="listitem">
                <h3>Enrichment</h3>
                <p className="muted">Clubs and activities that boost confidence and real-world skills.</p>
                <ul className="subjects-list">
                  <li>Robotics & Coding</li>
                  <li>Debate & Public Speaking</li>
                  <li>Sports & Music</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ASSESSMENT */}
        <section className="section assessment" aria-labelledby="assessment-title">
          <div className="container">
            <h2 id="assessment-title">Assessment & Progress</h2>
            <p className="muted">Regular formative assessments guide teaching and help each student progress.</p>

            <div className="assessment-grid" role="list">
              <div className="assessment-card" role="listitem">
                <h4>Formative checks</h4>
                <p className="muted">Short quizzes, exit tickets and in-class checks.</p>
              </div>
              <div className="assessment-card" role="listitem">
                <h4>Summative exams</h4>
                <p className="muted">Termly tests and public exam preparation routines.</p>
              </div>
              <div className="assessment-card" role="listitem">
                <h4>Personalised targets</h4>
                <p className="muted">Data-driven targets and regular parent updates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLUBS */}
        <section className="section clubs" aria-labelledby="clubs-title">
          <div className="container">
            <h2 id="clubs-title">Clubs & Enrichment</h2>
            <div className="clubs-grid" role="list">
              <div className="club" role="listitem">Robotics & Coding</div>
              <div className="club" role="listitem">Debate & Model UN</div>
              <div className="club" role="listitem">Music & Drama</div>
            </div>
          </div>
        </section>

        {/* FACULTY */}
        <section className="section faculty" aria-labelledby="faculty-title">
          <div className="container">
            <h2 id="faculty-title">Faculty & Teaching</h2>
            <p className="muted">Our teachers combine subject knowledge with strong classroom practice.</p>

            <div className="faculty-grid" role="list">
              <div className="faculty-card" role="listitem">
                <div className="avatar" aria-hidden>TM</div>
                <div>
                  <strong>Mrs. Thandi M.</strong>
                  <div className="muted">Head of School</div>
                </div>
              </div>

              <div className="faculty-card" role="listitem">
                <div className="avatar" aria-hidden>JK</div>
                <div>
                  <strong>Mr. John K.</strong>
                  <div className="muted">Head of Academics</div>
                </div>
              </div>

              <div className="faculty-card" role="listitem">
                <div className="avatar" aria-hidden>RL</div>
                <div>
                  <strong>Mr. R. Lunga</strong>
                  <div className="muted">STEM Lead</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESOURCES */}
        <section className="section resources" aria-labelledby="resources-title">
          <div className="container">
            <h2 id="resources-title">Resources & Downloads</h2>
            <ul className="resources-list">
              <li><a href="/files/curriculum-overview.pdf">Curriculum overview (PDF)</a></li>
              <li><a href="/files/assessment-policy.pdf">Assessment policy</a></li>
              <li><a href="/files/exam-timetable.pdf">Exam timetable</a></li>
            </ul>

            <div className="cta-panel" style={{ marginTop: 14 }}>
              <div>
                <strong>Want a deeper look?</strong>
                <div className="muted">Book a curriculum meeting or school tour with our admissions team.</div>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href="/contact">Book a tour</a>
                <a className="btn btn-ghost" href="/admissions">Apply now</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
