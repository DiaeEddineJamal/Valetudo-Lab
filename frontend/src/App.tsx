import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import CarouselInfos from './Componenets/carouselinfos';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About us">About us</a></li>
          <li><a href="#Members">Members</a></li>
          {/* Add more list items for additional sections */}
        </ul>
      </nav>
      <div className="homepage">
        <h2>Welcome to Our Lab</h2>
        <CarouselInfos />
        <div className="principles-values-container">
          <div className="card">
            <h3>Principle 1</h3>
            <p>Description of principle 1.</p>
          </div>
          <div className="card">
            <h3>Principle 2</h3>
            <p>Description of principle 2.</p>
          </div>
          {/* Add more cards for additional principles and values */}
        </div>
      </div>
    </div>
  );
};

export default App;
