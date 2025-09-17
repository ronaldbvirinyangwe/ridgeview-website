// src/components/ContactForm.tsx
'use client';

import React, { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<{ type: 'idle' | 'sending' | 'ok' | 'error'; message?: string }>({
    type: 'idle',
  });

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!form.email.trim()) next.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address';
    if (!form.subject.trim()) next.subject = 'Please enter a subject';
    if (!form.message.trim() || form.message.trim().length < 10) next.message = 'Message must be at least 10 characters';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) {
      setStatus({ type: 'error', message: 'Please fix the errors above.' });
      return;
    }

    setStatus({ type: 'sending', message: 'Sending…' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const msg = typeof body?.message === 'string' ? body.message : `Server returned ${res.status}`;
        throw new Error(msg);
      }

      setStatus({ type: 'ok', message: 'Thanks — your message has been sent.' });
      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error: unknown) {
      console.error('Contact submit error', error);
      const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setStatus({ type: 'error', message });
    }
  }

  function onChange<K extends keyof FormState>(key: K, value: string) {
    setForm((s) => ({ ...s, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form" noValidate>
      <label>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>Name</span>
        <input
          name="name"
          value={form.name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="Full name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'err-name' : undefined}
          required
        />
        {errors.name && <small id="err-name" style={{ color: '#ff9b9b' }}>{errors.name}</small>}
      </label>

      <label>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>Email</span>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={(e) => onChange('email', e.target.value)}
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'err-email' : undefined}
          required
        />
        {errors.email && <small id="err-email" style={{ color: '#ff9b9b' }}>{errors.email}</small>}
      </label>

      <label>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>Subject</span>
        <input
          name="subject"
          value={form.subject}
          onChange={(e) => onChange('subject', e.target.value)}
          placeholder="Subject"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'err-subject' : undefined}
          required
        />
        {errors.subject && <small id="err-subject" style={{ color: '#ff9b9b' }}>{errors.subject}</small>}
      </label>

      <label>
        <span style={{ fontSize: 13, color: 'var(--muted)' }}>Message</span>
        <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={(e) => onChange('message', e.target.value)}
          placeholder="How can we help?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'err-message' : undefined}
          required
        />
        {errors.message && <small id="err-message" style={{ color: '#ff9b9b' }}>{errors.message}</small>}
      </label>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status.type === 'sending'}
          aria-disabled={status.type === 'sending'}
        >
          {status.type === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        <div role="status" aria-live="polite" className={`status ${status.type === 'ok' ? 'ok' : status.type === 'error' ? 'error' : ''}`}>
          {status.message ? status.message : ''}
        </div>

        <div className="admissions-contact" style={{ fontSize: 13, color: 'var(--muted)' }}>
          Or reach us at <strong><a href="mailto:admissions@ridgeview.school">admissions@ridgeview.school</a></strong>
        </div>
      </div>
    </form>
  );
}
