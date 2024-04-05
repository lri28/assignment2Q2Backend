const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route for registration form submission
app.post('/register', (req, res) => {
    // Extract registration data from request body
    const { id, fullName, address, status } = req.body;
    
    // Calculate fee based on status
    let fee = 0;
    switch (status) {
        case 'student':
            fee = 10;
            break;
        case 'staff':
            fee = 50;
            break;
        case 'volunteer':
            fee = 0;
            break;
        default:
            fee = 0;
    }

    // Log registration details
    console.log('New registration:');
    console.log('ID:', id);
    console.log('Full Name:', fullName);
    console.log('Address:', address);
    console.log('Status:', status);
    console.log('Fee:', fee);

    // Prepare response data
    const responseData = {
        id,
        fullName,
        address,
        status,
        fee
    };

    // Send response
    res.json(responseData);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});