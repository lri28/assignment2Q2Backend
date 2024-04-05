
const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Route for registration form submission
router.post('/register', controller.registerUser);

// Route for rendering the registration page
router.get('/register', (req, res) => {
    // Handle the GET request here, such as rendering an HTML page
    res.sendFile(__dirname + '/registration.html');
});

module.exports = router;
