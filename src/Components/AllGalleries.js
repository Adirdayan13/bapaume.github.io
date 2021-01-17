import React, { useState } from 'react';
import Gallery from './Gallery';
import {
  medievalData,
  visiteData,
  lesTaupesData,
  lesBovesData,
  lesBastionData
} from '../GalleriesData/galleryData';

export default function AllGalleries() {
  const [gallery, setGallery] = useState({ allGalleries: true });
  const [lesTaupes] = useState(lesTaupesData);
  const [lesBastion] = useState(lesBastionData);
  const [visite] = useState(visiteData);
  const [medieval] = useState(medievalData);
  const [lesBoves] = useState(lesBovesData);

  const handleClick = (galleryName) => {
    setGallery({ allGalleries: false, [galleryName]: true });
  }

  return (
    <div className="container">
      {gallery.allGalleries && (
        <React.Fragment>
          <h1 className="section-title">GALERIE PHOTOS</h1>
          <div
            data-aos-once="true"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-anchor-placement="top-bottom"
            className="gallery-wrapper"
            id="gallery-wrapper"
          >
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4">
                  <h1>Les Boves</h1>
                  <button
                    style={{ padding: '0 0 0 0', border: 'none' }}
                    type="button"
                    onClick={() => handleClick('lesBoves')}
                  >
                    <img
                      src="pictures/cover/les-boves.jpg"
                      className="gallery-pic"
                      alt="gallery"
                    />
                  </button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4">
                  <h1>Les Bastions</h1>
                  <button
                    style={{ padding: '0 0 0 0', border: 'none' }}
                    type="button"
                    onClick={() => setGallery({ lesBastion: true })}
                  >
                    <img
                      src="pictures/cover/les-bastion.jpg"
                      className="gallery-pic"
                      alt="gallery"
                    />
                  </button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pt-4">
                  <h1>Les taupes</h1>
                    <button
                      style={{ padding: '0 0 0 0', border: 'none' }}
                      type="button"
                      onClick={() => setGallery({ lesTaupes: true })}
                    >
                      <img
                        src="pictures/cover/les-taupes.jpg"
                        className="gallery-pic"
                        alt="gallery"
                      />
                    </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 pt-4">
                  <h1>Visites</h1>
                  <button
                    style={{ padding: '0 0 0 0', border: 'none' }}
                    type="button"
                    onClick={() => setGallery({ visite: true })}
                  >
                    <img
                      src="pictures/cover/visite.jpg"
                      className="gallery-pic"
                      alt="gallery"
                    />
                  </button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 pt-4">
                  <h1>Médiéval</h1>
                  <button
                    style={{ padding: '0 0 0 0', border: 'none' }}
                    type="button"
                    onClick={() => setGallery({ medieval: true })}
                  >
                    <img
                      src="pictures/cover/medieval.jpg"
                      className="gallery-pic"
                      alt="gallery"
                    />
                  </button>
                </div>
              </div>
          </div>
        </React.Fragment>
      )}
      {gallery.lesTaupes && (
        <Gallery images={lesTaupes} title="LES TAUPES" close={() => setGallery({ allGalleries: true })} />
      )}
      {gallery.lesBastion && (
        <Gallery images={lesBastion} title="LES BASTION" close={() => setGallery({ allGalleries: true })} />
      )}
      {gallery.visite && (
        <Gallery images={visite} title="VISITE" close={() => setGallery({ allGalleries: true })} />
      )}
      {gallery.medieval && (
        <Gallery images={medieval} title="MEDIEVAL" close={() => setGallery({ allGalleries: true })} />
      )}
      {gallery.lesBoves && (
        <Gallery images={lesBoves} title="LES BOVES" close={() => setGallery({ allGalleries: true })} />
      )}
    </div>
  )
}