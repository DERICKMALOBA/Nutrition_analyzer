import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('/api/reports');
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Diet Reports</h1>
        <ul>
          {reports.map((report, index) => (
            <li key={index} className="mb-4">
              <h3 className="font-semibold">{report.date}</h3>
              <p>Calories: {report.calories} kcal</p>
              <p>Protein: {report.protein} g</p>
              <p>Carbs: {report.carbs} g</p>
              <p>Fat: {report.fat} g</p>
              <div className="mt-2">
                <h4 className="font-semibold">Vitamins:</h4>
                <ul>
                  {report.vitamins.map((vitamin, i) => (
                    <li key={i}>{vitamin.name}: {vitamin.amount} mg</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reports;
