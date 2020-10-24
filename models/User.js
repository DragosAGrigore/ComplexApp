const validator = require('validator');

let User = function(data) {
    this.data = data;
    this.errors = [];
};

User.prototype.validate = function () {
    if (this.data.username === "") {
        this.errors.push("You must provide a username.");
    }
    if (this.data.username !== "" && !validator.isAlphanumeric(this.data.username)) {
        this.errors.push("The username can only contain letters and numbers.");
    }
    if (this.data.username.length > 0 && this.data.username.length < 3) {
        this.errors.push("Username must be at least 3 characters long.");
    }
    if (this.data.email === "") {
        this.errors.push("You must provide a valid email address.");
    }
    if (!validator.isEmail(this.data.email)) {
        this.errors.push("Email is not valid.");
    }
    if (this.data.password === "") {
        this.errors.push("You must provide a password.");
    }
    if (this.data.password.length > 0 && this.data.password.length < 8) {
        this.errors.push("Password must be at least 8 characters long.");
    }
    if (this.data.password.length > 100) {
        this.errors.push("Password cannot be more than 100 characters long.");
    }
};

User.prototype.register = function() {
    this.validate();
};

module.exports = User;