import React, { useState, useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; // PrimeReact theme
import 'primereact/resources/primereact.min.css'; // PrimeReact core CSS
import './equipesection.css'; // Custom CSS

interface Team {
  id: number;
  name: string;
  description: string;
}

const EquipesSection: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | number[]>(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/teams/teams');
      const data: Team[] = await response.json();
      setTeams(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section id="equipes" className="equipes">
      <div className="container">
        <div className="section-title">
          <h2>Equipes</h2>
          <p>L'équipe est la structure de base d'animation scientifique et de gestion du Laboratoire. Elle comprend des groupes thématiques de recherche et des groupes techniques d'accompagnement à la recherche. Le Laboratoire est composé de trois équipes de recherche :</p>
        </div>
        <div>
          <div className="flex flex-wrap justify-content-end gap-2 mb-3">
            {teams.map((team, index) => (
              <Button
                key={team.id}
                outlined={activeIndex !== index}
                rounded
                label={`${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className="w-2rem h-2rem p-0"
              />
            ))}
          </div>
          <Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            {teams.map((team, index) => (
              <AccordionTab key={team.id} header={team.name}>
                <p className="m-0">{team.description}</p>
              </AccordionTab>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default EquipesSection;