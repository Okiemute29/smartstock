const { MongoClient } = require('mongodb');
const username = 'system';
const password = 'smartstock_gps'
const client = new MongoClient(`mongodb+srv://godwinrobert2906:poERJVDcoIWRDwGy@cluster0.s044vez.mongodb.net/`);

module.exports = client