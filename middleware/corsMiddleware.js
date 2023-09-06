const cors = require('cors');

// Define your CORS options here
const corsOptions = {
    origin: '*', // Allow requests from this domain
    methods: 'GET,POST', // Allow only specified HTTP methods
};

// Create the actual CORS middleware
const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
