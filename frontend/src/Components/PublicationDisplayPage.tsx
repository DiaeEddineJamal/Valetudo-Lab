import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const PublicationDisplayPage: React.FC = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { research, researcherName, upload } = location.state;

  return (
    <div>
      <h2>Research Information</h2>
      <p>Researcher Name: {researcherName}</p>
      <p>Research: {research}</p>
      <p>PDF: {/* Display the PDF here */}</p>
    </div>
  );
};

export default PublicationDisplayPage;
