const handlers = require('../handlers');
test('Handling the Home Page', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.Home(req, res);
    expect(res.render.mock.calls[0][0]).toBe('home');
});

test('Handling the contact page', () => {
    const req = {};
    const res = {render: jest.fn()};
    handlers.Contact(req, res);
    expect(res.render.mock.calls[0][0]);
});