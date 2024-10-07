const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  activityLevel: { type: String, required: true },
  goalWeight: { type: Number, required: true },
  dietaryPreferences: { type: String },
  foodAllergies: { type: String },
  age: { type: Number, required: true },  // Ensure this is defined
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
