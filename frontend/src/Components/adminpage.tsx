import React, { useState } from 'react';
import AddMemberForm from './Addmembersform';
import './adminpanel.css'
import AddPublicationForm from './addpubform';
import AddLaboratoryForm from './addlabinfos';

const AdminPanel: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleNavigation = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <nav>
        <ul>
          <li><a href="#add-member" onClick={() => handleNavigation('add-member')}>Add Member</a></li>
          <li><a href="#add-publication" onClick={() => handleNavigation('add-publication')}>Add Publication</a></li>
          <li><a href="#add-laboratory-infos" onClick={() => handleNavigation('add-laboratory-infos')}>Add Laboratory Infos</a></li>
        </ul>
      </nav>
      {selectedOption === 'add-member' && (
        <div id="add-member">
          {/* Add Member Form Component */}
          
          <AddMemberForm/>
        </div>
      )}
      {selectedOption === 'add-publication' && (
        <div id="add-publication">
          {/* Add Publication Form Component */}
          
          <AddPublicationForm/>
        </div>
      )}
      {selectedOption === 'add-laboratory-infos' && (
        <div id="add-laboratory-infos">
          {/* Add Laboratory Infos Form Component */}
         
          {/* Your form component for adding laboratory information goes here */}
          <AddLaboratoryForm></AddLaboratoryForm>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
