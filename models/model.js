
// Define a basic model for user registration data
class User {
    constructor(id, fullName, address, status, fee) {
        this.id = id;
        this.fullName = fullName;
        this.address = address;
        this.status = status;
        this.fee = fee;
    }
}

module.exports = User;
