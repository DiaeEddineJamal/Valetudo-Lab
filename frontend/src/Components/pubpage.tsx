import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './pubpage.css'; // Import CSS file
import pubpagepic from './images/pubpagepic.jpg'; // Import image

interface Publication {
  id: number;
  reference: string;
  year: number;
}

const PublicationPage: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    // Fetch publications from the backend when the component mounts
    const fetchPublications = async () => {
      try {
        const response = await axios.get<Publication[]>('http://localhost:8080/api/publications');
        setPublications(response.data);
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    };
    fetchPublications();
  }, []);

  return (
    <div>
      {/* Header section */}
      <header>
        <img src={pubpagepic} alt="Lab Header" />
        <h1>Valetudo Lab</h1>
      </header>

      <div>
        <h2>Publications</h2>
        {/* Render publications */}
        {publications.map((publication) => (
          <div key={publication.id} className="publication">
            <h3>{publication.reference}</h3>
            <p>Year: {publication.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationPage;
