const puppeteer = require('puppeteer-extra');
const { google } = require('googleapis');
const dotenv = require('dotenv');
const { runQuiz } = require('./quizAutomation');
const { handleCookieConsent, setZoom, sleep } = require('./utils');

dotenv.config();

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_RANGE = 'Users!A2:B';

const auth = new google.auth.GoogleAuth({
  keyFile: 'path/to/your/credentials.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

async function getUsers() {
  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: SHEET_RANGE,
  });
  return response.data.values;
}

async function automateQuiz(username, password) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto('https://example-learning-site.com/login');
    await handleCookieConsent(page);
    await setZoom(page);

    // Login
    await page.type('#username', username);
    await page.type('#password', password);
    await page.click('#login-button');
    await page.waitForNavigation();

    // Navigate to quiz
    await page.goto('https://example-learning-site.com/quiz');
    await runQuiz(page);

    // Logout
    await page.click('#user-menu');
    await page.click('#logout-button');

    console.log(`Quiz completed for user: ${username}`);
  } catch (error) {
    console.error(`Error for user ${username}:`, error);
  } finally {
    await browser.close();
  }
}

async function main() {
  try {
    const users = await getUsers();
    for (const [username, password] of users) {
      await automateQuiz(username, password);
      await sleep(5000); // Wait between users
    }
  } catch (error) {
    console.error('Error in main execution:', error);
  }
}

main();
