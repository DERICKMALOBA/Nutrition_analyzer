// nutritionalInfo.controller.js
const FoodItem = require('../models/FoodItem'); // Replace with your actual FoodItem model

// Function to get nutritional information for a food item
const getNutritionalInfo = async (req, res) => {
    const foodItemId = req.params.id; // Assuming food item ID is passed as a URL parameter

    try {
        const foodItem = await FoodItem.findById(foodItemId); // Fetch food item from database
        if (!foodItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        // Format nutritional data to send to the front end
        const nutritionalData = {
            name: foodItem.name,
            calories: foodItem.calories,
            protein: foodItem.protein,
            carbs: foodItem.carbs,
            fat: foodItem.fat,
            vitamins: foodItem.vitamins, // Assuming vitamins is an array of objects with name and amount
        };

        res.status(200).json(nutritionalData); // Send nutritional data
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getNutritionalInfo,
};
