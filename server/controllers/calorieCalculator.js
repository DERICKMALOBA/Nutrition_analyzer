// calorieCalculator.controller.js
const calculateCalories = (gender, weight, heightCm, activity) => {
    let BMR = 0;

    // Using average age as 25, BMR calculation
    if (gender === 'male') {
        BMR = 88.362 + (13.397 * weight) + (4.799 * heightCm) - (5.677 * 25);
    } else {
        BMR = 447.593 + (9.247 * weight) + (3.098 * heightCm) - (4.330 * 25);
    }

    // Activity multiplier
    const activityMultiplier = {
        sedentary: 1.2,
        moderate: 1.55,
        active: 1.725,
    };

    // Maintenance calories
    const maintenanceCalories = BMR * activityMultiplier[activity];
    const deficitCalories = maintenanceCalories - 500; // 500 calorie deficit for weight loss

    return { maintenanceCalories: maintenanceCalories.toFixed(0), deficitCalories: deficitCalories.toFixed(0) };
};

// Function to handle calorie calculation
const calculate = (req, res) => {
    const { feet, inches, weight, gender, activity } = req.body;

    // Convert feet and inches to total height in cm
    const totalInches = (parseFloat(feet) * 12) + parseFloat(inches);
    const heightCm = totalInches * 2.54;

    // Calculate the calories
    const result = calculateCalories(gender, weight, heightCm, activity);

    res.status(200).json({
        maintenanceCalories: result.maintenanceCalories,
        calorieDeficit: result.deficitCalories
    });
};

module.exports = {
    calculate
};
