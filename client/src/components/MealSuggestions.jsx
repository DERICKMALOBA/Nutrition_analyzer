import React, { useState, useEffect } from 'react';

// Replace with your actual API key
const API_KEY = '46ff7e9e936b4085a7410f4d9a1ba6b4'; 

const MealSuggestions = () => {
  const [meals, setMeals] = useState([]); // State to hold meal suggestions
  const [filter, setFilter] = useState(''); // State for filtering meals
  const [loading, setLoading] = useState(true); // State for loading

  // Effect to fetch meals based on user preferences
  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        // Fetch meals from Spoonacular API
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&diet=${filter}&number=30`);
        const data = await response.json();
        
        // Set meals from API data
        const fetchedMeals = data.results.map(meal => ({
          id: meal.id,
          name: meal.title,
          image: meal.image,
          description: meal.summary || 'No description available.',
          nutrition: {
            calories: meal.nutrition ? meal.nutrition.calories : 'N/A',
            protein: meal.nutrition ? meal.nutrition.protein : 'N/A',
            carbs: meal.nutrition ? meal.nutrition.carbs : 'N/A',
            fat: meal.nutrition ? meal.nutrition.fat : 'N/A',
          },
          dietaryTags: meal.diets || [], // Ensure dietaryTags is always an array
        }));

        setMeals(fetchedMeals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [filter]);

  // Filter meals based on dietary tags
  const filteredMeals = meals.filter(meal => {
    return filter === '' || (Array.isArray(meal.dietaryTags) && meal.dietaryTags.includes(filter));
  });

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl text-blue-700 font-bold mb-4">Meal Suggestions</h1>
        <p className="text-gray-600 mb-4">
          Discover personalized meal suggestions tailored to your dietary preferences.
        </p>

        {/* Dietary Filter */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="dietary-filter">
            Filter by Dietary Preference:
          </label>
          <select
            id="dietary-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded p-2"
          >
            <option value="">All</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="low-carb">Low Carb</option>
            <option value="high-protein">High Protein</option>
            <option value="gluten-free">Gluten Free</option>
            {/* Add more dietary options as needed */}
          </select>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <p className="text-gray-600">Loading meals...</p>
        ) : (
          // Meal Cards
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMeals.length > 0 ? (
              filteredMeals.map((meal) => (
                <div key={meal.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <img src={meal.image} alt={meal.name} className="mx-auto mb-4 rounded-lg shadow-md h-40 w-full object-cover" />
                  <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
                  <p className="text-gray-600 mb-4">{meal.description}</p>
                  <div className="mb-4">
                    <h4 className="font-bold">Nutritional Info:</h4>
                    <p>Calories: {meal.nutrition.calories}</p>
                    <p>Protein: {meal.nutrition.protein}g</p>
                    <p>Carbs: {meal.nutrition.carbs}g</p>
                    <p>Fat: {meal.nutrition.fat}g</p>
                  </div>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600">
                    View Recipe
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No meals found for the selected preference.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MealSuggestions;
