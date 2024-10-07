import React, { useState } from 'react';
import axios from 'axios';

const CalorieCalculator = () => {
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('sedentary');
  const [gender, setGender] = useState('male');
  const [calories, setCalories] = useState(null);
  const [calorieDeficit, setCalorieDeficit] = useState(null);

  // Function to handle height input in feet and convert to inches
  const handleFeetChange = (e) => {
    setFeet(e.target.value);
  };

  // Function to handle height input in inches and convert to feet
  const handleInchesChange = (e) => {
    setInches(e.target.value);
  };

  // Function to calculate recommended calories
  const calculateCalories = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/calories/calculate', {
        feet,
        inches,
        weight,
        activity,
        gender,
      });

      setCalories(response.data.maintenanceCalories);
      setCalorieDeficit(response.data.calorieDeficit);
    } catch (error) {
      console.error('Error calculating calories:', error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Calorie Calculator</h2>
      <form onSubmit={calculateCalories} className="space-y-4">
        {/* Height Inputs */}
        <div className="flex space-x-4">
          <div>
            <label className="block mb-2">Height (Feet)</label>
            <input
              type="number"
              value={feet}
              onChange={handleFeetChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Enter height in feet"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Height (Inches)</label>
            <input
              type="number"
              value={inches}
              onChange={handleInchesChange}
              className="p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Enter height in inches"
              required
            />
          </div>
        </div>

        {/* Weight Input */}
        <div>
          <label className="block mb-2">Weight (in kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
            required
          />
        </div>

        {/* Activity Level */}
        <div>
          <label className="block mb-2">Activity Level</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
          >
            <option value="sedentary">Sedentary (Little to no exercise)</option>
            <option value="moderate">Moderate (Exercise 3-4 times/week)</option>
            <option value="active">Active (Daily exercise or intense workouts)</option>
          </select>
        </div>

        {/* Gender */}
        <div className="flex space-x-4">
          <label className="block">Gender:</label>
          <div className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
              className="mr-2"
            />
            <label>Male</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
              className="mr-2"
            />
            <label>Female</label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Calculate
          </button>
        </div>
      </form>

      {/* Display Results */}
      {calories && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Recommended Calories</h3>
          <p>Your recommended calorie intake to maintain your weight is <strong>{calories} calories/day</strong>.</p>
          <p>To lose weight, reduce your intake to <strong>{calorieDeficit} calories/day</strong> (a 500-calorie deficit).</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;
