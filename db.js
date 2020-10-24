const mongodb = require('mongodb');
const config = require('./config');

const connectionString = `mongodb+srv://${config.username}:${config.password}@cluster0.ray9g.mongodb.net/ComplexApp` 
mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    module.exports = client.db();
    const app = require('./app');
    app.listen(3000);
});