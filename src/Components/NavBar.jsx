import { useState, } from 'react';
import Container from 'react-bootstrap/Container';
import logo from '../assets/images/Style=Default.svg'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FiAlignRight } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import '../css/NavBar.css'



function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleToggle = () => setShow(!show);

  
  return (
    <>
    <Navbar expand="lg" className="nav-bar">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ fontFamily: 'Fira Code, monospace', textDecoration: 'none', color: 'white', fontWeight: '400', fontSize: '18px' }}><img className='logo' src={logo} alt="" /> Tony</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvas" onClick={handleToggle}>
            {show ? <FontAwesomeIcon icon={faTimes} /> : <FiAlignRight />}
          </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links me-auto">
            <Nav.Link as={Link} to="/"><h6>#<span className='span'>Home</span></h6></Nav.Link>
            <Nav.Link as={Link} to="/projects"><h6>#<span className='span'>Works</span></h6></Nav.Link>
            <Nav.Link as={Link} to="/about"><h6>#<span className='span'>About</span></h6></Nav.Link>
            <Nav.Link as={Link} to="/contact"><h6>#<span className='span'>Contact</span></h6></Nav.Link>
          </Nav>
          <Nav className="socials">
          <Nav.Link as={Link} to="https://github.com/Tonega" target='_blank' style={{ color: '#ff5733', transition: 'color 0.3s' }}>
            <FontAwesomeIcon icon={faGithub} size="2x"/>
            </Nav.Link>
          <Nav.Link as={Link} to="https:// discordapp.com/users/906604925574856715" target='_blank' style={{ color: '#7289DA', transition: 'color 0.3s'}}>
            <FontAwesomeIcon icon={faDiscord} size="2x"/>
            </Nav.Link>
          <Nav.Link as={Link} to="https://twitter.com/Thonieetega" target='_blank' style={{ color: '#1DA1F2', transition: 'color 0.3s' }}>
            <FontAwesomeIcon icon={faXTwitter} size="2x"/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Offcanvas show={show} onHide={handleClose} className='offcanvas' backdrop={false}>
        <Offcanvas.Body>
        <Nav className="navoff me-auto">
            <Nav.Link as={Link} to="/"><h6>#<span className='span'>Home</span></h6></Nav.Link>
            <Nav.Link as={Link} to="/projects"><h6>#<span className='span'>Works</span></h6></Nav.Link>
            <Nav.Link as={Link} to="/about"><h6>#<span className='span'>About</span></h6></Nav.Link>
            <Nav.Link as={Link} to="/contact"><h6>#<span className='span'>Contact</span></h6></Nav.Link>
          </Nav>
          <Nav className="socials2">
          <Nav.Link as={Link} to="https://github.com/Tonega" target='_blank' style={{ color: '#ff5733', transition: 'color 0.3s' }}>
            <FontAwesomeIcon icon={faGithub} size="2x"/>
            </Nav.Link>
          <Nav.Link as={Link} to="https:// discordapp.com/users/906604925574856715" target='_blank' style={{ color: '#7289DA', transition: 'color 0.3s'}}>
            <FontAwesomeIcon icon={faDiscord} size="2x"/>
            </Nav.Link>
          <Nav.Link as={Link} to="https://twitter.com/Thonieetega" target='_blank' style={{ color: '#1DA1F2', transition: 'color 0.3s' }}>
            <FontAwesomeIcon icon={faXTwitter} size="2x"/>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      </>

  );
}

export default NavBar;