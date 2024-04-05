
// Handle registration form submission
exports.registerUser = (req, res) => {
    // Get form data from request body
    const registrationData = req.body;
    
    // Calculate fee based on status
    let fee = 0;
    switch (registrationData.status) {
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
        id: registrationData.id,
        fullName: registrationData.fullName,
        address: registrationData.address,
        status: registrationData.status,
        fee: fee
    };

    // Send response
    res.status(200).json(responseData);
};
