import React, { useState, useEffect } from 'react';
import axios from 'axios';
import personImage from './images/person.png'; // Import de l'image person.png
import './DocPage.css'; // Assurez-vous d'importer votre fichier CSS
import lol from './images/person.png'
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri'; 
const DoctorantsPage: React.FC = () => {
  const [doctorants, setDoctorants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/doctorants');
      setDoctorants(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section id="testimonials" className="testimonials" style={{ backgroundColor: 'slategrey' }}>
      <div className="container">
      <div className="section-title">
  <h2>Doctorants</h2>
  <p>Notre laboratoire compte actuellement plusieurs étudiants diplômés qui contribuent de manière significative à nos projets de recherche. Leur travail a un impact positif sur divers domaines de l'informatique, notamment la vision par ordinateur, l'apprentissage automatique et la sécurité informatique. Ils sont encadrés par nos chercheurs expérimentés et participent à des collaborations internationales pour repousser les frontières de la connaissance. Nos étudiants diplômés bénéficient également de nombreuses opportunités de réseautage et de développement professionnel pour les préparer à une carrière réussie dans le domaine de la recherche en informatique.</p>
</div>

        <div className="testimonials-carousel" style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div className="testimonial-wrap" style={{ flex: '0 0 auto', width: '30%' }}>
            <div className="testimonial-item">
              <img src={lol} className="testimonial-img" alt="" style={{ width: '30%' }} />
              <h3>AATILA Mustapha</h3>
              <h4>Master en Informatique</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Détection, classification et prédiction du Kératocône. Impressionné par le professionnalisme et l'expertise de cette équipe. 
      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                
              </p>
              <div className="social">
            <a href="#"><RiTwitterFill /></a>
<a href="#"><RiFacebookFill /></a>
<a href="#"><RiInstagramFill /></a>
<a href="#"><RiLinkedinBoxFill /></a>
            </div>
            </div>
            
          </div>
          <div className="testimonial-wrap" style={{ flex: '0 0 auto', width: '30%' }}>
  <div className="testimonial-item">
  <img src={lol} className="testimonial-img" alt="" style={{ width: '30%' }} />  <h3>Mohammed EL Jouali</h3>
    <h4>Consultant en informatique</h4>
    <p>
      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
      Expertise technique et leur engagement envers l'excellence ont grandement contribué au succès du projet.
      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
    </p>
    <div className="social">
      <a href="#"><RiTwitterFill /></a>
      <a href="#"><RiFacebookFill /></a>
      <a href="#"><RiInstagramFill /></a>
      <a href="#"><RiLinkedinBoxFill /></a>
    </div>
  </div>
</div>


<div className="testimonial-wrap" style={{ flex: '0 0 auto', width: '30%' }}>
  <div className="testimonial-item">
  <img src={lol} className="testimonial-img" alt="" style={{ width: '30%' }} /> 
    <h3>Hassan Sedraoui</h3>
    <h4>Entrepreneur</h4>
    <p>
      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
     Approche méthodique et leur capacité à résoudre des problèmes complexes ont été cruciales pour le succès de notre projet.
      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
    </p>
    <div className="social">
      <a href="#"><RiTwitterFill /></a>
      <a href="#"><RiFacebookFill /></a>
      <a href="#"><RiInstagramFill /></a>
      <a href="#"><RiLinkedinBoxFill /></a>
    </div>
  </div>
</div>


        </div>

      </div>
    </section>
  );
};

export default DoctorantsPage;
