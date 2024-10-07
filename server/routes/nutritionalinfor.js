// nutritionalInfo.routes.js
const express = require('express');
const router = express.Router();
const { getNutritionalInfo } = require('./nutritionalInfo.controller');

// Route to get nutritional information for a specific food item
router.get('/food-item/:id', getNutritionalInfo); // Assuming food item ID is passed in the URL

module.exports = router;
