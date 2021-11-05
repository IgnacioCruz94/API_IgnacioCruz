// Modules
const express = require('express');
const MessagesResources = express.Router();

// Controllers
const { 
    GetController, 
    PostController,
    UpdateController,
    DeleteController 
} = require('../controllers');


// All resources
MessagesResources.get('/', GetController.getAll);
MessagesResources.post('/', PostController.createMsg);
MessagesResources.put('/:id', UpdateController.updateMsg);
MessagesResources.delete('/:id', DeleteController.deleteMsg);
MessagesResources.get('/:id', () => {});

module.exports = MessagesResources;