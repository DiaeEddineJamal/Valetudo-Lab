import React, { useState } from 'react';
 // Import your CSS file
 import './pubform.css';

const PublicationPage: React.FC = () => {
  const [research, setResearch] = useState<string>('');
  const [researcherName, setResearcherName] = useState<string>('');
  const [supervisorName, setSupervisorName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [upload, setUpload] = useState<File | null>(null);
  const [date, setDate] = useState<string>('');

  const handlePublish = () => {
    // Publish the research and researcher name
    // For now, let's just log the data
    console.log("Research:", research);
    console.log("Researcher Name:", researcherName);
    console.log("Supervisor Name:", supervisorName);
    console.log("Subject:", subject);
    console.log("Date:", date);
    console.log("Uploaded File:", upload);
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
