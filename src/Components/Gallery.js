import React from 'react';
import Slider from 'react-slick';
import { ArrowReturnRight } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

export default function Gallery({images, title, close}) {
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
    <React.Fragment>
      {/* Title and close button */}
      <div className="row justify-content-end">
        <div className="col-4">
          <h1>{title}</h1>
        </div>
        <div className="col-4 right">
          <div className="d-block d-md-none">
            <Button
              type="button"
              variant="dark"
              onClick={close}
            >
              <ArrowReturnRight />
            </Button>
          </div>
          <div className="d-none d-md-block">
            <Button
              type="button"
              variant="dark"
              onClick={close}
            >
              Retour à la galerie <ArrowReturnRight />
            </Button>
          </div>
        </div>
      </div>
      {/* Gallery images */}
      <div className="row justify-content-center">
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12">
          <Slider {...settings}>
            {images.map((image, index) => {
              return (
                <div key={index}>
                  <div className="d-md-none">
                    <img
                    alt="carousel"
                    src={image.link}
                    className="carousel-img-mobile"
                    />
                    <h3>{image.description}</h3>
                  </div>
                  <div className="d-none d-md-block">
                        <img
                          alt="carousel"
                          src={image.link}
                          className="carousel-img"
                        />
                        <h3>{image.description}</h3>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
}
