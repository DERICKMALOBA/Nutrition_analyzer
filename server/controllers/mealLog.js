const Meal = require('../models/Meal');

exports.logMeal = async (req, res) => {
  const { name, calories, protein, carbs, fat, vitamins } = req.body;
  try {
    const newMeal = new Meal({ name, calories, protein, carbs, fat, vitamins, userId: req.user.id });
    await newMeal.save();
    res.status(201).json({ message: 'Meal logged successfully', meal: newMeal });
  } catch (err) {
    res.status(500).json({ message: 'Error logging meal', error: err.message });
  }
};
