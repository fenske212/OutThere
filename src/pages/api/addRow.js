import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, dob, address, activity } = req.body;

    const auth = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.SPREADSHEET_ID;
    const sheetName = 'Web Form Members';

    try {
      // Get all existing rows to determine the next record ID
      const getRows = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetName}!A:A`,
      });

      const rows = getRows.data.values;

      let nextRecordId = 1; // Default to 1 if no rows exist
      if (rows && rows.length > 1) { // Account for the header row
        const recordIds = rows.slice(1).map(row => parseInt(row[0], 10)); // Skip header
        nextRecordId = Math.max(...recordIds) + 1;
      }

      const values = [
        [nextRecordId, firstName, lastName, email, address, phone, activity],
      ];

      const resource = {
        values,
      };

      const result = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A:F`,
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
