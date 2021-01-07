import React from 'react';

export default function AllGalleries({ appState }) {
  return (
    <>
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
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 pt-4">
              <h1>Les Boves</h1>
              <button
                style={{ padding: '0 0 0 0', border: 'none' }}
                type="button"
                onClick={() => appState('lesBoves')}
              >
                <img
                  src="https://i.ibb.co/N9R5Vn0/image17.jpg"
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
                onClick={() => appState('lesBastion')}
              >
                <img
                  src="https://i.ibb.co/mTmdbMS/echele-de-secours-en-1940.jpg"
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
                  onClick={() => appState('lesTaupes')}
                >
                  <img
                    src="https://i.ibb.co/RNSCWjX/les-taupes-en-recherche.jpgLesBastionCarousel"
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
                onClick={() => appState('visite')}
              >
                <img
                  src="https://i.ibb.co/LkXfGmC/visite-explication-de-la-citerne.jpg"
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
                onClick={() => appState('medieval')}
              >
                <img
                  src="https://i.ibb.co/LkZBC9V/Medieval-la-societe-archeologique.jpg"
                  className="gallery-pic"
                  alt="gallery"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}