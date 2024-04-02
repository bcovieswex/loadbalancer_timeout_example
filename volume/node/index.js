const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('OK');

});
// Define a route that will take 2 hours to respond
app.get('/delayed-response', (req, res) => {
    // Set a timeout to delay the response by 2 hours (in milliseconds)
    setTimeout(() => {
        // Send the response after the timeout
        res.send('Delayed response after 2 hours');
    }, 60 * 60 * 1000); // 2 hours in milliseconds
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});