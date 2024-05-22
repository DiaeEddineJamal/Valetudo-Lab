import React, { useState, useEffect } from 'react';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri';
import axios from 'axios';

interface Chercheur {
  name: string;
  role: string;
  description: string;
  socialLinks: { twitter?: string; facebook?: string; instagram?: string; linkedin?: string; };
  imageUrl: string;
}

const fetchChercheurs = async (): Promise<Chercheur[]> => {
  try {
    const response = await axios.get('http://localhost:8080/api/members');
    return response.data;
  } catch (error) {
    console.error('Error fetching chercheurs:', error);
    return [];
  }
};

const ChercheursSection: React.FC = () => {
  const [chercheurs, setChercheurs] = useState<Chercheur[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedChercheurs = await fetchChercheurs();
      setChercheurs(fetchedChercheurs);
    };

    fetchData();
  }, []);

  return (
    <section id="chercheurs" className="chercheurs">
      <div className="container">
        <div className="section-title">
          <h2>Chercheurs</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row">
          {chercheurs.map((chercheur, index) => (
            <div className="col-lg-6" key={index}>
              <div className="member d-flex align-items-start">
                <div><img className="sp_img" src={chercheur.imageUrl} alt={chercheur.name} /></div>
                <div className="member-info">
                  <h4>{chercheur.name}</h4>
                  <span>{chercheur.role}</span>
                  <p>{chercheur.description}</p>
                  <div className="social">
                  
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChercheursSection;