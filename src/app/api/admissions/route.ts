// src/app/api/admissions/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

type Body = { name?: string; email?: string; grade?: string; notes?: string };

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const grade = (body.grade || '').trim();
    const notes = (body.notes || '').trim();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const submission = {
      id: Date.now(),
      name,
      email,
      grade,
      notes,
      createdAt: new Date().toISOString(),
    };

    // DEV: append to a JSON file in project root under /data/admissions.json
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'admissions.json');

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
    } catch (fsErr: unknown) {
      if (fsErr instanceof Error) {
        console.error('Failed to write submission to file:', fsErr.message);
      } else {
        console.error('Failed to write submission to file:', String(fsErr));
      }
      // continue: do not break request for dev persistence issues
    }

    // You can also add email notifications, DB inserts, etc. here.

    return NextResponse.json({ success: true, submission }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Admissions POST error:', err.message);
    } else {
      console.error('Admissions POST error:', String(err));
    }
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}
