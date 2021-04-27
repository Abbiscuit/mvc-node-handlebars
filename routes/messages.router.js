const express = require('express');

/* controller */
const messagesController = require('../controllers/messages.controller');

const messagesRoutes = express.Router();

/* routes */
messagesRoutes.get('/', messagesController.getMessages);
messagesRoutes.post('/', messagesController.postMessage);

module.exports = messagesRoutes;
