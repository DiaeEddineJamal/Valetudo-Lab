import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';
import './pubform.css';

const PublicationPage: React.FC = () => {
  const [research, setResearch] = useState<string>('');
  const [researcherName, setResearcherName] = useState<string>('');
  const [supervisorName, setSupervisorName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [upload, setUpload] = useState<File | null>(null);
  const [date, setDate] = useState<string>('');
  const navigate = useNavigate();

  const handlePublish = () => {
    const formData = new FormData();
    formData.append('researcherName', researcherName);
    formData.append('supervisorName', supervisorName);
    formData.append('subject', subject);
    formData.append('date', date);
    formData.append('research', research);
    if (upload) {
      formData.append('file', upload);
    }

    axios.post('http://localhost:8080/pubinfos', formData)
      .then((response: AxiosResponse<any>) => {
        // Handle success, for example, redirect to another page
        console.log('Publication saved successfully:', response.data);
        navigate('/pub');
      })
      .catch((error: AxiosError) => {
        // Handle error
        console.error('Error saving publication:', error);
      });
  };

  return (
    <div className='publication-container'>
      <h1 className='pubpageheader'>
        Laboratory Publication Page
      </h1>
      <div className='publication-form'>
        <label htmlFor='researcher-name'>Researcher Name:</label>
        <input 
          type='text' 
          id='researcher-name' 
          value={researcherName} 
          onChange={(e) => setResearcherName(e.target.value)}
        />
        <label htmlFor='supervisor-name'>Supervisor Name:</label>
        <input 
          type='text' 
          id='supervisor-name' 
          value={supervisorName} 
          onChange={(e) => setSupervisorName(e.target.value)}
        />
        <label htmlFor='subject'>Subject:</label>
        <input 
          type='text' 
          id='subject' 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)}
        />
        <label htmlFor='date'>Date:</label>
        <input 
          type='date' 
          id='date' 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor='research'>Research Paper:</label>
        <textarea 
          id='research' 
          value={research} 
          onChange={(e) => setResearch(e.target.value)}
        />
        <label htmlFor='upload' className='custom-file-upload'>
          Upload PDF
          <input 
            type='file' 
            id='upload' 
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setUpload(e.target.files[0]);
              }
            }}
          />
        </label>
        <button className='publish-button' onClick={handlePublish}>Publish</button>
      </div>
      {/* Display the published research here */}
    </div>
  );
};

export default PublicationPage;
