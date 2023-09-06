const mongoose = require('mongoose');
const config = require('../config/config');
const logger = require('../utils/logger'); // Import the logger module

function connectToDatabase() {
    const DB_URI = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error', (error) => {
        logger.error('MongoDB connection error:', error);
    });

    db.once('open', () => {
        logger.info('Connected to the database');
    });

    return db;
}

module.exports = connectToDatabase;
