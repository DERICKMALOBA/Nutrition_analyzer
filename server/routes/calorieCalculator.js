// calorieCalculator.routes.js
const express = require('express');
const router = express.Router();
const { calculate } = require('./calorieCalculator.controller');

// Route to handle calorie calculation
router.post('/calculate', calculate);

module.exports = router;
