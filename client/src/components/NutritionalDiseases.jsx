import React from 'react';

const NutritionalDiseases = () => {
  const diseases = [
    {
      name: "Scurvy",
      description: "A deficiency of vitamin C, leading to symptoms like fatigue, gum disease, and skin issues."
    },
    {
      name: "Rickets",
      description: "A condition in children caused by a lack of vitamin D, calcium, or phosphate, resulting in soft and weak bones."
    },
    {
      name: "Beriberi",
      description: "Caused by a deficiency of vitamin B1 (thiamine), leading to issues with the nervous system and cardiovascular system."
    },
    {
      name: "Pellagra",
      description: "A deficiency of niacin (vitamin B3), characterized by dermatitis, diarrhea, and dementia."
    },
    {
      name: "Iron Deficiency Anemia",
      description: "A common type of anemia caused by insufficient iron in the body, leading to fatigue and weakness."
    },
    {
      name: "Kwashiorkor",
      description: "A severe form of malnutrition caused by a lack of protein in the diet, resulting in swollen abdomen and stunted growth."
    },
    {
      name: "Marasmus",
      description: "A form of severe malnutrition characterized by energy deficiency, leading to weight loss and muscle wasting."
    }
  ];

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Nutritional Diseases</h1>
      <p className="text-gray-700 mb-6">
        Nutritional diseases arise from an imbalance of nutrients in the diet. Here are some common nutritional diseases you should be aware of:
      </p>

      <div className="flex flex-wrap -mx-4">
        {diseases.map((disease, index) => (
          <div key={index} className="w-full sm:w-1/2 p-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{disease.name}</h2>
              <p className="text-gray-600">{disease.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-2">Preventing Nutritional Diseases</h2>
      <p className="text-gray-700 mb-4">
        To prevent nutritional diseases, ensure a balanced diet that includes a variety of foods rich in essential vitamins and minerals. Regular check-ups and consultations with a healthcare provider or nutritionist can also help in maintaining optimal nutrition.
      </p>
    </div>
  );
};

export default NutritionalDiseases;
