import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import NavbarHeader from './Components/Navbar';
import Welcome from './Components/Welcome';
import Intro from './Components/Intro';
import GallerySection from './Components/GallerySection';
import Videos from './Components/Videos';
import Map from './Components/Map';
import Contact from './Components/Contact';
import { isMobile } from 'react-device-detect';
import { galleryData } from './GalleriesData/galleryData';
import Gallery from './Components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  const [gallery, setGallery] = useState({
    name: '',
    title: '',
    src: ''
  });
  
  useEffect(() => {
    AOS.init();
  }, []);

  const handleClick = (galleryName) => {
    window.scrollTo(0, 0);
    setGallery(galleryName);
  }
  
  return (
    <div className='h-100'>
      <NavbarHeader close={() => setGallery({})} />
      {gallery?.name && gallery?.title &&
         <Gallery images={galleryData[gallery?.name]} title={gallery?.title} close={() => setGallery({})} />        }
        
        <div style={{display: gallery.name && gallery.title ? 'none' : 'block'}}>
          <section name="welcome" id={isMobile ? 'welcome-mobile' : 'welcome'} className="welcome">
            <Welcome />
          </section>
          <section id="intro">
            <Intro />
          </section>
          <section id="gallery">
            <GallerySection handleClick={handleClick} />
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
      
    </div>
  );
};

export default App;
