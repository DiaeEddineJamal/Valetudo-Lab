import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Utilisez useNavigate pour v6+
import axios from 'axios';
import './loginform.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Utilisez useNavigate pour la navigation

  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'adminpassword'; // Remplacez par le mot de passe administrateur réel

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Vérifiez si le nom d'utilisateur et le mot de passe soumis correspondent aux informations d'identification de l'administrateur
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      try {
        const response = await axios.post('http://localhost:8080/login', {
          username,
          password,
        });

        if (response.status === 200) {
          console.log('Connexion réussie');
          navigate('/admin'); // Redirection vers la page principale
        } else {
          console.error('Échec de la connexion');
          // Gérez l'échec de la connexion de manière appropriée, par exemple affichez un message d'erreur
        }
      } catch (error) {
        console.error('Erreur :', error);
        // Gérer les erreurs réseau ou autres problèmes
      }
    } else {
      console.error('Nom d\'utilisateur ou mot de passe invalide');
      // Afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            Lab ADMIN
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Connectez-vous à votre compte.
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol col='12'>
                    <MDBInput wrapperClass='mb-4' label='Username' id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol col='12'>
                    <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  </MDBCol>
                </MDBRow>

                <MDBBtn type='submit' className='w-100 mb-4'>Log In</MDBBtn>
              </form>

              <p className="text-center">
                Don't have an account?{' '}
                <Link to="/signupform">Sign Up</Link>
              </p>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginForm;
