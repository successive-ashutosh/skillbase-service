const winston = require('winston');

const logger = winston.createLogger({
  level: 'info', // Set the default log level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // Output logs to console
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Save error logs to a file
    new winston.transports.File({ filename: 'logs/combined.log' }) // Save all logs to a file
  ]
});

module.exports = logger;
