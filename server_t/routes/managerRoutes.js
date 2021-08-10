const express = require('express');
const managerRouter = express.Router();

const managerController = require('../controllers/managerController');

// Get All lecturer results
managerRouter.get('/', managerController.getAllManager);


module.exports = managerRouter;