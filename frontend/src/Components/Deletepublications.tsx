import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Publication {
  id: number;
  reference: string;
  year: number;
  members: { name: string }[];
}

const PublicationManager: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const response = await axios.get<Publication[]>('http://localhost:8080/api/publications');
      setPublications(response.data);
    } catch (error) {
      console.error('Error fetching publications:', error);
    }
  };

  const deletePublication = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/publications/${id}`);
      setPublications(publications.filter((pub) => pub.id !== id));
    } catch (error) {
      console.error('Error deleting publication:', error);
    }
  };

  return (
    <div>
      <h1>Publication Manager</h1>
      <table>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Year</th>
            <th>Members</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {publications.map((publication) => (
            <tr key={publication.id}>
              <td>{publication.reference}</td>
              <td>{publication.year}</td>
              <td>
                {publication.members.map((member) => member.name).join(', ')}
              </td>
              <td>
                <button onClick={() => deletePublication(publication.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PublicationManager;