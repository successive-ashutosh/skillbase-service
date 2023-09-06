const createApp = require('./app');
const logger = require('./utils/logger'); 
const setupSwagger = require('./utils/swagger');

const PORT = process.env.PORT || 3000;
const app = createApp();
setupSwagger(app);

app.listen(PORT, () => {
    logger.info(`Server is running on port: ${PORT}`); 
    logger.info(`Environment: ${process.env.NODE_ENV}`);
    logger.info(`Log Level: ${process.env.LOG_LEVEL}`);
});
