const validator = require('validator');

let User = function(data) {
    this.data = data;
    this.errors = [];
};

User.prototype.cleanUp = function() {
    if (typeof(this.data.username) !== "string") {
        this.data.username = "";
    }
    if (typeof(this.data.email) !== "string") {
        this.data.email = "";
    }
    if (typeof(this.data.password) !== "string") {
        this.data.password = "";
    }

    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password
    };
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
    this.cleanUp();
    this.validate();
};

module.exports = User;