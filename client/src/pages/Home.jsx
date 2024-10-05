import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBars, FaCalculator, FaInfoCircle, FaChartLine, FaDisease, FaUtensils, FaListAlt } from 'react-icons/fa';
import logo from "../assets/logo.jpeg";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-green-600 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <button onClick={toggleMenu} className="mr-2">
              <FaBars className="text-3xl" />
            </button>

            <Link to="/" className="flex items-center text-3xl font-bold">
              <img 
                src={logo} 
                alt="NutriTrack Logo" 
                className="inline-block w-50 h-10 rounded-lg"
              />
              <span className="ml-2 hover:underline">Nutrition Analyzer</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <FaUserCircle className="text-3xl" />
            <Link to="/login" className="hover:underline">Login</Link>
          </div>
        </div>

        <div className={`fixed top-0 left-0 bg-white h-full w-64 shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col p-6 space-y-4">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Menu</h2>
            <Link to="/dashboard" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Dashboard</Link>
            <Link to="/profile" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Profile</Link>
            <Link to="/meal-log" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Meal Log</Link>
            <Link to="/meal-suggestions" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Meal Suggestions</Link>
            <Link to="/nutritional-info" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Nutritional Info</Link>
            <Link to="/nutritional-diseases" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Nutritional Diseases</Link>
            <Link to="/reports" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Reports</Link>
            <Link to="/calorie-calculator" className="block text-lg text-gray-700 hover:bg-gray-100 p-2 rounded">Calorie-Calculator</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className={`min-h-screen bg-gray-100 p-8 transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 px-8 mb-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-6">Welcome to Nutrition Analyzer</h1>
          <p className="text-center text-lg max-w-2xl mx-auto mb-10">
            Track your nutrition, meal progress, and get personalized meal suggestions. 
            NutriTrack is your companion for maintaining a healthy lifestyle by logging your daily meals, monitoring nutritional intake, and generating diet reports.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/meal-log" className="bg-white text-green-500 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200">
              Log Your Meals
            </Link>
            <Link to="/meal-suggestions" className="bg-white text-green-500 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200">
              Get Meal Suggestions
            </Link>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Calorie Calculator */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaCalculator className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Calorie Calculator</h3>
            <p className="text-gray-600 mb-4">
              Calculate your daily calorie needs and track your calorie intake.
            </p>
            <Link to="/calorie-calculator" className="text-blue-500 hover:underline">Use Calculator</Link>
          </div>

          {/* Nutritional Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaInfoCircle className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nutritional Information</h3>
            <p className="text-gray-600 mb-4">
              Access detailed nutritional information about various foods.
            </p>
            <Link to="/nutritional-info" className="text-blue-500 hover:underline">View Info</Link>
          </div>

          {/* Reports */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaChartLine className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reports</h3>
            <p className="text-gray-600 mb-4">
              Generate and view personalized nutrition reports.
            </p>
            <Link to="/reports" className="text-blue-500 hover:underline">View Reports</Link>
          </div>

          {/* Nutritional Diseases */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaDisease className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nutritional Diseases</h3>
            <p className="text-gray-600 mb-4">
              Learn about diseases related to nutrition and how to prevent them.
            </p>
            <Link to="/nutritional-diseases" className="text-blue-500 hover:underline">Learn More</Link>
          </div>

          {/* Meal Log */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaListAlt className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Meal Log</h3>
            <p className="text-gray-600 mb-4">
              Log and track your daily meals with ease.
            </p>
            <Link to="/meal-log" className="text-blue-500 hover:underline">Log Meals</Link>
          </div>

          {/* Meal Suggestions */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaUtensils className="text-green-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Meal Suggestions</h3>
            <p className="text-gray-600 mb-4">
              Get personalized meal suggestions based on your nutrition needs.
            </p>
            <Link to="/meal-suggestions" className="text-blue-500 hover:underline">Get Suggestions</Link>
          </div>
        </div>

       {/* User Testimonials Section
       <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">User Testimonials</h2>
          <p className="text-gray-600 mb-2">"NutriTrack has changed my life! I've lost 10 pounds and feel healthier than ever." - Jane D.</p>
          <p className="text-gray-600 mb-2">"The meal suggestions are personalized and delicious! I love it!" - John S.</p>
          <p className="text-gray-600 mb-2">"Logging my meals has never been easier. Thank you, NutriTrack!" - Sarah T.</p>
        </section> */}

        {/* Getting Started Guide Section
        <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">Getting Started with NutriTrack</h2>
          <ol className="list-decimal list-inside mb-4">
            <li>Create an account and set your profile.</li>
            <li>Log your meals daily.</li>
            <li>Receive personalized meal suggestions.</li>
            <li>Track your progress with diet reports.</li>
          </ol>
          <Link to="/login" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
            Sign Up Now
          </Link>
        </section> */}

        {/* Blog Section
        <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">Blog Articles</h2>
          <ul>
            <li><Link to="/blog/healthy-eating-tips" className="text-blue-500 hover:underline">Healthy Eating Tips</Link></li>
            <li><Link to="/blog/nutrition-for-athletes" className="text-blue-500 hover:underline">Nutrition for Athletes</Link></li>
            <li><Link to="/blog/benefits-of-balanced-diet" className="text-blue-500 hover:underline">Benefits of a Balanced Diet</Link></li>
          </ul>
        </section> */}
      </div>
    </div>
  );
};

export default Home;

       
