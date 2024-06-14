// pages/api/addRow.js

import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, dob, address } = req.body;

    const auth = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = 'Web Form Members!A:G'; // Ensure this range matches your sheet's name and columns

    const values = [
      [firstName, lastName, email, phone, dob, address],
    ];

    const resource = {
      values,
    };

    try {
      const result = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        resource,
      });

      console.log('Row added:', result.data);
      res.status(200).json({ message: 'Row added successfully', data: result.data });
    } catch (error) {
      console.error('Error adding row to Google Sheets:', error);
      res.status(500).json({ message: 'Error adding row to Google Sheets', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
