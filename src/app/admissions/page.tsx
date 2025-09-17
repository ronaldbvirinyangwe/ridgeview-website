// src/app/admissions/page.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdmissionsForm from '@/components/AdmissionsForm';
import './page.css';

export default function AdmissionsPage() {
  return (
    <div className="page-container">
      <Header />
      <main className="main-content">
        <div className="container" style={{ padding: '48px 20px' }}>
          <h1>Admissions</h1>
          <p>
            Complete the form to request information or begin your application. We will get back to you
            with next steps.
          </p>

          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 380px', gap: 28 }}>
            <div>
              <p style={{ color: 'var(--muted)', maxWidth: 720 }}>
                We run entrance assessments and interviews to find the best fit for every child.
                If you want a campus tour or have questions about fees or scholarships, use the form.
              </p>
            </div>

            {/* Client form */}
            <AdmissionsForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
