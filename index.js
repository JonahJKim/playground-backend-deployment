const app = require('./routers/navRouter.js');

// constants
const PORT = process.env.PORT || 3000;


// app listener
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
})