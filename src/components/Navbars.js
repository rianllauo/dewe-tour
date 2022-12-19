import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import brandIcon from '../images/brand-icon.svg'
import LoginModal from './molekul/LoginModal';
import RegisterModal from './molekul/RegisterModal';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import userIcon from '../images/user-icon.svg'
import bill from '../images/bill.svg'
import logoutIcon from '../images/logout.svg'
import journey from '../images/journey.svg'

function Navbars({navStyle}) {

  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  
  function logout(){
    localStorage.clear()
    navigate(0)
  }

  // modal show
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <Navbar bg="none" expand="lg" className={navStyle}>
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={brandIcon} alt="" width="159px"/>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-end gap-3">
           {
            user != null ? 

              // kondisi admin
              user.admin === true ?
              
              <div className='d-flex align-items-center'>
                <p className='text-light fw-semibold mb-0 me-2'>Selamat datang <span className='text-warning fw-semibold'>{user.fullName}</span></p> 
                <Dropdown>
                  <Dropdown.Toggle className='bg-transparent p-0' style={{border: "none"}} id="dropdown-basic">
                    <img src={require('../images/user.png')} alt="" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='px-1 py-2'>
                      <Dropdown.Item className='mb-2 rounded /income-tripd-flex align-items-center'>
                      <Link to="/income-trip">
                          <img src={journey} className="me-3" alt="" />
                          Trip
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className='mb-2 rounded d-flex align-items-center'>
                      <Link to="/transaction-list">
                          {/* <img src={journey} className="me-3" alt="" /> */}
                          Transaction
                      </Link>
                      </Dropdown.Item>
                      <Dropdown.Item className='mb-2 rounded d-flex align-items-center'>
                      <Link to="/user-list">
                          {/* <img src={journey} className="me-3" alt="" /> */}
                          List User
                      </Link>
                      </Dropdown.Item>
                    <div className='w-100 my-3' style={{height: "1px", background: "#ddd"}}></div>
                    <Dropdown.Item onClick={logout} className="b-2 rounded d-flex align-items-center">
                      <img src={logoutIcon} alt="" className="me-3" />
                      Logout
                    </Dropdown.Item>
                    
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              // kondisi user biasa
              :

              <div className='d-flex align-items-center'>
                <p className='text-light fw-semibold mb-0 me-2'>Selamat datang <span className='text-warning fw-semibold'>{user.fullName}</span></p> 
                <Dropdown>
                  <Dropdown.Toggle className='bg-transparent p-0' style={{border: "none"}} id="dropdown-basic">
                    <img src={require('../images/user.png')} alt="" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='px-1 py-2'>
                    <Dropdown.Item href="#/action-1" className='mb-2 rounded d-flex align-items-center'>
                      <Link to="/personal-information">
                        <img src={userIcon} className="me-3" alt="" />
                        Profile
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1" className='rounded d-flex align-items-center'>
                      <Link to="/payment-success">
                      <img src={bill} alt="" className="me-3" />
                      Pay
                      </Link>
                    </Dropdown.Item>
                    <div className='w-100 my-3' style={{height: "1px", background: "#ddd"}}></div>
                    <Dropdown.Item onClick={logout} className="b-2 rounded d-flex align-items-center">
                      <img src={logoutIcon} alt="" className="me-3" />
                      Logout
                    </Dropdown.Item>
                    
                  </Dropdown.Menu>
                </Dropdown>
              </div>
                                  
            : 
            <>
              <Button onClick={handleShowLogin} className='py-1 px-4 fw-semibold' style={{background: "none", border: "2px solid white", fontSize: 14}}>Login</Button>
              <Button onClick={handleShowRegister} className='py-1 px-4 fw-semibold' style={{background: "#FFAF00", border: "none", fontSize: 14}}>Register</Button>
            </>      
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      <LoginModal show={showLogin} handleClose={handleCloseLogin} />
      <RegisterModal show={showRegister} handleClose={handleCloseRegister} />
    </Navbar>
  );
}

export default Navbars;