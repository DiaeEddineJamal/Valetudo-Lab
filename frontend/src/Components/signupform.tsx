import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
interface SignupFormProps {
  // Add any additional props you might need here
}

function SignupForm(props: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody: { email: string; username: string; password: string } = {
      email,
      username,
      password
    };

    try {
      const response = await axios.post('http://localhost:8080/signup', requestBody);

      if (response.status === 200) {
        console.log('Signup successful');
       
         // Redirect to the login page
      } else {
        console.error('Signup failed');
        // Handle signup failure logic here, e.g., display an error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors or other unexpected issues here
    }
    navigate('/loginform');
  };

  return (
    <div className="App-header">
      <h1 className='page-title'>Fitness Fitness ‍♀️</h1>
      <div className="content-container">
        <div className="form-container">
          <h2 className="signup-title">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{' '}
            <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;