import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './pubpage.css'; // Import CSS file
import pubpagepic from './images/pubpagepic.jpg'; // Import image

interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
}

const PublicationPage: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);

  // Function to handle uploading research
  const handleUploadResearch = () => {
    // Implement your logic for uploading research here
    console.log('Upload research functionality');
  };

  return (
    <div>
      {/* Header section */}
      <header>
        <img src={pubpagepic} alt="Lab Header" />
        <h1>Lab Name</h1>
      </header>

      {/* Button to upload research */}
      <button><Link to="/pubform">Upload Your Research</Link></button>

  
      <div>
        <h2>Publications</h2>
        {/* Render publications */}
        {publications.map((publication) => (
          <div key={publication.id}>
            <h3>{publication.title}</h3>
            <p>Authors: {publication.authors.join(', ')}</p>
            <p>Journal: {publication.journal}</p>
            <p>Year: {publication.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationPage;
