import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate for v6+
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful');
        navigate('/admin'); // Redirect to main page
      } else {
        console.error('Login failed');
        // Handle login failure appropriately, e.g., display an error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors or other issues
    }
  };

  return (
    <div className="App-header-login">
      <h1 className="page-title">Finess Fitness ‍♀️</h1>
      <div className="content-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2 className="login-title">Log In</h2>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Log In</button>
          </form>
          <p>
            Don't have an account?{' '}
            <Link to="/signupform">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
