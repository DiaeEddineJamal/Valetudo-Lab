import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiReceipt, BiCubeAlt, BiImages } from 'react-icons/bi'; // Importer BoxIcons
import './App.css';
import directeurpic from './Components/images/directeurpic.jpg';
import researcher1 from './Components/images/researcher1.jpg';
import researcher2 from './Components/images/researcher2.jpg';
import researcher3 from './Components/images/researcher3.jpg';
import { Link } from 'react-router-dom';
import ouahmanePic from './assets/img/chercheurs/Ouahmane.png';
import { FaUserMd, FaMicroscope, FaFlask, FaMedal } from 'react-icons/fa';
import lol from './assets/img/chercheurs/Aatila_Mustapha2.jpg';
import DoctorantsPage from './Components/DoctorantPage'; 
import logo from './Components/images/logo.png' 
import ProjetsSection from './Components/projets';
import EquipesSection from './Components/equipesection';
import Footer from './Components/footer';
import ChercheursSection from './Components/researchers';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// emplacez Ri par le préfixe de votre bibliothèque d'icônes

const logoStyle = {
  width: '130px',
  height: '38px'
};

const HomePage: React.FC = () => {

  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [labName, setLabName] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/laboratories');
      const data = await response.json();
      if (data && data.length > 0) {
        setAddress(data[0].address);
        setPhoneNumber(data[0].phoneNumber);
        setLabName(data[0].name);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">

      <nav>
        <div className="logo">
          <img src={logo} alt="logo" style={logoStyle} />
        </div>
        <ul id="MyUL">
          <li><a href="/">Acceuil</a></li>
          <li><a href="#about">A propos</a></li>
          <li><a href="#">Projet de recherche</a></li>
          <li><a href="#chercheurs">Membre</a></li>
          <li><Link to="/pub">Publication</Link></li>
          <li><Link to="/loginform">Admin Panel</Link></li>
          {/* Add more list items for other sections */}
        </ul>
      </nav>

      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1>{labName}</h1>
          <h2>Laboratoire de Technologies de l'Information {labName}</h2>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
        </div>
      </section>

      <main id="main">
        <section id="why-us" className="why-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Présentation</h3>
                  <p>
                    Le laboratoire de Technologies de l'Information {labName} est une structure de recherche domiciliée au département TRI et rattachée à l’École Nationale des Sciences Appliquées d’El Jadida (ENSAJ) de l’université Chouaib Doukkali. Le {labName} a pour objectif d’inciter, de faciliter et de coordonner les activités <span id="suite">de recherche scientifique de ses membres, à titre individuel, mais surtout dans le cadre de projets collectifs à dimension nationale ou internationale. Il contribue à la production, à la diffusion et à la valorisation des travaux de recherche autour des technologies de l’information, ainsi qu’à la formation doctorale en Télécommunication, Réseaux et Informatique appliquée aux Techniques de Communications  et en sciences de l’information.</span>
                  </p>
                  <div className="text-center">
                    <a id="read" href="javascript:{}" className="more-btn">Lire plus <i className="bx bx-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <BiReceipt  style={{ width: '36px', height: '36px' }} /> {/* Utiliser BiReceipt */}
                        <h4>Rigueur & Intégrité Scientifique</h4>
                        <p>Contribuer à l'avancement des connaissances scientifiques</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <BiCubeAlt style={{ width: '36px', height: '36px' }} /> {/* Utiliser BiCubeAlt */}
                        <h4>Atteinte de l’Excellence</h4>
                        <p>Assurer la formation des chercheurs de demain dans le domaine du numérique</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <BiImages style={{ width: '36px', height: '36px' }} />
                        <h4>Partage des Connaissances</h4>
                        <p>Accroître l’innovation en développant de nouvelles solutions technologiques à fort impact socio-économique</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2><u>MOT DU DIRECTEUR</u></h2>
            </div>
            <div className="container-fluid">
              <div className="row align-content-center testimonials">
                <div className="col-xl-11 col-lg-11 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src={ouahmanePic} className="testimonial-img" alt="Directeur" />
                      <h3>Prof. Hassan Ouahmane</h3>
                      <h4>Directeur du laboratoire</h4>
                      <p>
                      Bienvenue au laboratoire de Technologies de l'Information {labName}. Notre mission est de promouvoir l'excellence en recherche et en formation dans le domaine des technologies de l'information. Grâce à nos équipes de chercheurs dévoués et à nos collaborations avec des partenaires académiques et industriels, nous visons à faire avancer les connaissances et à développer des solutions innovantes qui répondent aux défis contemporains. Nous sommes fiers de nos réalisations et nous nous engageons à continuer à contribuer à la science et à la société. Rejoignez-nous dans cette passionnante aventure scientifique.
              
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="counts" className="counts">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <FaUserMd className="icon" /> {/* Utilisez l'icône FaUserMd */}
              <span data-toggle="counter-up">18</span>
              <p >Chercheurs</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
            <FaMicroscope className="icon" /> {/* Utilisez l'icône FaMicroscope */}
              <span data-toggle="counter-up">3</span>
              <p>Equipes</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <FaFlask className="icon" /> {/* Utilisez l'icône FaFlask */}
              <span data-toggle="counter-up">20</span>
              <p>Doctorants</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <FaMedal className="icon" /> {/* Utilisez l'icône FaMedal */}
              <span data-toggle="counter-up">5</span>
              <p>Projets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
   <ProjetsSection></ProjetsSection>
   <EquipesSection></EquipesSection>
    <ChercheursSection></ChercheursSection>
   
      
    <section id="testimonials" className="testimonials" style={{ backgroundColor: 'slategrey' }}>
      <div className="container">
        
      <DoctorantsPage />
       

      </div>
    </section>
    <section id="contact" className="contact">
  <div className="container">
    <div className="section-title">
      <h2>Contact</h2>
      <div className="contact-details">
        <div className="contact-item">
          <div className="contact-icon">
            <i className="icofont-google-map"></i>
            <FaMapMarkerAlt /> {/* Ajoutez l'icône de localisation */}
          </div>
          <div className="contact-info">
            <h4>Location:</h4>
            <p>{address}</p>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <i className="icofont-phone"></i>
            <FaPhone /> {/* Ajoutez l'icône d'appel téléphonique */}
          </div>
          <div className="contact-info">
            <h4>Call:</h4>
            <p>{phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <iframe style={{ border: '0', width: '100%', height: '350px' }} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=31.718790,-8.096950&t=&z=16&ie=UTF8&iwloc=B&output=embed"></iframe>
  </div>
</section>


      </main>
        {/* ======= Footer ======= */}
        <Footer></Footer>

    </div>
  );
};

export default HomePage;
