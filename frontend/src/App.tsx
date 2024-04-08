import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import './App.css'; // Import your custom CSS file
import directeurpic from './Components/images/directeurpic.jpg';
import researcher1 from './Components/images/researcher1.jpg'; // Import researcher images
import researcher2 from './Components/images/researcher2.jpg'; // Import researcher images
import researcher3 from './Components/images/researcher3.jpg'; // Import researcher images

const HomePage: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <div className="logo">
          <img src="" alt="logo" /> {/* Add logo source */}
        </div>
        <ul id="MyUL">
          <li><a href="#">Acceuil</a></li>
          <li><a href="#motdedirecteur">A propos</a></li>
          <li><a href="#">Projet de recherche</a></li>
          <li><a href="#">Membre</a></li>
          <li><a href="#">Publication</a></li>
          {/* Add more list items for additional sections */}
        </ul>
      </nav>
      <div className="homepage">
        {/* Carousel Section */}
        <section id="recommandations">
          <div className="container">
            <div className="red-divider"></div>
            <div className="heading">
              <h2>WELCOME TO OUR LAB !</h2>
            </div>
            {/* Carousel Component */}
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
        </section>
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
        {/* End of New Section with Cards */}
        {/* Title "Le Mot du Directeur" */}
        <div id="motdedirecteur" className="motdedirecteur">
          <h1 className='dirword'>Le Mot du Directeur</h1>
          <img src={directeurpic} alt="directeur" />
          <p>En tant que directeur de laboratoire, je suis enthousiaste à l'idée de mettre en lumière les multiples utilités de notre site, le transformant en un pôle d'innovation. Au-delà de son infrastructure physique, notre site sert de point de convergence pour la collaboration, où une expertise diversifiée se réunit pour favoriser des idées révolutionnaires. Notre équipement de pointe et nos ressources permettent aux chercheurs d'explorer les frontières de la science et de la technologie, entraînant des découvertes dans divers domaines. De plus, notre engagement à favoriser un écosystème dynamique de créativité et d'interrogation nourrit un environnement propice à l'idéation. En facilitant les échanges interdisciplinaires et en offrant de nombreuses opportunités d'expérimentation, notre site transcende sa simple fonction de laboratoire pour devenir un catalyseur d'idées transformatrices qui ont le potentiel de remodeler les industries et d'améliorer les vies.</p>
        </div>
        <br />
        <div id="LabPresentation" className="lab-presentation">
          <h1 className="lab-title">Présentation du Valetudo-Lab</h1>
          <p>Le Laboratoire de Recherche du Laboratoire de Science Informatique et de la Programmation Evolutive (Valetudo-Lab) est un centre de recherche de pointe spécialisé dans les domaines de l'informatique et de l'évolution des programmes.</p>
          <h2>Objectifs</h2>
          <ul>
            <li>Conduire des recherches de pointe dans les domaines de l'informatique et de la programmation évolutive.</li>
            <li>Développer des solutions innovantes pour résoudre les défis informatiques actuels et futurs.</li>
            <li>Collaborer avec d'autres institutions de recherche et de l'industrie pour favoriser l'avancement de la science informatique.</li>
            <li>Former la prochaine génération de chercheurs et de professionnels de l'informatique.</li>
            <li>Promouvoir une culture de collaboration et d'innovation au sein de la communauté scientifique.</li>
          </ul>
        </div>
        {/* Researcher Cards Section */}
        <div className='researchercards'>
          <h1 className="titrechercheurs" id='noschercheur'>Nos chercheurs</h1>
          <p className='paragchercheur'>Write something about researchers.</p>
          <div className="row">
            {/* First Researcher Card */}
            <div className="col-md-4">
              <div className="cardx">
                <img src={researcher1} alt="Researcher 1" />
                <div className="card-body">
                  <h5 className="card-title">Researcher Name 1</h5>
                  <p className="card-text">Description of Researcher 1.</p>
                </div>
              </div>
            </div>
            {/* Second Researcher Card */}
            <div className="col-md-4">
              <div className="cardx">
                <img src={researcher2} alt="Researcher 2" />
                <div className="cardx-body">
                  <h5 className="cardx-title">Researcher Name 2</h5>
                  <p className="cardx-text">Description of Researcher 2.</p>
                </div>
              </div>
            </div>
            {/* Third Researcher Card */}
            <div className="col-md-4">
              <div className="cardx">
                <img src={researcher2} alt="Researcher 3" />
                <div className="cardx-body">
                  <h5 className="cardx-title">Researcher Name 3</h5>
                  <p className="cardx-text">Description of Researcher 3.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Researcher Cards Section */}
        <div className='researchercards'>
          <h1 className="titrechercheurs">Nos Doctorant</h1>
          <p className='paragchercheur'>Write something about researchers. al mbezla</p>
          <div className="row">
            {/* First Researcher Card */}
            <div className="col-md-4">
              <div className="cardx">
                <img src={researcher1} alt="doctorant1" />
                <div className="card-body">
                  <h5 className="card-title">doctorant Name 1</h5>
                  <p className="card-text">Description .</p>
                </div>
              </div>
            </div>
            {/* Second Researcher Card */}
            <div className="col-md-4">
              <div className="cardx">
                <img src={researcher2} alt="Researcher 2" />
                <div className="cardx-body">
                  <h5 className="cardx-title">Researcher Name 2</h5>
                  <p className="cardx-text">Description of Researcher 2.</p>
                </div>
              </div>
            </div>
            {/* Third Researcher Card */}
            <div className="col-md-4">
              <div className="cardx">
                <img src={researcher2} alt="Researcher 3" />
                <div className="cardx-body">
                  <h5 className="cardx-title">Researcher Name 3</h5>
                  <p className="cardx-text">Description of Researcher 3.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
