const express = require('express');
const userRouter = express.Router();
const { getUserData } = require('../controllers/userController');

// Route to get user data
userRouter.get('/user/:id', getUserData); // Using userRouter instead of router

module.exports = userRouter;
