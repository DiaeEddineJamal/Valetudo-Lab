import React from 'react';
import { Link } from 'react-router-dom';
import './Choose.css'


// Home Page
const Choose: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Choose Your Destination</h1>
      <div className="button-container">
        <Link to="/admin">
          <button className="button">Add Components</button>
        </Link>
        <Link to="/admindelete">
          <button className="button">Delete Componenets</button>
        </Link>
      </div>
    </div>
  );
};

// Page 1

export default Choose;