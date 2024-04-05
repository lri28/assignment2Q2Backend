const User = require('../models/register');

const url = 'https://lri28.github.io/assignment2Q2Frontend/'

const registerUser = (req, res) => { 
    // Get form data from request body
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

    // Prepare response data
    const responseData = {
        id: id,
        fullName: fullName,
        address: address,
        status: status,
        fee: fee
    };

    // Send response
    //res.status(200).json(responseData);
    let myurl = url
    res.redirect(myurl);
    
};

module.exports = {
    registerUser,
    User
};
