import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Quizy API',
      version: '1.0.0',
      description: 'API documentation for Quiz application',
    },
    servers: [
      {
        url: 'http://localhost:5000/api/',
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJSDoc(options);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
