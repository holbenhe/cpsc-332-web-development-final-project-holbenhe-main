const express = require('express');
const route = express.Router()

const services = require('../services/render');

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

module.exports = route