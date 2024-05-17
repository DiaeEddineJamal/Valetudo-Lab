import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signupform.css';
interface SignupFormProps {
  // Add any additional props you might need here
}

function SignupForm(props: SignupFormProps) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody: { email: string; username: string; password: string } = {
      email,
      username,
      password
    };

    try {
      const response = await axios.post('http://localhost:8080/signup', requestBody);

      if (response.status === 200) {
        console.log('Signup successful');
       
         // Redirect to the login page
      } else {
        console.error('Signup failed');
        // Handle signup failure logic here, e.g., display an error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors or other unexpected issues here
    }
    navigate('/loginform');
  };

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
      <MDBRow className="justify-content-center">
        <MDBCol md='6'>
          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <h2 className="text-center mb-5">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol size="6">
                    <MDBInput label='Email' id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInput label='Username' id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                  </MDBCol>
                </MDBRow>
                <MDBInput label='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='subscribe' value='' id='subscribe' label='Subscribe to our newsletter' />
                </div>
                <MDBBtn className='w-100 mb-4' type='submit'>Sign Up</MDBBtn>
              </form>
              <div className="text-center">
                <p>Already have an account? <Link to="/loginform">Log in</Link></p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignupForm;
