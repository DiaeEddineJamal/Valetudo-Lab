import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Laboratory {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
  longitude: number;
  latitude: number;
}

const LaboratoryManager: React.FC = () => {
  const [laboratories, setLaboratories] = useState<Laboratory[]>([]);

  useEffect(() => {
    fetchLaboratories();
  }, []);

  const fetchLaboratories = async () => {
    try {
      const response = await axios.get<Laboratory[]>('http://localhost:8080/api/laboratories');
      setLaboratories(response.data);
    } catch (error) {
      console.error('Error fetching laboratories:', error);
    }
  };

  const deleteLaboratory = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/laboratories/${id}/delete`);
      setLaboratories(laboratories.filter((lab) => lab.id !== id));
    } catch (error) {
      console.error('Error deleting laboratory:', error);
    }
  };

  return (
    <div>
      <h1>Laboratory Manager</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {laboratories.map((laboratory) => (
            <tr key={laboratory.id}>
              <td>{laboratory.name}</td>
              <td>{laboratory.address}</td>
              <td>{laboratory.phoneNumber}</td>
              <td>{laboratory.longitude}</td>
              <td>{laboratory.latitude}</td>
              <td>
                <button onClick={() => deleteLaboratory(laboratory.id)}>
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

export default LaboratoryManager;