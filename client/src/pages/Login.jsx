import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      // Assuming the response contains a token
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
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
          <button type="submit" className="p-2 bg-blue-500 text-white rounded w-full">
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
  Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
</p>

      </div>
    </div>
  );
};

export default Login;
