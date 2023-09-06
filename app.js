const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./db/connection');
const healthcheckRoutes = require('./routes/healthcheck');
const skillRoutes = require('./routes/skills');
const categoryRoutes = require('./routes/categories');
const taxonomyRoutes = require('./routes/taxonomies');
const logger = require('./utils/logger');
const requestLoggerMiddleware = require('./middleware/requestLoggerMiddleware');
const corsMiddleware = require('./middleware/corsMiddleware');

function createApp() {
    const app = express();

    // Connect to MongoDB and set the db connection as an app-level variable
    const db = connectToDatabase();
    app.set('db', db);

    app.use(corsMiddleware); // Enable CORS
    app.use(bodyParser.json()); // Parse JSON request bodies
    app.use(requestLoggerMiddleware); // Log all requests

    // Load routes
    app.use('/api/healthcheck', healthcheckRoutes);
    app.use('/api/skills', skillRoutes);
    app.use('/api/categories', categoryRoutes);
    app.use('/api/taxonomies', taxonomyRoutes);

    // Error handling middleware
    app.use((err, req, res, next) => {
        logger.error(err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    });

    return app;
}


module.exports = createApp;
