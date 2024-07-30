const handlers = require('./handlers');
test('Página principal', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.mainPage(req, res);
    expect(res.render.mock.calls[0][0]).toBe('casa');
});

test('Página sobre', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.abt(req, res);
    expect(res.render.mock.calls[0][0]).toBe('sobre');
});

test('Página de erro', () => {
    const req = {};
    const res = {render: jest.fn()};
    const next = jest.fn();
    handlers.error(err, req, res, next);
    expect(res.render.mock.calls[0][0]).toBe('erro');
    expect(res.render.mock.length).toBe(1);
});