const express = require('express');
const router = express.Router();

// Resources
const { MessagesResources } = require('../resources')

// All routes
router.use('/messages', MessagesResources);


module.exports = router;