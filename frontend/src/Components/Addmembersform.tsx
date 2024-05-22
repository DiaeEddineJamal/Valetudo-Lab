import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addmemberform.css';

interface MemberFormData {
  name: string;
  keyword: string;
  isDoctorant: boolean;
  teamId: number | null;
  impulse: string;
  image: File | null;
}

interface Team {
  id: number;
  name: string;
}

const MemberForm: React.FC = () => {
  const [formData, setFormData] = useState<MemberFormData>({
    name: '',
    keyword: '',
    isDoctorant: false,
    teamId: null,
    impulse: '',
    image: null, 
  });
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get<Team[]>('http://localhost:8080/api/teams/teams');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };
    fetchTeams();
  }, []);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: file,
      }));
    }
  };
  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = event.target;
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: (event.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    console.log(`${name}: ${value}`);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('keyword', formData.keyword);
    formDataToSend.append('isDoctorant', String(formData.isDoctorant));
    formDataToSend.append('teamId', String(formData.teamId || ''));
    formDataToSend.append('impulse', formData.impulse);
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      await axios.post('http://localhost:8080/api/members', formDataToSend);
      alert('Member added successfully!');
      // Reset the form data
      setFormData({
        name: '',
        keyword: '',
        isDoctorant: false,
        teamId: null,
        impulse: '',
        image: null,
      });
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="member-form">
      <h2>Add Member</h2>
      <div className="form-group">
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
      <div className="form-group">
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
      <div className="form-group checkbox-group">
        <input
          type="checkbox"
          id="isDoctorant"
          name="isDoctorant"
          checked={formData.isDoctorant}
          onChange={handleInputChange}
        />
        <label htmlFor="isDoctorant">Doctorant</label>
      </div>
      <div className="form-group">
        <label htmlFor="teamId">Team:</label>
        <select
          id="teamId"
          name="teamId"
          value={formData.teamId || ''}
          onChange={handleInputChange}
        >
          <option value="">Select a team</option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="impulse">Impulse:</label>
        <textarea
          id="impulse"
          name="impulse"
          value={formData.impulse}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
       {/* Image upload field */}
       <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default MemberForm;
