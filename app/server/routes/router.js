const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET /
 */
route.get('/',services.homeRoutes);

/**
 * @description add textbooks
 * @method GET /add-textbook
 */
route.get('/add-textbook',services.add_textbook)

/**
 * @description for update textbook
 * @method GET /update-tetbook
 */
route.get('/update-textbook',services.update_textbook)

//API
route.post('/api/textbooks',controller.create);
route.get('/api/textbooks',controller.find);
route.put('/api/textbooks/:id',controller.update);
route.delete('/api/textbooks/:id',controller.delete);

module.exports = route