const express = require('express');
const config = require('../config/config');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Healthcheck
 *   description: API endpoint for server healthcheck
 * 
 * /api/healthcheck:
 *   get:
 *     summary: Server healthcheck
 *     description: Check the health of the server and its components
 *     tags: [Healthcheck]
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 * 
 */
router.get('/', (req, res) => {
    const db = req.app.get('db'); // Get the db connection from the app

    const serverStatus = {
        status: 'OK',
        server: {
            name: 'Skill Base Server',
            version: '1.0.0',
            environment: config.env,
            current_time: new Date()
        },
        system_resources: {
            cpu_usage: process.cpuUsage(),
            memory_usage: process.memoryUsage(),
        },
        external_services: {
            database: db.readyState === 1 ? 'connected' : 'disconnected',
        }
    };
    
    res.status(200).json(serverStatus);
});

module.exports = router;
