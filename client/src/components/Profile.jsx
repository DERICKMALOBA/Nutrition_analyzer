import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    dietaryPreferences: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/user/profile');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const updateProfile = async () => {
    try {
      await axios.put('/api/user/profile', profile);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <input
          type="text"
          name="name"
          value={profile.name}
          placeholder="Name"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="text"
          name="age"
          value={profile.age}
          placeholder="Age"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="text"
          name="gender"
          value={profile.gender}
          placeholder="Gender"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="text"
          name="weight"
          value={profile.weight}
          placeholder="Weight (kg)"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="text"
          name="height"
          value={profile.height}
          placeholder="Height (cm)"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="text"
          name="activityLevel"
          value={profile.activityLevel}
          placeholder="Activity Level"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="text"
          name="dietaryPreferences"
          value={profile.dietaryPreferences}
          placeholder="Dietary Preferences"
          onChange={handleInputChange}
          className="mb-4 p-2 w-full border rounded"
        />
        <button onClick={updateProfile} className="p-2 bg-blue-500 text-white rounded w-full">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
