import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [dietaryPreferences, setDietaryPreferences] = useState('');
  const [foodAllergies, setFoodAllergies] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
        dateOfBirth,
        gender,
        height,
        weight,
        activityLevel,
        goalWeight,
        dietaryPreferences,
        foodAllergies,
      });
      navigate('/login');
    } catch (err) {
      setError('Error signing up. Try again.');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSignup}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="mb-4 p-2 w-full border rounded"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 p-2 w-full border rounded"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 p-2 w-full border rounded"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="mb-4 p-2 w-full border rounded"
          />
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            placeholder="Date of Birth"
            className="mb-4 p-2 w-full border rounded"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mb-4 p-2 w-full border rounded"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height (cm)"
            className="mb-4 p-2 w-full border rounded"
          />
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight (kg)"
            className="mb-4 p-2 w-full border rounded"
          />
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="mb-4 p-2 w-full border rounded"
          >
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="lightly active">Lightly Active</option>
            <option value="active">Active</option>
            <option value="very active">Very Active</option>
          </select>
          <input
            type="number"
            value={goalWeight}
            onChange={(e) => setGoalWeight(e.target.value)}
            placeholder="Goal Weight (kg)"
            className="mb-4 p-2 w-full border rounded"
          />
          <input
            type="text"
            value={dietaryPreferences}
            onChange={(e) => setDietaryPreferences(e.target.value)}
            placeholder="Dietary Preferences (e.g., vegan, keto)"
            className="mb-4 p-2 w-full border rounded"
          />
          <input
            type="text"
            value={foodAllergies}
            onChange={(e) => setFoodAllergies(e.target.value)}
            placeholder="Food Allergies"
            className="mb-4 p-2 w-full border rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
