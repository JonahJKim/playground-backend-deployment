const axios = require('axios');

test('Basic get request', async () => {
    const expected = {
        firstName: "Jonah",
        lastName: "Kim"
    }

    const data = await axios.get('http://localhost:3000')
        .then((response) => {
            expect(response.data).toEqual(expected);
        })
})