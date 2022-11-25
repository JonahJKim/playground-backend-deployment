const express = require('express');

// app set
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// app routes

app.get('/', (req, res) => {
    const result = {
        firstName: "Jonah",
        lastName: "Kim"
    };
    res.status(200).send(result);
})


// app listener
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
})