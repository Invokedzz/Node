const handlers = require('../handlers');
test('Testing our home page', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.home(req, res);
    expect(res.render.mock.calls[0][0]).toBe('home');
});
test('Testing the about page', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.about(req, res);
    expect(res.render.mock.calls[0][0]).toBe('about');
})
test('Testing the error page', () => {
    const req = {};
    const res = {render: jest.fn()};
    const next = jest.fn();
    handlers.error(req, res, next);
    expect(res.render.mock.calls[0][0]).toBe('error');
    expect(res.render.mock.calls.length).toBe(1);
});