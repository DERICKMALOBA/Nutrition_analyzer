// models/Meal.js
const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Food item name
  calories: { type: Number, required: true }, // Total calories
  protein: { type: Number, required: true }, // Protein content
  carbs: { type: Number, required: true }, // Carbohydrate content
  fat: { type: Number, required: true }, // Fat content
  vitamins: [{ name: String, amount: Number }], // Array of vitamins
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Export the Meal model
module.exports = mongoose.model('Meal', MealSchema);
