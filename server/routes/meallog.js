const express = require('express');
const { logMeal } = require('../controllers/mealLogController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/', authMiddleware, logMeal);

module.exports = router;
