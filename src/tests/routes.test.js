const axios = require('axios');
const request = require('supertest');
const router = require('../routers/navRouter');

test('Basic get request', async () => {
    const expected = {
        firstName: "Jonah",
        lastName: "Kimm"
    }

    const response = await request(router).get('/');
    expect(response.body).toEqual(expected);
})