import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import MealLog from './components/MealLog';

import NutritionalInfo from './components/NutritionalInfo'; 
import Reports from './components/Reports';
import About from './pages/About';  
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Footer from './components/footer';
import MealSuggestions from './components/MealSuggestions';
import CalorieCalculator from './components/CalorieCalculator';
import NutritionalDiseases from './components/NutritionalDiseases';


function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/meal-log" element={<MealLog />} />
        <Route path="/meal-suggestions" element={<MealSuggestions />} />
        <Route path="/nutritional-info" element={<NutritionalInfo />} /> {/* NutritionalInfo route */}
        <Route path="/reports" element={<Reports />} />
        <Route path="/calorie-calculator" element={<CalorieCalculator />} />
        <Route path="/nutritional-diseases" element={<NutritionalDiseases />} />
        <Route path="/about" element={<About />} /> {/* About route */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
