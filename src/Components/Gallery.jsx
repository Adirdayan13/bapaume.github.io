import React from 'react';
import Slider from 'react-slick';
import { X } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { isMobile } from 'react-device-detect';

const Gallery = ({ images, title, close }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        }
      }
    ],
  };

  return (
    <div className="gallery">
      {/* Title and close button */}
      <div className="d-flex align-items-center mt-2">
          <h2 style={{ margin: '0 auto '}}>{title}</h2>
          <Button
            type="button"
            onClick={close}
            style={{
              background: 'transparent',
              border: 'none', 
              color: 'black'
            }}
          >
            <X size={isMobile ? 30 : 40} />
          </Button>
      </div>
      {/* Gallery images */}
      <div className="d-flex flex-column align-items-center h-100">
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 p-0">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div className={isMobile ? "mt-5" : ''} key={index}>
                <img
                  alt="carousel"
                  src={image.link}
                  className={isMobile ? "carousel-img-mobile" : "carousel-img"}
                />
                <h3 className="text-center">{image.description}</h3>
              </div> 
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
