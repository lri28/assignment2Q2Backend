const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Route for registration form submission
router.post('/register', controller.registerUser);

module.exports = router;
