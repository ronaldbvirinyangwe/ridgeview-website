// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

type Body = { name?: string; email?: string; subject?: string; message?: string };

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const subject = (body.subject || '').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 });
    }

    const submission = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    };

    // DEV ONLY: append to data/contact.json
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'contact.json');

    try {
      await fs.mkdir(dataDir, { recursive: true });
      let current: unknown[] = [];
      try {
        const raw = await fs.readFile(filePath, 'utf8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          current = parsed;
        } else {
          current = [];
        }
      } catch {
        current = [];
      }

      current.push(submission);
      await fs.writeFile(filePath, JSON.stringify(current, null, 2), 'utf8');
    } catch (fileErr: unknown) {
      // Log but do not fail the whole request; this is development persistence only
      if (fileErr instanceof Error) {
        console.error('Failed to persist contact submission:', fileErr.message);
      } else {
        console.error('Failed to persist contact submission:', String(fileErr));
      }
    }

    // TODO: send email / integrate with CRM here

    return NextResponse.json({ success: true, submission }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Contact POST error:', err.message);
    } else {
      console.error('Contact POST error:', String(err));
    }
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}
