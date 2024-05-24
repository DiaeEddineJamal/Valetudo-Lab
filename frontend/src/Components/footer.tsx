import React, { useState, useEffect } from 'react';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri';

const Footer = () => {
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
        setLatitude(data[0].latitude);
        setLongitude(data[0].longitude);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <footer id="footer">
      <div className="footer-top" style={{ backgroundColor: '#98b7d7', marginTop: 10 }}>
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              {/* Display the fetched laboratory name if available */}
              {labName && (
                <h3>{labName}</h3>
              )}
              {/* Display the latest laboratory information */}
              <p>
                <strong>Address:</strong> {address} <br />
                <strong>Phone:</strong> {phoneNumber} <br />
                <strong>Email:</strong> hassan.ouahmane@yahoo.fr<br />
              </p>
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
              <p>Rejoignez-nous en inscrivant votre email :</p>
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
            &copy; Copyright <strong><span>{labName}</span></strong>. All Rights Reserved.
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0" style={{ marginLeft: 800 }}>
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
