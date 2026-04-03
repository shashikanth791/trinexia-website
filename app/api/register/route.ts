import { NextRequest, NextResponse } from 'next/server';

const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL!;

function generateId(eventName: string): string {
  const codes: Record<string, string> = {
    'Free Fire MAX':   'FF',
    'BGMI Tournament': 'BGMI',
    'Tech Rapid Fire': 'RF',
    'Ideathon':        'IDEA',
    'Debugging':       'DBG',
  };
  const code = codes[eventName] || 'EVT';
  const num = Math.floor(1000 + Math.random() * 9000);
  return `TRX-${code}-${num}`;
}

export async function POST(req: NextRequest) {
  const { name, regno, section, phone, teamMembers, upiRef, eventName } = await req.json();

  if (!name || !regno || !phone || !eventName) {
    return NextResponse.json({ error: 'Please fill all required fields' }, { status: 400 });
  }

  try {
    const params = new URLSearchParams({
      name, regno, section, phone,
      teamMembers: teamMembers || '',
      upiRef: upiRef || '',
      eventName,
    });

    const res = await fetch(`${SCRIPT_URL}?${params.toString()}`);
    const data = await res.json();

    if (!data.success) {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json({ success: true, registrationId: data.registrationId });

  } catch (err) {
    console.error('Script error:', err);
    return NextResponse.json({ error: 'Registration failed, please try again' }, { status: 500 });
  }
}