import React from 'react';

const NutritionalInfo = ({ foodItem }) => {
  if (!foodItem) return <p>No nutritional data available.</p>;

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
