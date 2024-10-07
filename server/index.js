const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authroute'); // Auth route
const userRouter = require('./routes/userRoute'); // User route
const profileRouter = require('./controllers/Profile'); // Profile route

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const MONGODB_CONNECTION_STRING = "mongodb://localhost:27017/nutrient";
mongoose.connect(MONGODB_CONNECTION_STRING)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRouter);  // Authentication routes
app.use('/api/user', userRouter);
app.use('/api/user', profileRouter);  // Profile routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
