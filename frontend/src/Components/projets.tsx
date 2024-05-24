import React from 'react';
import { FaCode, FaDatabase, FaNetworkWired, FaRobot, FaShieldAlt, FaBrain } from 'react-icons/fa';

const ProjetsSection: React.FC = () => {
  return (
    <section id="projets" className="services">
      <div className="container">
        <div className="section-title">
          <h2><u>Projets de recherche</u></h2>
          <p>
            Explorez les projets passionnants sur lesquels notre laboratoire travaille actuellement.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <FaCode style={{ width: '1000000px'}}/>
              </div>
              <h4>
                <a href="#">Développement de logiciels</a>
              </h4>
              <p>
                Création et optimisation de logiciels pour diverses applications industrielles et commerciales.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon">
                <FaDatabase style={{ width: '1000000px'}} />
              </div>
              <h4>
                <a href="#">Gestion des données</a>
              </h4>
              <p>
                Recherche sur les méthodes de stockage, de récupération et de gestion des grandes quantités de données.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon">
                <FaNetworkWired style={{ width: '1000000px'}}/>
              </div>
              <h4>
                <a href="#">Réseaux et communication</a>
              </h4>
              <p>
                Étude des architectures de réseaux et des protocoles de communication pour améliorer la connectivité.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <FaRobot style={{ width: '1000000px'}}/>
              </div>
              <h4>
                <a href="#">Intelligence artificielle</a>
              </h4>
              <p>
                Développement d'algorithmes d'apprentissage automatique et de systèmes intelligents.
              </p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
                <FaShieldAlt style={{ width: '1000000px'}} />
              </div>
              <h4>
                <a href="#">Cybersécurité</a>
              </h4>
              <p>
                Recherche sur les techniques de protection contre les cybermenaces et les attaques informatiques.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
              <div className="icon">
              <FaBrain style={{ width: '100%' }}/>

              </div>
              <h4>
                <a href="#">Informatique cognitive</a>
              </h4>
              <p>
                Étude des systèmes informatiques capables de simuler le comportement humain et de résoudre des problèmes complexes.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProjetsSection;
