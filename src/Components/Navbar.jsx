import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { isBrowser } from 'react-device-detect';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ close }) => {
  console.log('close ', close)
  const data = [
    { title: 'Accueil', to: 'welcome' },
    { title: 'À propos', to: 'intro' },
    { title: 'Photos', to: 'gallery' },
    { title: 'Vidéos', to: 'video' },
    { title: 'Carte', to: 'map' },
    { title: 'Contact', to: 'contact' }
  ]
  return (
    <Navbar
    // className='fixed-top'
    // sticky="top"
      fixed='top'
      collapseOnSelect={true}
      expand="lg"
      bg="dark"
      variant="dark"
      >
      <Navbar.Brand>Bapaume</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          {data.map((el, idx) => (
            <Link
              onClick={close}
              to={el.to}
              smooth
              duration={1000}
              offset={isBrowser ? -60 : -275}
              className="nav-link text-white text-uppercase"
              key={idx}
            >
              {el.title}
            </Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;