import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NutritionalInfo = ({ foodItemId }) => {
  const [foodItem, setFoodItem] = useState(null); // State to hold the food item data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any error

  useEffect(() => {
    const fetchNutritionalInfo = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const response = await axios.get(`/api/food-item/${foodItemId}`); // Fetch the nutritional data
        setFoodItem(response.data); // Set the food item data to state
      } catch (err) {
        setError('Failed to fetch nutritional data.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (foodItemId) {
      fetchNutritionalInfo(); // Fetch the data if foodItemId is provided
    }
  }, [foodItemId]); // Dependency array includes foodItemId to refetch if it changes

  if (loading) return <p>Loading nutritional data...</p>; // Show loading message
  if (error) return <p>{error}</p>; // Show error message if there's an error
  if (!foodItem) return <p>No nutritional data available.</p>; // Handle case when no data is available

  const { name, calories, protein, carbs, fat, vitamins } = foodItem;

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p><strong>Calories:</strong> {calories} kcal</p>
      <p><strong>Protein:</strong> {protein} g</p>
      <p><strong>Carbs:</strong> {carbs} g</p>
      <p><strong>Fat:</strong> {fat} g</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Vitamins:</h3>
        <ul>
          {vitamins.map((vitamin, index) => (
            <li key={index}>{vitamin.name}: {vitamin.amount} mg</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NutritionalInfo;
