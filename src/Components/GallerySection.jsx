import React from 'react';
import GallerySquare from "./GallerySquare";

const GallerySection = (props) => {
const { handleClick } = props;
  return (
    <div className="container">
      <h1 className="section-title">GALERIE PHOTOS</h1>
      <div
        data-aos-once
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease"
        data-aos-anchor-placement="top-bottom"
        className="gallery-wrapper"
        id="gallery-wrapper"
      >
          <div className="row justify-content-center">
            <GallerySquare
              title="Les Boves"
              name="lesBoves"
              src="pictures/cover/les-boves.jpg"
              handleClick={handleClick}
            />
            <GallerySquare
              title="Les Bastions"
              name="lesBastion"
              src="pictures/cover/les-bastion.jpg"
              handleClick={handleClick}
            />
            <GallerySquare
              title="Les taupes"
              name="lesTaupes"
              src="pictures/cover/les-taupes.jpg"
              handleClick={handleClick}
            />
            <GallerySquare
              title="Visites"
              name="visite"
              src="pictures/cover/visite.jpg"
              handleClick={handleClick}
            />
            <GallerySquare
              title="Médiéval"
              name="medieval"
              src="pictures/cover/medieval.jpg"
              handleClick={handleClick}
            />
          </div>
      </div>
    </div>
  )
};

export default GallerySection;