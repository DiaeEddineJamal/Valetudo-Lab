import React from 'react';
import { Link } from 'react-router-dom';
import './Choose.css'
import { FaCheck } from 'react-icons/fa';
import { FaPlus, FaTrash } from 'react-icons/fa';
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

// Home Page
const Choose: React.FC = () => {
  return (
    <div className='background-radial-gradient overflow-hidden'>
      <MDBContainer fluid className='p-4'>
        <MDBRow>
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
        
              <MDBCardBody className='p-5'>

                <form>
                  
                  <h1 > <FaCheck /> Choose Your Destination</h1>
                  <div className="button-container">
                    <MDBCardBody className="mb-3"  style={{ marginTop: '450px' }}> {/* Ajout de la classe mb-3 pour abaisser les boutons */}
                      <Link to="/admin">
                        <button className="button button-add"> <FaPlus /> Add Components</button>
                      </Link>
                    </MDBCardBody>
                    <MDBCardBody className="mb-3 text-end" style={{ marginTop: '450px' }}> {/* Ajout de la classe mb-3 et text-end */}
                      <Link to="/admindelete">
                        <button className="button button-delete"><FaTrash /> Delete Components</button>
                      </Link>
                    </MDBCardBody>
                  </div>
                </form>

              </MDBCardBody>
         
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Choose;
