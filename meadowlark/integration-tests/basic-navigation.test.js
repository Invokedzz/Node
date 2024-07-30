const portfinder = require('portfinder');
const puppeteer = require('puppeteer');
const app = require('../meadowlark.js');

let server = null;
let port = null;

beforeEach(async () => {
    port = await portfinder.getPortPromise();
    server = app.listen(port);
});

afterEach(() => {
    server.close();
});

test('home page links to about page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}`);
    await Promise.all([
        page.waitForNavigation(),
        page.click('[data-test-id="about"]'),
    ]);
    expect(page.url()).toBe(`http://localhost:${port}/about`);
    await browser.close();
});

// Estamos usando os hooks "beforeEach" e "afterEach" do Jest para iniciar nosso servidor antes de cada teste e interrompê-lo após o teste.

// Esse teste usa a API do Puppeteer, que fornece várias funcionalidades do DOM. Quase tudo é assíncrono, e utilizamos o await para tornar o teste mais fácil de ler e gravar.

// Quase todas as chamadas de API do Puppeteer retornam uma promise. Nós encapsulammos a navegação e o clique juntos em uma chamada a "Promise.all" para evitar condições race.

// Uma condição race (race condition) ocorre quando duas ou mais threads acessam dados compartilhados e tentam efetuar alterações ao mesmo tempo.
