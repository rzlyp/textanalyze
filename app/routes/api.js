const express = require('express');
var routes = express.Router();
const ms = require('../controllers/microsoft');

routes.post('/api/cognitive',ms.cognitive);
routes.post('/api/analyze',ms.analyze);

module.exports = routes;
