const express = require('express');
const router = require('./src/routers/navRouter');

// constants
const PORT = process.env.PORT || 3000;

// app set
const app = express();
app.use(router);


// app listener
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
})