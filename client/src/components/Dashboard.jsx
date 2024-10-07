import React from 'react';
import { useUserContext } from '../context/userContext';

const Dashboard = () => {
  // Fetch user context; if no context, fallback to an empty object
  const { user } = useUserContext() || {}; 

  // Show loading state while user data is being fetched
  if (!user) {
    return <div className="min-h-screen p-8 bg-gray-100">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl text-red-700 font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-4">Track your nutrition and progress here.</p>
        
        {/* User Profile Summary */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">User Profile</h2>
          <div className="flex items-center mb-4">
            <img src={user.profilePicture} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-gray-600">Age: {user.age}</p>
              <p className="text-gray-600">Height: {user.height}</p>
              <p className="text-gray-600">Weight: {user.weight}</p>
              <p className="text-gray-600">Activity Level: {user.activityLevel}</p>
            </div>
          </div>
        </div>

        {/* Daily Nutrition Overview */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Daily Nutrition Overview</h2>
          <p className="mb-2">Calories: {user.caloriesIntake} / {user.caloriesGoal} (Goal)</p>
          <div className="flex justify-center mb-4">
            {/* Placeholder for a pie chart or bar graph of macronutrients */}
            <div className="bg-gray-300 h-40 w-40 rounded-full flex items-center justify-center">
              <span className="text-center">Macronutrient Chart</span>
            </div>
          </div>
          <p className="text-gray-600">Carbs: {user.macronutrients.carbPercentage}%, Fats: {user.macronutrients.fatPercentage}%, Proteins: {user.macronutrients.proteinPercentage}%</p>
        </div>

        {/* Meal Tracking */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Meal Tracking</h2>
          <p className="text-gray-600 mb-2">Log your meals for the day:</p>
          <button className="p-2 bg-blue-500 text-white rounded">Add New Meal</button>
          <p className="mt-4 text-gray-600">Recent Meals:</p>
          <ul className="list-disc ml-5">
            {user.recentMeals.map(meal => (
              <li key={meal.id}>{meal.name}</li>
            ))}
          </ul>
        </div>

        {/* Progress Tracker */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Progress Tracker</h2>
          <p className="text-gray-600 mb-2">Weight changes over time:</p>
          {/* Placeholder for a graph showing weight changes */}
          <div className="bg-gray-300 h-40 rounded-lg flex items-center justify-center">
            <span className="text-center">Weight Progress Graph</span>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Recommendations</h2>
          <p className="text-gray-600">Personalized meal suggestions:</p>
          <ul className="list-disc ml-5">
            {user.mealSuggestions.map((meal, index) => (
              <li key={index}>{meal}</li>
            ))}
          </ul>
        </div>

        {/* Hydration Tracker */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Hydration Tracker</h2>
          <p className="text-gray-600">Log your water intake:</p>
          <button className="p-2 bg-blue-500 text-white rounded">Add Water Intake</button>
        </div>

        {/* Activity Log */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Activity Log</h2>
          <p className="text-gray-600">Overview of physical activities:</p>
          <ul className="list-disc ml-5">
            {user.activities.map(activity => (
              <li key={activity.id}>{activity.name}: {activity.duration} minutes</li>
            ))}
          </ul>
        </div>

        {/* Goals and Reminders */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Goals and Reminders</h2>
          <p className="text-gray-600">Short-term goals:</p>
          <ul className="list-disc ml-5">
            {user.goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>

        {/* Community and Support */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Community and Support</h2>
          <p className="text-gray-600">Join our forums and support groups!</p>
          <button className="p-2 bg-blue-500 text-white rounded">Visit Community</button>
        </div>

        {/* Settings and Account Management */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Settings and Account Management</h2>
          <button className="p-2 bg-blue-500 text-white rounded">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
