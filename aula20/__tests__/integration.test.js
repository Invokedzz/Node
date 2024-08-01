const app = require('../icecream.js');
const puppeteer = require('puppeteer');
const portfinder = require('portfinder');

let server = null;
let port = null;

beforeEach(async () => {
    port = await portfinder.getPortPromise();
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

test('Protocol for main page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}`);
    expect(page.url()).toBe(`http://localhost:${port}`);
    await browser.close();
});