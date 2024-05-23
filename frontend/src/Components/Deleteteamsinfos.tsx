import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Team {
  id: number;
  name: string;
  description: string;
}

const TeamManager: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await axios.get<Team[]>('http://localhost:8080/api/teams/teams');
      setTeams(response.data);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const deleteTeam = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/teams/${id}`);
      setTeams(teams.filter((team) => team.id !== id));
    } catch (error) {
      console.error('Error deleting teams:', error);
    }
  };

  return (
    <div>
      <h1>Team Manager</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.description}</td>
              <td>
                <button onClick={() => deleteTeam(team.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamManager;