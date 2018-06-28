var winston = require('winston');

/**
 * Custom Winston Logger
 */

const log = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'log/server.log'})
    ]
});

// Module Export
module.exports = log;

