import React, { useState, useEffect } from 'react';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri';

const Footer = () => {
  const [laboratories, setLaboratories] = useState<{ name: string; address: string; phoneNumber: string; }[]>([]);

  useEffect(() => {
    fetchLaboratories();
  }, []);

  const fetchLaboratories = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/laboratories');
      const data = await response.json();
      setLaboratories(data);
    } catch (error) {
      console.error('Error fetching laboratories:', error);
    }
  };

  const addLaboratory = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/laboratories/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'New Laboratory',
          address: 'New Address',
          phoneNumber: 'New Phone Number',
        }),
      });
      if (response.ok) {
        // If the laboratory was added successfully, fetch the latest data
        fetchLaboratories();
      } else {
        console.error('Failed to add new laboratory:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding new laboratory:', error);
    }
  };

  return (
    <footer id="footer">
      <div className="footer-top" style={{ backgroundColor: '#98b7d7', marginTop: 10 }}>
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              {/* Replace the hardcoded <h3> with the fetched laboratory name */}
              {laboratories.length > 0 && (
                <h3>{laboratories[0].name}</h3>
              )}
              {/* Display the latest laboratory information */}
              {laboratories.length > 0 && (
                <p>
                  <strong>Address:</strong> {laboratories[0].address} <br />
                  <strong>Phone:</strong> {laboratories[0].phoneNumber} <br />
                  <strong>Email:</strong> hassan.ouahmane@yahoo.fr<br />
                </p>
              )}
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Liens utiles</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="#">Accueil</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#equipes">Equipes</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#projets">Projets de recherche</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#chercheurs">Chercheurs</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="#publications">Publications</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Structure</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="http://tri.ensaj.ucd.ac.ma/">Département</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="http://www.ensaj.ucd.ac.ma/">ENSAJ</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="http://www.ucd.ac.ma/">Université</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">

        <div className="mr-md-auto text-center text-md-left">
          <div className="copyright">
            &copy; Copyright <strong><span>LTI lab</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0" style={{ marginLeft: 900 }}>
          <a href="#"><RiTwitterFill /></a>
          <a href="#"><RiFacebookFill /></a>
          <a href="#"><RiInstagramFill /></a>
          <a href="#"><RiLinkedinBoxFill /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
