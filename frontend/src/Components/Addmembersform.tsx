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

interface FormData {
  name: string;
  keyword: string;
  isDoctorant: boolean;
  researchTopic: string;
  supervisor: string;
  teamId: number | '';
  laboratoryId: number | '';
}

const useAddMemberForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    keyword: '',
    isDoctorant: false,
    researchTopic: '',
    supervisor: '',
    teamId: '',
    laboratoryId: '',
  });

  const [teams, setTeams] = useState<Team[]>([]);
  const [laboratories, setLaboratories] = useState<Laboratory[]>([]);

  useEffect(() => {
    // Fetch teams and laboratories from the backend
    axios
      .all([
        axios.get('http://localhost:8080/api/teams'),
        axios.get('http://localhost:8080/api/laboratories'),
      ])
      .then(
        axios.spread((teamsResponse, laboratoriesResponse) => {
          setTeams(teamsResponse.data);
          setLaboratories(laboratoriesResponse.data);
        })
      )
      .catch((error) => {
        console.error('Error fetching teams and laboratories:', error);
      });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/members', formData);
      // Reset form fields after successful submission
      setFormData({
        name: '',
        keyword: '',
        isDoctorant: false,
        researchTopic: '',
        supervisor: '',
        teamId: '',
        laboratoryId: '',
      });
      alert('Member added successfully!');
    } catch (error) {
      console.error('Error adding member:', error);
      alert('Failed to add member');
    }
  };

  return {
    formData,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    teams,
    laboratories,
  };
};

const AddMemberForm: React.FC = () => {
  const { formData, handleInputChange, handleSelectChange, handleSubmit, teams, laboratories } =
    useAddMemberForm();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="keyword">Keyword:</label>
        <input
          type="text"
          id="keyword"
          name="keyword"
          value={formData.keyword}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>
          Is Doctorant:
          <input
            type="checkbox"
            name="isDoctorant"
            checked={formData.isDoctorant}
            onChange={handleInputChange}
          />
        </label>
      </div>
      {formData.isDoctorant && (
        <>
          <div>
            <label htmlFor="researchTopic">Research Topic:</label>
            <input
              type="text"
              id="researchTopic"
              name="researchTopic"
              value={formData.researchTopic}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="supervisor">Supervisor:</label>
            <input
              type="text"
              id="supervisor"
              name="supervisor"
              value={formData.supervisor}
              onChange={handleInputChange}
              required
            />
          </div>
        </>
      )}
      <div>
        <label htmlFor="team">Assign to Team:</label>
        <select
          id="team"
          name="teamId"
          value={formData.teamId}
          onChange={handleSelectChange}
        >
          <option value="">Select a team</option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="laboratory">Select Laboratory:</label>
        <select
          id="laboratory"
          name="laboratoryId"
          value={formData.laboratoryId}
          onChange={handleSelectChange}
        >
          <option value="">Select a laboratory</option>
          {laboratories.map((laboratory) => (
            <option key={laboratory.id} value={laboratory.id}>
              {laboratory.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add Member</button>
    </form>
  );
};

export default AddMemberForm;