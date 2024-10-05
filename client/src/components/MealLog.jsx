import React, { useState } from 'react';
import axios from 'axios';

const MealLog = () => {
  const [meal, setMeal] = useState({ name: '', calories: '', protein: '', carbs: '', fat: '', vitamins: [] });
  const [vitaminInput, setVitaminInput] = useState({ name: '', amount: '' });
  const [mealLogged, setMealLogged] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeal({ ...meal, [name]: value });
  };

  const handleVitaminChange = (e) => {
    const { name, value } = e.target;
    setVitaminInput({ ...vitaminInput, [name]: value });
  };

  const addVitamin = () => {
    setMeal({
      ...meal,
      vitamins: [...meal.vitamins, vitaminInput],
    });
    setVitaminInput({ name: '', amount: '' });
  };

  const logMeal = async () => {
    try {
      const response = await axios.post('/api/meals', meal);
      setMealLogged(true);
      setMeal({ name: '', calories: '', protein: '', carbs: '', fat: '', vitamins: [] });
    } catch (error) {
      console.error('Error logging meal:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Log a Meal</h1>
        <input
          type="text"
          name="name"
          value={meal.name}
          placeholder="Meal Name"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="text"
          name="calories"
          value={meal.calories}
          placeholder="Calories"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="text"
          name="protein"
          value={meal.protein}
          placeholder="Protein (g)"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="text"
          name="carbs"
          value={meal.carbs}
          placeholder="Carbs (g)"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="text"
          name="fat"
          value={meal.fat}
          placeholder="Fat (g)"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <div className="mb-4">
          <h3 className="font-semibold">Vitamins:</h3>
          <input
            type="text"
            name="name"
            value={vitaminInput.name}
            placeholder="Vitamin Name"
            onChange={handleVitaminChange}
            className="mb-2 p-2 w-full border rounded"
          />
          <input
            type="text"
            name="amount"
            value={vitaminInput.amount}
            placeholder="Amount (mg)"
            onChange={handleVitaminChange}
            className="mb-2 p-2 w-full border rounded"
          />
          <button onClick={addVitamin} className="mb-4 p-2 bg-blue-500 text-white rounded">
            Add Vitamin
          </button>
          <ul>
            {meal.vitamins.map((vitamin, index) => (
              <li key={index}>{vitamin.name}: {vitamin.amount} mg</li>
            ))}
          </ul>
        </div>
        <button onClick={logMeal} className="p-2 bg-green-500 text-white rounded w-full">
          Log Meal
        </button>
        {mealLogged && <p className="mt-4 text-green-600">Meal logged successfully!</p>}
      </div>
    </div>
  );
};

export default MealLog;
