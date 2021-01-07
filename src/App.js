import React, { useState } from 'react';
import AOS from 'aos';
import Welcome from './welcome';
import Intro from './intro';
import Videos from './Videos';
import Map from './map';
import AllGalleries from './AllGalleries';
import LesBastionCarousel from './carousels/LesBastionCarousel';
import LesTaupesCarousel from './carousels/LesTaupesCarousel';
import VisiteCarousel from './carousels/VisiteCarousel';
import MedievalCarousel from './carousels/MedievalCarousel';
import LesBovesCarousel from './carousels/LesBovesCarousel';
import NavbarHeader from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import { isMobile } from 'react-device-detect';

AOS.init();

export default function App() {
  const [state, setState] = useState({
    lesBoves: false,
    medieval: false,
    lesBastion: false,
    visite: false,
    lesTaupes: false,
    isAllGalleriesOpen: true,
  });

  return (
    <div>
      <NavbarHeader />
      <section name="welcome" id={isMobile ? 'welcome-mobile' : 'welcome'}>
        <Welcome />
      </section>
      <section id="intro">
        <Intro />
      </section>
      <section id="gallery">
        {state.isAllGalleriesOpen && (
          <AllGalleries
            appState={(galleryName) => (
              setState({ ...state, [galleryName]: true, isAllGalleriesOpen: false })
            )}
          />
        )}
        {state.lesTaupes && (
          <>
            <div className="x-div">
              <button
                type="button"
                className="x btn btn-outline-dark btn-sm"
                onClick={() => setState({ lesTaupes: false, isAllGalleriesOpen: true })}
              >
                Retour à la galerie
              </button>
            </div>
            <LesTaupesCarousel />
          </>
        )}
        {state.visite && (
          <>
            <div className="x-div">
              <button
                type="button"
                className="x btn btn-outline-dark btn-sm"
                onClick={() => setState({ visite: false, isAllGalleriesOpen: true })}
              >
                Retour à la galerie
              </button>
            </div>
            <div className="carousel-h1">
              <h1>VISITES</h1>
            </div>
            <VisiteCarousel />
          </>
        )}
        {state.lesBastion && (
        <>
          <div className="x-div">
            <button
              type="button"
              className="x btn btn-outline-dark btn-sm"
              onClick={() =>
                setState({ lesBastion: false, isAllGalleriesOpen: true })}
            >
              Retour à la galerie
            </button>
          </div>
          <div className="carousel-h1">
            <h1>LES BASTIONS</h1>
          </div>
          <LesBastionCarousel />
        </>
        )}
        {state.lesBoves && (
        <React.Fragment>
          <div className="carousel-h1">
            <h1>LES BOVES</h1>
          </div>
          <LesBovesCarousel close={() => setState({ lesBoves: false, isAllGalleriesOpen: true })}/>
        </React.Fragment>
        )}
        {state.medieval && (
        <React.Fragment>
          <div className="x-div">
            <button
              type="button"
              className="x btn btn-outline-dark btn-sm"
              onClick={() =>
                setState({ medieval: false, isAllGalleriesOpen: true })}
            >
              Retour à la galerie
            </button>
          </div>
          <div className="carousel-h1">
            <h1>MEDIEVAL</h1>
          </div>
          <MedievalCarousel />
        </React.Fragment>
        )}
      </section>
      <section id="video">
        <Videos />
      </section>
      <section id="map">
        <Map />
      </section>
    </div>
  );
}
