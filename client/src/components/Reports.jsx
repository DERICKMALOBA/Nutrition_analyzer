import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toPng } from 'html-to-image';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Report = () => {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await axios.get('/api/meals/user');
        const meals = response.data;

        // Filter meals by date range here if needed

        const totalCalories = meals.reduce((total, meal) => total + meal.calories, 0);
        const protein = meals.reduce((total, meal) => total + meal.protein, 0);
        const carbohydrates = meals.reduce((total, meal) => total + meal.carbohydrates, 0);
        const fats = meals.reduce((total, meal) => total + meal.fats, 0);
        const mealCount = meals.length;

        const nutrientData = {
          labels: ['Protein', 'Carbohydrates', 'Fats'],
          datasets: [
            {
              label: 'Nutrient Breakdown (g)',
              data: [protein, carbohydrates, fats],
              backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            },
          ],
        };

        const mealDistribution = {
          labels: meals.map(meal => meal.name),
          datasets: [
            {
              data: meals.map(meal => meal.calories),
              backgroundColor: meals.map(() => `#${Math.floor(Math.random()*16777215).toString(16)}`),
            },
          ],
        };

        setReportData({ totalCalories, nutrientData, mealDistribution, mealCount });
      } catch (error) {
        console.error("Error fetching report data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  const handleDownload = () => {
    const node = document.getElementById('report-container');
    
    toPng(node)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'nutrition_report.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error('Oops, something went wrong!', error);
      });
  };

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading report...</div>;
  }

  return (
    <div className="p-6 bg-white rounded shadow-lg max-w-3xl mx-auto" id="report-container">
      <h2 className="text-2xl font-bold mb-4">Personalized Nutrition Report</h2>
      <div className="flex space-x-4 mb-4">
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
      <button onClick={handleDownload} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Download Report
      </button>
      {reportData ? (
        <div>
          <p className="text-lg">Total Calories: <span className="font-semibold">{reportData.totalCalories}</span></p>
          <p className="text-lg">Total Meals Logged: <span className="font-semibold">{reportData.mealCount}</span></p>
          
          <h3 className="text-xl font-semibold mt-6">Nutrient Breakdown</h3>
          <Bar data={reportData.nutrientData} options={{ responsive: true, maintainAspectRatio: false }} height={200} className="my-4" />

          <h3 className="text-xl font-semibold mt-6">Meal Distribution by Calories</h3>
          <Pie data={reportData.mealDistribution} options={{ responsive: true, maintainAspectRatio: false }} height={200} className="my-4" />
        </div>
      ) : (
        <p className="text-lg">No meal data available.</p>
      )}
    </div>
  );
};

export default Report;
