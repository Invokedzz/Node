const handlers = require('./ourHandlers');
test('Testing homePage', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.Home(req, res);
    expect(res.render.mock.calls[0][0]).toBe('home');
});

test('Testing about page', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.About(req, res);
    expect(res.render.mock.calls[0][0]).toBe('about');
});

test('Testing error page', () => {
    const req = {};
    const res = {render: jest.fn()};
    const next = jest.fn();
    const err = jest.fn();
    handlers.Error(req, res, next, err);
    expect(res.render.mock.calls[0][0]).toBe('error');
    expect(res.render.mock.calls.length).toBe(1);
});