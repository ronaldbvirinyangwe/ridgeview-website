// src/app/contact/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import './page.css';

export default function ContactPage() {
  return (
    <div className="page-container contact-page">
      <Header />

      <main className="main-content" id="main">
        <div className="container">
          <section className="contact-hero" aria-labelledby="contact-hero-title">
            <h1 id="contact-hero-title">Contact Us</h1>
            <p className="lede">
              Questions about admissions, fees, school tours, or anything else? Reach our friendly
              admissions team and we will respond within 1–2 business days.
            </p>
          </section>

          <section className="contact-grid" aria-labelledby="contact-grid-title">
            <div className="contact-info" aria-labelledby="contact-grid-title">
              <h2 id="contact-grid-title">Get in touch</h2>
              <p className="contact-details">
                You can call, email, or use the form to contact admissions and general enquiries.
              </p>

              <ul className="contact-details" aria-hidden="false">
                <li><strong>Phone:</strong> <a href="tel:+263771234567">+263 77 123 4567</a></li>
                <li><strong>Email:</strong> <a href="mailto:admissions@ridgeview.school">admissions@ridgeview.school</a></li>
                <li><strong>Address:</strong> 12 Ridgeview Road, Harare</li>
              </ul>

              <div className="contact-actions">
                <a className="btn btn-primary" href="/admissions">Apply Now</a>
                <a className="btn btn-ghost" href="/about">Learn about us</a>
              </div>

              <div className="map-placeholder" aria-hidden="true" style={{ marginTop: 20, height: 220 }}>
                {/* Optional: embed map iframe here later */}
              </div>
            </div>

            <aside>
              {/* Client-side form */}
              <ContactForm />
            </aside>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
