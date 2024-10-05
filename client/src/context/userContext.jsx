// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/user/profile'); // Endpoint to fetch user data
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
