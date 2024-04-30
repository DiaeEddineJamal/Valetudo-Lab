import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addmemeberform.css'

// Define interfaces for Laboratory and Team
interface Laboratory {
  id: number;
  name: string;
}

interface Team {
  id: number;
  name: string;
}

const AddMemberForm: React.FC = () => {
  const [name, setName] = useState('');
  const [keyword, setKeyword] = useState('');
  const [isDoctorant, setIsDoctorant] = useState(false);
  const [researchTopic, setResearchTopic] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<number | ''>('');
  const [laboratories, setLaboratories] = useState<Laboratory[]>([]);
  const [selectedLaboratory, setSelectedLaboratory] = useState<number | ''>('');

  useEffect(() => {
    // Fetch teams from the backend
    axios.get('http://localhost:8080/api/teams')
      .then(response => {
        setTeams(response.data);
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
      });

    // Fetch laboratories from the backend
    axios.get('http://localhost:8080/api/laboratories')
      .then(response => {
        setLaboratories(response.data);
      })
      .catch(error => {
        console.error('Error fetching laboratories:', error);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/members', {
        name,
        keyword,
        isDoctorant,
        researchTopic,
        supervisor,
        teamId: selectedTeam,
        laboratoryId: selectedLaboratory
      });
      // Reset form fields after successful submission
      setName('');
      setKeyword('');
      setIsDoctorant(false);
      setResearchTopic('');
      setSupervisor('');
      setSelectedTeam('');
      setSelectedLaboratory('');
      alert('Member added successfully!');
    } catch (error) {
      console.error('Error adding member:', error);
      alert('Failed to add member');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="keyword">Keyword:</label>
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>
          Is Doctorant:
          <input
            type="checkbox"
            checked={isDoctorant}
            onChange={(e) => setIsDoctorant(e.target.checked)}
          />
        </label>
      </div>
      {isDoctorant && (
        <>
          <div>
            <label htmlFor="researchTopic">Research Topic:</label>
            <input
              type="text"
              id="researchTopic"
              value={researchTopic}
              onChange={(e) => setResearchTopic(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="supervisor">Supervisor:</label>
            <input
              type="text"
              id="supervisor"
              value={supervisor}
              onChange={(e) => setSupervisor(e.target.value)}
              required
            />
          </div>
        </>
      )}
      <div>
        <label htmlFor="team">Assign to Team:</label>
        <select
          id="team"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(Number(e.target.value))}
        >
          <option value="">Select a team</option>
          {teams.map(team => (
            <option key={team.id} value={team.id}>{team.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="laboratory">Select Laboratory:</label>
        <select
          id="laboratory"
          value={selectedLaboratory}
          onChange={(e) => setSelectedLaboratory(Number(e.target.value))}
        >
          <option value="">Select a laboratory</option>
          {laboratories.map(laboratory => (
            <option key={laboratory.id} value={laboratory.id}>{laboratory.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Add Member</button>
    </form>
  );
};

export default AddMemberForm;
