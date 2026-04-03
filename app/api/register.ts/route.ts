import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';

const SHEET_IDS: Record<string, string> = {
  'Free Fire MAX':   process.env.SHEET_FREE_FIRE!,
  'BGMI Tournament': process.env.SHEET_BGMI!,
  'Tech Rapid Fire': process.env.SHEET_RAPID_FIRE!,
  'Ideathon':        process.env.SHEET_IDEATHON!,
  'Debugging':       process.env.SHEET_DEBUGGING!,
};

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

async function writeToSheet(eventName: string, data: any) {
  const auth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(SHEET_IDS[eventName], auth);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];

  await sheet.addRow({
    RegistrationID: data.registrationId,
    Name:           data.name,
    RegNo:          data.regno,
    Section:        data.section,
    Phone:          data.phone,
    TeamMembers:    data.teamMembers || '',
    UPIRef:         data.upiRef || '',
    Event:          eventName,
    Timestamp:      new Date().toISOString(),
  });
}

export async function POST(req: NextRequest) {
  const { name, regno, section, phone, teamMembers, upiRef, eventName } = await req.json();

  // 1. Validate
  if (!name || !regno || !phone || !eventName) {
    return NextResponse.json({ error: 'Please fill all required fields' }, { status: 400 });
  }

  if (!SHEET_IDS[eventName]) {
    return NextResponse.json({ error: 'Invalid event selected' }, { status: 400 });
  }

  // 2. Generate unique ID
  const registrationId = generateId(eventName);

  // 3. Write to Google Sheet
  try {
    await writeToSheet(eventName, { registrationId, name, regno, section, phone, teamMembers, upiRef });
  } catch (err) {
    console.error('Sheets write failed:', err);
    return NextResponse.json({ error: 'Registration failed, please try again' }, { status: 500 });
  }

  // 4. Return registration ID
  return NextResponse.json({ success: true, registrationId });
}