import { useState } from 'react';
import { Button } from 'react-bootstrap';
import "../index.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brandIcon from '../images/brand-icon.svg'
import LoginModal from './molekul/LoginModal';
import RegisterModal from './molekul/RegisterModal';

function Navbars() {

  // modal show
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <Navbar className='navbar' bg="none" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={brandIcon} alt="" width="159px"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-end gap-3">
            <Button onClick={handleShowLogin} className='py-1 px-4 fw-semibold' style={{background: "none", border: "2px solid white", fontSize: 14}}>Login</Button>
            <Button onClick={handleShowRegister} className='py-1 px-4 fw-semibold' style={{background: "#FFAF00", border: "none", fontSize: 14}}>Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <LoginModal show={showLogin} handleClose={handleCloseLogin} />
      <RegisterModal show={showRegister} handleClose={handleCloseRegister} />
    </Navbar>
  );
}

export default Navbars;