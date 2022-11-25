const axios = require('axios');

test('Basic get request', async () => {
    const expected = {
        firstName: "Jonah",
        lastName: "Kim"
    }

    const data = await axios.get('http://172.17.0.1:3000')
        .then((response) => {
            expect(response.data).toEqual(expected);
        })
})