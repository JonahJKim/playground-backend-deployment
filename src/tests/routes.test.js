const request = require('supertest');
const router = require('../routers/navRouter');

test('Basic get request', async () => {
    const expected = {
        firstName: "Jayyyy!",
        lastName: "Kim"
    }

    const response = await request(router).get('/');
    expect(response.body).toEqual(expected);
})