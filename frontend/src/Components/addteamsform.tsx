import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import './addteamsform.css'

// Define the Team interface
interface Team {
  id?: number;
  name: string;
  description: string;
}

// Define the TeamDTO interface
interface TeamDTO {
  name: string;
  description: string;
}

// TeamForm component
const TeamForm: React.FC = () => {
  const [team, setTeam] = useState<Team>({ name: '', description: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: AxiosResponse<Team> = await axios.post('http://localhost:8080/api/teams/add', team);
      console.log('New team created:', response.data);
      setTeam({ name: '', description: '' });
    } catch (error) {
      console.error('Error creating team:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={team.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
        style={{ width: '400px', padding: '100px'}}
          id="description"
          name="description"
          value={team.description}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" style={{
          
          marginTop: '30px', // Ajuster pour abaisser le bouton
          
          marginLeft: '130px', // Centrer le bouton horizontalement
        }}>Add Team</button>
    </form>
  );
};

export default TeamForm;