import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import { isBrowser } from "react-device-detect";

function scrollToTop() {
  scroll.scrollToTop();
}

export default function() {
  return (
    <>
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
              smooth={true}
              duration={1000}
              className="nav-link text-white text-uppercase"
              onClick={scrollToTop}
            >
              Accueil
            </Link>
            {isBrowser ? (
              <Link
                to="intro"
                smooth={true}
                duration={1000}
                offset={-60}
                className="nav-link text-white text-uppercase"
              >
                À propos
              </Link>
            ) : (
              <Link
                to="intro"
                smooth={true}
                duration={1000}
                offset={-275}
                className="nav-link text-white text-uppercase"
              >
                À propos
              </Link>
            )}
            {isBrowser ? (
              <Link
                to="gallery"
                smooth={true}
                duration={1000}
                offset={-60}
                className="nav-link text-white text-uppercase"
              >
                Gallery
              </Link>
            ) : (
              <Link
                to="gallery"
                smooth={true}
                duration={1000}
                offset={-275}
                className="nav-link text-white text-uppercase"
              >
                Gallery
              </Link>
            )}
            {isBrowser ? (
              <Link
                to="video"
                smooth={true}
                duration={1000}
                offset={-60}
                className="nav-link text-white text-uppercase"
              >
                Video
              </Link>
            ) : (
              <Link
                to="video"
                smooth={true}
                duration={1000}
                offset={-275}
                className="nav-link text-white text-uppercase"
              >
                Video
              </Link>
            )}
            {isBrowser ? (
              <Link
                to="map"
                smooth={true}
                duration={1000}
                offset={-60}
                className="nav-link text-white text-uppercase"
              >
                Contact
              </Link>
            ) : (
              <Link
                to="map"
                smooth={true}
                duration={1000}
                offset={-275}
                className="nav-link text-white text-uppercase"
              >
                Contact
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
