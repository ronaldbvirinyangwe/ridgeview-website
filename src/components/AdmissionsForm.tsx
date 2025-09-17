// src/components/AdmissionsForm.tsx
'use client';

import React, { useState } from 'react';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function AdmissionsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('Form 1');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg(null);

    // basic client-side validation
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please provide your name and email.');
      setStatus('error');
      return;
    }

    try {
      const res = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), grade, notes }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body?.error || 'Submission failed. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('ok');
      setName('');
      setEmail('');
      setGrade('Form 1');
      setNotes('');
    } catch (err) {
      console.error(err);
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form className="admissions-form" onSubmit={handleSubmit} aria-label="Admissions contact form" style={{ minWidth: 280 }}>
      <label>
        <span style={{ color: 'var(--muted)', fontSize: 13 }}>Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Full name" required />
      </label>

      <label>
        <span style={{ color: 'var(--muted)', fontSize: 13 }}>Email</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="you@example.com" required />
      </label>

      <label>
        <span style={{ color: 'var(--muted)', fontSize: 13 }}>Grade applying for</span>
        <select value={grade} onChange={(e) => setGrade(e.target.value)} name="grade">
          <option>Early Years</option>
          <option>Primary</option>
          <option>Form 1</option>
          <option>Form 2</option>
          <option>Form 3</option>
          <option>Form 4</option>
        </select>
      </label>

      <label>
        <span style={{ color: 'var(--muted)', fontSize: 13 }}>Notes (optional)</span>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Any additional information" />
      </label>

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Submitting…' : 'Request Info'}
      </button>

      <div style={{ minHeight: 28 }}>
        {status === 'ok' && <p style={{ color: 'limegreen', marginTop: 8 }}>Thanks — we will be in touch shortly.</p>}
        {status === 'error' && <p style={{ color: '#ff8b8b', marginTop: 8 }}>{errorMsg || 'Something went wrong.'}</p>}
      </div>
    </form>
  );
}
