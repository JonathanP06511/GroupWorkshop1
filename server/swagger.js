const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuración de opciones para Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Items',
      version: '1.0.0',
      description: 'Una API simple para manejar items',
    },
  },
  apis: ['./routes/*.js'], // Archivos de rutas con anotaciones OpenAPI
};

// Generar la especificación de Swagger a partir de las opciones
const specs = swaggerJsdoc(options);

module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(specs),
};
