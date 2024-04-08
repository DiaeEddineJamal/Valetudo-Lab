import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import './App.css'; // Import your custom CSS file

const CarouselAndStuff = () => {
  return (
    <section id="carousel-section">
      {/* Carousel Section */}
      <div className="container">
        <Carousel id="myCarousel" fade={true} indicators={false} controls={true}>
          <Carousel.Item>
            <h3>"trop deblaballaaaa."</h3>
            <h4>Sous titre blabla</h4>
          </Carousel.Item>
          <Carousel.Item>
            <h3>"A replir lol fkfkddlddd."</h3>
            <h4>sous titre blabla2</h4>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* End of Carousel Section */}
      {/* New Section with Cards */}
      <section id="featured-services" className="featured-services">
        <div className="container" data-aos="fade-up">
          <div className="row">
            {/* First Card */}
            <div className="col-md-4">
              <div className="card">
                <img src="placeholder.jpg" alt="Placeholder" />
                <div className="card-body">
                  <h5 className="card-title">Title 1</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            {/* Second Card */}
            <div className="col-md-4">
              <div className="card">
                <img src="placeholder.jpg" alt="Placeholder" />
                <div className="card-body">
                  <h5 className="card-title">Title 2</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            {/* Third Card */}
            <div className="col-md-4">
              <div className="card">
                <img src="placeholder.jpg" alt="Placeholder" />
                <div className="card-body">
                  <h5 className="card-title">Title 3</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CarouselAndStuff;
