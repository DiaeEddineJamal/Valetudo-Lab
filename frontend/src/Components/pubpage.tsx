import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pubpage.css';
import pubpagepic from './images/pubpagepic.jpg';
import logo from './images/logo.png'; // Import your logo image
import { Link } from 'react-router-dom'; // Assuming you're using React Router

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { TabView, TabPanel } from 'primereact/tabview';

interface Publication {
  id: number;
  reference: string;
  year: number;
}

const PublicationPage: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [groupedPublications, setGroupedPublications] = useState<{ [year: number]: Publication[] }>({});

  useEffect(() => {
    // Fetch publications from the backend when the component mounts
    const fetchPublications = async () => {
      try {
        const response = await axios.get<Publication[]>('http://localhost:8080/api/publications');
        const publications = response.data;
        
        // Group publications by year
        const grouped: { [year: number]: Publication[] } = {};
        publications.forEach(publication => {
          if (!grouped[publication.year]) {
            grouped[publication.year] = [];
          }
          grouped[publication.year].push(publication);
        });
        
        // Sort years in descending order
        const sortedGrouped = Object.keys(grouped)
          .sort((a, b) => parseInt(b) - parseInt(a))
          .reduce((obj, key) => {
            obj[parseInt(key)] = grouped[parseInt(key)];
            return obj;
          }, {} as { [year: number]: Publication[] });

        setGroupedPublications(sortedGrouped);
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    };
    fetchPublications();
  }, []);

  const logoStyle = {
    height: '40px',
    marginRight: '10px',
    
  };

  return (
    <div className="publication-page">
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" style={logoStyle} />
        </div>
        <ul id="MyUL">
          <li><a href="/">Acceuil</a></li>
          <li><a href="/">A propos</a></li>
          <li><a href="/">Projet de recherche</a></li>
          <li><a href="/">Membre</a></li>
          <li><Link to="/pub">Publication</Link></li>
          <li><Link to="/loginform">Admin Panel</Link></li>
          {/* Add more list items for other sections */}
        </ul>
      </nav>

      <div className="container">
        <div>
          <h2 className='pagetitlepub'>Publications</h2>
          <TabView>
            {Object.keys(groupedPublications).map((yearStr) => {
              const year = parseInt(yearStr);
              return (
                <TabPanel key={year} header={year.toString()}>
                  {groupedPublications[year].map((publication: Publication) => (
                    <div key={publication.id} className="publication">
                      <h3>{publication.reference}</h3>
                      <p>Year: {publication.year}</p>
                    </div>
                  ))}
                </TabPanel>
              );
            })}
          </TabView>
        </div>
      </div>
    </div>
  );
};

export default PublicationPage;