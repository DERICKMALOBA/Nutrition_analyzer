import React from 'react';

const About = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">About Nutrition Analysis App</h1>

        <p className="text-lg mb-6">
          The Nutrition Analysis App is designed to help users track their daily nutritional intake and
          improve their overall health and wellness. Whether your goal is to lose weight, gain muscle, or
          maintain a healthy lifestyle, this app gives you the tools you need to stay on top of your nutrition.
        </p>

        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Track your meals and get detailed nutrition information.</li>
          <li>Set personalized health and dietary goals.</li>
          <li>Receive meal suggestions based on your preferences.</li>
          <li>Monitor your calorie intake and macronutrient breakdown.</li>
          <li>View reports of your progress over time.</li>
        </ul>

        <p className="text-lg mb-6">
          Our mission is to provide you with easy-to-use tools that give insights into your dietary habits, so
          you can make informed decisions about your nutrition and health. Start logging your meals and reaching
          your health goals today!
        </p>
      </div>
    </div>
  );
};

export default About;
