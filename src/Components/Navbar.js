import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';
import { isBrowser } from 'react-device-detect';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  return (
    <React.Fragment>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand>Bapaume</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link
              to="/accueil"
              smooth
              duration={1000}
              className="nav-link text-white text-uppercase"
              onClick={() => scroll.scrollToTop()}
            >
              Accueil
            </Link>
            <Link
              to="intro"
              smooth
              duration={1000}
              offset={isBrowser ? -60 : -275}
              className="nav-link text-white text-uppercase"
            >
              À propos
            </Link>
            <Link
              to="gallery"
              smooth
              duration={1000}
              offset={isBrowser ? -60 : -275}
              className="nav-link text-white text-uppercase"
            >
              Photos
            </Link>

            <Link
              to="video"
              smooth
              duration={1000}
              offset={isBrowser ? -60 : -275}
              className="nav-link text-white text-uppercase"
            >
              Vidéos
            </Link>
            <Link
              to="map"
              smooth
              duration={1000}
              offset={isBrowser ? -60 : -275}
              className="nav-link text-white text-uppercase"
            >
              Carte
            </Link>
            <Link
              to="contact"
              smooth
              duration={1000}
              offset={isBrowser ? -60 : -275}
              className="nav-link text-white text-uppercase"
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
