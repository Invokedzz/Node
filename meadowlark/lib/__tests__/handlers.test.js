const handlers = require('../handlers');
test('home page renders', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.home(req, res);
    expect(res.render.mock.calls[0][0]).toBe('home');
});

test('about page renders with fortune', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.about(req, res);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('about');
    expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({
        fortune: expect.stringMatching(/\W/),
    }));
});

test('NotFound test', () => {
    const error = new Error('Error 404');
    const req = {};
    const res = {render: jest.fn()};
    const next = jest.fn();
    handlers.notFound(error, req, res, next);
    expect(res.render.mock.calls[0][0]).toBe('404');
    expect(res.render.mock.calls.length).toBe(1);
});

test('serverError test', () => {
    const err = new Error('random error');
    const req = {};
    const res = {render: jest.fn()};
    const next = jest.fn();
    handlers.serverError(err, req, res, next);
    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('505');
});

// Primeiro, importamos o código que queremos testar ('handlers.js'). Nesse caso, queremos nos certificar se a homepage está sendo renderizada. 

// Para chamar a renderização, precisamos de objetos de renderização e resposta.
// Não precisamos de nada em relação ao req (logo, retornamos um objeto vazio). A única coisa que precisamos é o objeto de resposta, nesse caso, um método de renderização.

// O que o código deve fazer é chamar o método "render" do objeto de resposta com a string "home".