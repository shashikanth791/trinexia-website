import { createClient } from '@supabase/supabase-js';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const SHEET_IDS: Record<string, string> = {
  'Free Fire MAX':    process.env.SHEET_FREE_FIRE!,
  'BGMI Tournament':  process.env.SHEET_BGMI!,
  'Tech Rapid Fire':  process.env.SHEET_RAPID_FIRE!,
  'Ideathon':         process.env.SHEET_IDEATHON!,
  'Debugging':        process.env.SHEET_DEBUGGING!,
};

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
    Name:        data.name,
    RegNo:       data.regno,
    Section:     data.section,
    Phone:       data.phone,
    TeamMembers: data.teamMembers,
    UPIRef:      data.upiRef || '',
    Event:       eventName,
    Timestamp:   new Date().toISOString(),
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, regno, section, phone, teamMembers, upiRef, eventName } = req.body;

  // 1. Validate
  if (!name || !regno || !phone || !eventName) {
    return res.status(400).json({ error: 'Please fill all required fields' });
  }

  if (!SHEET_IDS[eventName]) {
    return res.status(400).json({ error: 'Invalid event selected' });
  }

  // 2. Check duplicate (same regno + same event)
  const { data: existing } = await supabase
    .from('registrations')
    .select('id')
    .eq('regno', regno)
    .eq('event', eventName)
    .single();

  if (existing) {
    return res.status(409).json({ 
      error: 'You are already registered for this event!' 
    });
  }

  // 3. Save to Supabase first — registration is SAFE
  const { error: dbError } = await supabase
    .from('registrations')
    .insert([{ name, regno, section, phone, team_members: teamMembers, upi_ref: upiRef, event: eventName }]);

  if (dbError) {
    return res.status(500).json({ error: 'Registration failed, please try again' });
  }

  // 4. Sync to Google Sheet (non-blocking)
  writeToSheet(eventName, { name, regno, section, phone, teamMembers, upiRef }).catch(err => {
    console.error('Sheets sync failed:', err);
  });

  return res.status(200).json({ success: true });
}