import React, { useState } from 'react';
import AddMemberForm from './Addmembersform';
import './adminpanel.css'
import AddPublicationForm from './addpubform';
import AddLaboratoryForm from './addlabinfos';
import TeamForm from './addteamsform';

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
          <li><a href="#add-teams-infos" onClick={() => handleNavigation('add-teams-infos')}>Add teams infos</a></li>
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
      
          <AddLaboratoryForm></AddLaboratoryForm>
        </div>
      )}
       {selectedOption === 'add-teams-infos' && (
        <div id="add-teams-infos">
      
          <TeamForm></TeamForm>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
