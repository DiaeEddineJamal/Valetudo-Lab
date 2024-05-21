import React, { useState, useRef, forwardRef, Ref, RefAttributes } from 'react';
import { Stepper, StepperProps, StepperRefAttributes } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import AddMemberForm from './Addmembersform';
import AddPublicationForm from './addpubform';
import AddLaboratoryForm from './addlabinfos';
import TeamForm from './addteamsform';
import './adminpanel.css';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'

const logoStyle = {
  width: '130px',
  height: '38px'
};
const CustomStepper = forwardRef(
  (props: { children: React.ReactElement[]; style: { flexBasis: string; }; activeIndex: number; onActiveIndexChange: (e: any) => void }, ref: Ref<StepperRefAttributes>) => (
    <Stepper {...props} ref={ref} />
  )
);

const AdminPanel: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepperRef = useRef<StepperRefAttributes>(null);

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <div className="admin-panel-card">
      <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" style={logoStyle} />
        </div>
        <ul id="MyUL">
          <li><a href="/">Acceuil</a></li>
          <li><a href="/">A propos</a></li>
          <li><a href="/">Projet de recherche</a></li>
          <li><a href="/">Membre</a></li>
          <li><Link to="/pub">Publication</Link></li>
          <li><Link to="/loginform">Admin Panel</Link></li>
          {/* Add more list items for other sections */}
        </ul>
      </nav>
      </div>
      <CustomStepper ref={stepperRef} style={{ flexBasis: '100%' }} activeIndex={currentStep} onActiveIndexChange={(e) => handleStepChange(e.value)}>
        <StepperPanel header="Add Member">
          <AddMemberForm />
          <div className="flex pt-4 justify-content-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} disabled={currentStep === 0} />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
          </div>
        </StepperPanel>
        <StepperPanel header="Add Publication">
          <AddPublicationForm />
          <div className="flex pt-4 justify-content-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
          </div>
        </StepperPanel>
        <StepperPanel header="Add Laboratory Infos">
          <AddLaboratoryForm />
          <div className="flex pt-4 justify-content-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
          </div>
        </StepperPanel>
        <StepperPanel header="Add Teams Infos">
          <TeamForm />
          <div className="flex pt-4 justify-content-start">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
          </div>
        </StepperPanel>
      </CustomStepper>
    </div>
  );
};

export default AdminPanel;