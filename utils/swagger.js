const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Skill Base API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*'], // Path to the API route files from the root directory
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
