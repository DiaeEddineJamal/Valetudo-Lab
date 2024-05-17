import React, { useState, useEffect } from 'react';

const EquipesSection: React.FC = () => {
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [labName, setLabName] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

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
        setLatitude(data.latitude);
        setLongitude(data.longitude);
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
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-toggle="tab" href="#tab-1">Equipe RMS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tab-2">Equipe THS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#tab-3">Equipe S2IA</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>RMS : Réseaux, Mobiquité et Sécurité</h3>
                    <p className="font-italic">Equipement et Logistique</p>
                    <p>Afin de mettre en oeuvre ses expériences scientifiques (hardware et software) dans les domaines des technologies de l'information, l'équipe RMS du laboratoire {labName} est dotée de deux Laboratoires d’expérimentation en Réseaux/Informatique équipés de :
                      <br/> - Machines Informatiques (PCs, Portables),
                      <br/> - Switchs de 8 ports et 5 Switchs de 24 ports administrables (multi-modèles),
                      <br/> - Câblage réseaux et périphérique associées
                      <br/> - Simulateurs réseaux et outils d’émulation et de virtualisation des équipements et des systèmes
                      <br/>- Lab réseaux sans fil et logiciels de supervisions associées
                      <br/>- Plateforme Télécom Tout IP (Données, voix et vidéo sur IP) :
                      IPBX, IP phone Cisco, Passerelle RTC/IP, Casques multimédia, Caméra,
                      <br/>- Maquettes pour la téléphonie numérique (ISDN)…</p>
                  </div>
                </div>
                <div className="row faq">
                  <div className="col-lg-12">
                    <div className="faq-list">
                      <ul>
                        <li data-aos="fade-up">
                          <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" className="collapse collapsed" href="#faq-list-1" aria-expanded="false">Axes de recherche? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                          <div id="faq-list-1" className="collapse" data-parent=".faq-list">
                            <p>- Les technologies de communication au service des Smart Grid / Smart Cities;</p>
                            <p>- Optimisation des algorithmes pour la mise à jour de la strategie d'un Firewall;</p>
                            <p>- Systeme de prevention pour une Protection contre les attaques par DDoS;</p>
                            <p>- Optimisation de la sécurité dans les Cloud Computing;</p>
                            <p>- L'analyse des protocoles de sécurité;</p>
                            <p>- Apprentissage par le E-learning;</p>
                            <p>- Integration des TIC dans l'enseignement et l'evaluation;</p>
                            <p>- Planification des réseaux de capteurs sans fil sous contrainte d'optimisation de l'énergie : Etude des cas des capteurs médicaux d’analyse;</p>
                            <p>- Routage contextuel et gestion de la qualité de service pour les systèmes radiomobiles de nouvelle génération;</p>
                            <p>- Réseau intelligent et système pair-à-pair pour l’optimisation du trafic dans les villes de haute densité;</p>
                            <p>- Enrichissement sémantique des systèmes Google Apps vers une meilleure intégration des services du web intelligent;</p>
                            <p>- Système de virtualisation avancée pour le support des télémesures dans un contexte industriel sous contraintes;</p>
                            <p>- Systèmes mobiquitaires pour la définition de campus intelligents et la migration vers des espaces numériques de travail;</p>
                            <p>- De la conception de la qualité de service informatique vers l’amélioration la qualité de vie : Contribution à l’optimisation du routage et des communications des réseaux sans fil;</p>
                            <p>- Sécurité et détection de disfonctionnements dans les réseaux de capteurs sans fil médicaux et industriels;</p>
                            <p>- Compus In Home : proposition d’un système d’information pour des sessions réparties et personnalisées de formation;</p>
                            <p>- Conception et implémentation des réseaux de jeux simulants l’interaction social Homme-Machine et Réseaux;</p>
                            <p>- Education par les nouvelles technologies;</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>THS : Télécommunications, Hyperfréquence et Systèmes embarqués</h3>
                    <p className="font-italic">Equipement et Logistique</p>
                    <p>Afin de mettre en oeuvre ses expériences scientifiques (hardware et software) dans les domaines des technologies de l'information, l'équipe THS du laboratoire {labName} est dotée de deux Laboratoires d’expérimentation en Télécommunications/Hyperfréquence équipés de :
                      <br/>- Divers Maquettes de techniques de transmission analogiques,
                      <br/> - Divers Maquettes de techniques de transmission numériques,
                      <br/> - Maquettes pour la transmission optique
                      <br/> - Analyseurs de spectres,
                      <br/> - Equipements pour les Hyperfréquences et Microstrip
                      <br/> - Equipement pour les antennes et propagation
                      <br/> - Banc d’expérimentation pour les techniques du radar
                      <br/> - Banc d'expérimentation en DSP
                      <br/> - Kit d'expérimentation en Multimédia
                      <br/> - Kit d'expérimentation didactique en GSM et GPS
                      <br/> - Maquettes pour la téléphonie numérique (ISDN)
                    </p>
                  </div>
                </div>
                <div className="row faq">
                  <div className="col-lg-12">
                    <div className="faq-list">
                      <ul>
                        <li data-aos="fade-up">
                          <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" className="collapse collapsed" href="#faq-list-2" aria-expanded="false">Axes de recherche? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                          <div id="faq-list-2" className="collapse" data-parent=".faq-list" >
                            <p>
                              <br/>- Techniques numériques appliquées aux systèmes de communications mobiles, TV(DVB), Audio (DAB), multimédia. 
                              <br/>- Performance de la technique de modulation hybride pour l'amélioration de l'efficacité spectrale et énergitique dans les communications mobiles 
                              <br/>- Techniques de multiplexage et des accès multiples (CDMA, OFDMA, COFDMA…) 
                              <br/>- Optimisation des techniques de codage correcteur 
                              <br/>- Les turbo-codes, les codes en treillis et les supers codes 
                              <br/>- Signaux et communications: Développement des méthodes et des algorithmes pour le traitement de la parole et de l'image 
                              <br/>- Optimisation de la Space-Time Trellis Coded Modulation 
                              <br/>- Modulations codées à enveloppe constante adaptées aux systèmes de transmissions à accès multiples par répartition temps-fréquence 
                              <br/>- Optimisation de l'efficacité spectrale pour les systèmes radio mobiles à très large bande 
                              <br/>- Systèmes Multi-Porteuse et détection Multi-utilisateurs 
                              <br/>- Estimation de canal pour systèmes multi-antennes multi-porteuses 
                              <br/>- Codage temps-espace en blocs combiné avec un système MC-CDMA 
                              <br/>- Les Hyperfréquences et Interactions avec le corps humain 
                              <br/>- La propagation et Caractérisation des antennes 
                              <br/>- Les applications des techniques UWB 
                              <br/>- Modélisation de la migration vers la 4G
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>S2IA : Sécurité et Intelligence Artificielle</h3>
                    <p>Les menaces numériques ne cessent d’augmenter. Pour les contrer, les entreprises s’appuient sur des logiciels. Mais ces derniers ne sont pas tous parfaits ! D’où une perte de temps et d’énergie. L’IA pourrait leur venir en aide.</p>
                    <p>Notre équipe mobilise les forces de ses membres autours d’enjeux transversaux correspondant à des priorités nationales de recherche, en autres la cybersécurité, l'IA et le Big Data.</p>
                  </div>
                </div>
                <div className="row faq">
                  <div className="col-lg-12">
                    <div className="faq-list">
                      <ul>
                        <li data-aos="fade-up">
                          <i className="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" className="collapse collapsed" href="#faq-list-3" aria-expanded="false">Axes de recherche? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                          <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                            <p>
                              <br/>- Network Security; 
                              <br/>- Cloud Security; IP Networks Security; 
                              <br/>- Information systems security; 
                              <br/>- IDS/IPS; 
                              <br/>- Artificial Intelligence;
                              <br/>- Smart Farming System;
                              <br/>- Detection of corneal diseases;
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipesSection;
