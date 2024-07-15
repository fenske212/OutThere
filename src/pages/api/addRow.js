import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { type, ...formData } = req.body;

  // Configure JWT auth for Google API
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth });

  // Determine the sheet based on the form type
  const sheetName = type === 'sponsor' ? 'Sponsor CRM' : 'Web Form Members';
  const spreadsheetId = process.env.SPREADSHEET_ID;

  try {
    // Get all existing rows to determine the next record ID
    const range = `${sheetName}!A:A`;
    const getRows = await sheets.spreadsheets.values.get({ spreadsheetId, range });
    const rows = getRows.data.values;
    let nextRecordId = rows && rows.length > 1 ? Math.max(...rows.slice(1).map(row => parseInt(row[0], 10))) + 1 : 1;

    // Prepare values based on form type
    const values = type === 'sponsor'
      ? [[formData.company, " ", formData.category, formData.firstName + " "+ formData.lastName, formData.title, formData.email, formData.phone]]
      : [[nextRecordId, formData.firstName, formData.lastName, formData.email, formData.address, formData.phone, formData.activity]];

    const resource = { values };

    // Append new row to the sheet
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:G`,
      valueInputOption: 'RAW',
      resource,
    });

    console.log('Row added:', result.data);
    res.status(200).json({ message: 'Row added successfully', data: result.data });
  } catch (error) {
    console.error('Error adding row to Google Sheets:', error);
    res.status(500).json({ message: 'Error adding row to Google Sheets', error });
  }
}
