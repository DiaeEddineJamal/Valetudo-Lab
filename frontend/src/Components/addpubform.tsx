import React, { useState } from 'react';
import axios from 'axios';
import './pubform.css'; // Import CSS file for custom styling

const AddPublicationForm: React.FC = () => {
  const [reference, setReference] = useState('');
  const [year, setYear] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/publications', {
        reference,
        year,
      });
      // Reset form fields after successful submission
      setReference('');
      setYear(0);
      alert('Publication added successfully!');
    } catch (error) {
      console.error('Error adding publication:', error);
      alert('Failed to add publication');
    }
  };

  return (
    <form className="add-publication-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="reference">Reference:</label>
        <input
          type="text"
          id="reference"
          className="form-control"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          className="form-control"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Publication</button>
    </form>
  );
};

export default AddPublicationForm;
