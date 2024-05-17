import React, { useState, useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; // PrimeReact theme
import 'primereact/resources/primereact.min.css'; // PrimeReact core CSS
import './equipesection.css'; // Custom CSS

const EquipesSection: React.FC = () => {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [labName, setLabName] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | number[]>(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/laboratories');
      const data = await response.json();
      if (data && data.length > 0) {
        setAddress(data[0].address);
        setPhoneNumber(data[0].phoneNumber);
        setLabName(data[0].name);
        setLatitude(data[0].latitude);
        setLongitude(data[0].longitude);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section id="equipes" className="equipes">
      <div className="container">
        <div className="section-title">
          <h2>Equipes</h2>
          <p>L’équipe est la structure de base d’animation scientifique et de gestion du Laboratoire {labName}. Elle comprend des groupes thématiques de recherche et des groupes techniques d’accompagnement à la recherche. Le Laboratoire {labName} est composé de trois équipes de recherche :</p>
        </div>
        <div>
          <div className="flex flex-wrap justify-content-end gap-2 mb-3">
            <Button outlined={activeIndex !== 0} rounded label="1" onClick={() => setActiveIndex(0)} className="w-2rem h-2rem p-0" />
            <Button outlined={activeIndex !== 1} rounded label="2" onClick={() => setActiveIndex(1)} className="w-2rem h-2rem p-0" />
            <Button outlined={activeIndex !== 2} rounded label="3" onClick={() => setActiveIndex(2)} className="w-2rem h-2rem p-0" />
          </div>
          <Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <AccordionTab header="Equipe 1">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
            <AccordionTab header="Equipe 2">
              <p className="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                Consectetur, adipisci velit, sed quia non numquam eius modi.
              </p>
            </AccordionTab>
            <AccordionTab header="Equipe 3">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
              </p>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default EquipesSection;
