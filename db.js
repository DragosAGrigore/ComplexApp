const dotenv = require('dotenv');
dotenv.config();
const mongodb = require('mongodb');

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.ray9g.mongodb.net/ComplexApp` 
mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    module.exports = client;
    const app = require('./app');
    app.listen(process.env.PORT);
});