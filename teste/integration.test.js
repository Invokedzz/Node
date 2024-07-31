const puppeteer = require('puppeteer');
const portfinder = require('portfinder');
const app = require('./coffee.js');

let server = null;
let port = null;

beforeEach(async () => {
    port = await portfinder.getPortPromise();
    server = app.listen(port);
});

afterEach(async () => {
    if (server) await new Promise(resolve => server.close(resolve));
});

test('Waiting for each test to resolve', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}`);
    expect(page.url()).toBe(`http://localhost:${port}/` || `http://localhost:${port}/about`);
    await browser.close();
});