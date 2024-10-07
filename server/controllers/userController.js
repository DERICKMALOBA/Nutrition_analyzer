// user.controller.js
const User = require('../models/User'); // Make sure to replace with your actual User model

// Function to get user data
const getUserData = async (req, res) => {
    const userId = req.params.id; // Assuming user ID is passed as a URL parameter

    try {
        const user = await User.findById(userId); // Fetch user from database
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        // Format user data to send to the front end
        const userData = {
            name: user.name,
            age: user.age,
            height: user.height,
            weight: user.weight,
            activityLevel: user.activityLevel,
            caloriesIntake: user.caloriesIntake,
            caloriesGoal: user.caloriesGoal,
            macronutrients: user.macronutrients,
            recentMeals: user.recentMeals,
            mealSuggestions: user.mealSuggestions,
            activities: user.activities,
            goals: user.goals,
            profilePicture: user.profilePicture
        };

        res.status(200).json(userData); // Send user data
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getUserData
};
