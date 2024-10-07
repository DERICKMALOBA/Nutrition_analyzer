const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const profileRouter = express.Router();

// Middleware to authenticate the token
const authenticateToken = (req, res, next) => {
  console.log('Request Headers:', req.headers); // Log all headers for debugging
  const token = req.headers['authorization']?.split(' ')[1]; // Get the token from the Authorization header
  
  console.log('Token:', token); // Log the token
  
  if (!token) return res.sendStatus(401); // If no token, return 401 Unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => { // Use the JWT secret from .env
    if (err) {
      console.error('Token verification failed:', err); // Log any verification errors
      return res.sendStatus(403); // If token verification fails, return 403 Forbidden
    }
    req.user = user; // Attach user information to the request object
    next(); // Proceed to the next middleware or route handler
  });
};

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    console.log('Fetching user profile for user ID:', req.user.id); // Log user ID being fetched
    const user = await User.findById(req.user.id).select('-password'); // Exclude password from response
    if (!user) return res.status(404).json({ message: 'User not found' }); // If user not found, return 404

    res.status(200).json(user); // Return user data
  } catch (error) {
    console.error('Error fetching user profile:', error); // Log any errors
    res.status(500).json({ message: 'Error fetching user profile', error }); // Handle errors
  }
};

// Route to get user profile
profileRouter.get('/profile', authenticateToken, getUserProfile);

module.exports = profileRouter;
