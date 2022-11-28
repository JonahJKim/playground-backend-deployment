const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const result = {
        firstName: "Jonahhhhh",
        lastName: "Kim"
    };
    res.status(200).send(result);
})

module.exports = app