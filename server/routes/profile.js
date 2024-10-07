const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const profileRouter = express.Router();
require('dotenv').config(); // Load environment variables from .env file

// Middleware to authenticate the token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => { // Use secret from .env
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Get user profile
profileRouter.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password from response
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error });
  }
});

module.exports = profileRouter;
