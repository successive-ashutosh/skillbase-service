require('dotenv').config();

const config = {
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
    },
    logLevel: process.env.LOG_LEVEL,
    port: process.env.PORT,
    env: process.env.NODE_ENV,
};

module.exports = config;
