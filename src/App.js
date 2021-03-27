import React from 'react';
import AOS from 'aos';
import NavbarHeader from './Components/Navbar';
import Welcome from './Components/Welcome';
import Intro from './Components/Intro';
import AllGalleries from './Components/AllGalleries';
import Videos from './Components/Videos';
import Map from './Components/Map';
import Contact from './Components/Contact';
import { isMobile } from 'react-device-detect';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

AOS.init();

export default function App() {
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
        <AllGalleries />
      </section>
      <section id="video">
        <Videos />
      </section>
      <section id="map">
        <Map />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
