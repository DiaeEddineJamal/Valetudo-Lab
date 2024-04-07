import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import CarouselInfos from './Components/carouselinfos';
import directeurpic from './Components/images/directeurpic.jpg';
import { Carousel } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <div className="logo">
          <img src="" alt="logo" />
        </div>
        <ul id="MyUL">
          <li><a href="">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Projets de recherche</a></li>
          <li><a href="#">Membres</a></li>
          <li><a href="#">Publications</a></li>
          {/* Add more list items for additional sections */}
        </ul>
      </nav>
      <div className="homepage">
        {/* Carousel Section */}
        <section id="recommandations">
          <div className="container">
            <div className="red-divider"></div>
            <div className="heading">
              <h2>WELCOME TO OUR LAB!</h2>
            </div>
            {/* Carousel Component */}
            <Carousel id="myCarousel" fade={true} indicators={false} controls={true}>
              <Carousel.Item>
                <h3>Our visison is clear</h3>
                <h4>Sous-titre blabla</h4>
              </Carousel.Item>
              <Carousel.Item>
                <h3>"A replir lol"</h3>
                <h4>Sous-titre blabla2</h4>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
        {/* End of Carousel Section */}
        {/* Scrolling Information */}
        <div className="scrolling-text-container">
          <div className="scrolling-text">
            "Preparing for tomorrow through education is like investing in your future passport, as it's not just about what you know, but how you approach learning and adaptability."
          </div>
        </div>
        {/* End of Scrolling Information */}
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
        {/* End of New Section with Cards */}
        {/* Mot du Directeur */}
        <div className="motdedirecteur">
          <h1>Mot du Directeur</h1>
          <img src={directeurpic} alt="directeur" />
          <p>En tant que directeur de laboratoire, je suis enthousiaste à l'idée de mettre en lumière les multiples utilités de notre site, le transformant en un pôle d'innovation. Au-delà de son infrastructure physique, notre site sert de point de convergence pour la collaboration, où une expertise diversifiée se réunit pour favoriser des idées révolutionnaires. Notre équipement de pointe et nos ressources permettent aux chercheurs d'explorer les frontières de la science et de la technologie, entraînant des découvertes dans divers domaines. De plus, notre engagement à favoriser un écosystème dynamique de créativité et d'interrogation nourrit un environnement propice à l'idéation. En facilitant les échanges interdisciplinaires et en offrant de nombreuses opportunités d'expérimentation, notre site transcende sa simple fonction de laboratoire pour devenir un catalyseur d'idées transformatrices qui ont le potentiel de remodeler les industries et d'améliorer les vies.</p>
        </div>
        {/* End of Mot du Directeur */}
      </div>
    </div>
  );
};

export default App;
