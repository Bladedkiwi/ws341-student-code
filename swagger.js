const swaggerAutogen = require('swagger-autogen')();

const doc = {
info: {
    title: 'Temples Galore',
    description: 'Temples, temples, and more Temples.',
},
    host: 'localhost:7777'
};

const outputFile = './swagger-output.json';

// If using express Router, only pass in the ROOT file where the route starts, such as index.js, app.js, routes.js et.
const routes = [ './routes/index.js'];

swaggerAutogen(outputFile, routes, doc).then(async () => {
    await import('./index.js')
});

