import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class MedievalCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="slider-wrapper">
        <Slider {...settings}>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/LkZBC9V/Medieval-la-societe-archeologique.jpg"
              className="carousel-img"
            />
            <h1>La societe archeologique</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/M6nZqKJ/Medieval-decord-medievals.jpg"
              className="carousel-img"
            />
            <h1>Decord medievals</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/C99BCyv/Medieval-journe-medievals.jpg"
              className="carousel-img"
            />
            <h1>Journé medievals</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/QrjqT08/Medieval-le-Moineau.jpg"
              className="carousel-img"
            />
            <h1>Le Moineau</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/BVd8d2W/Medieval-retour-de-croisades.jpg"
              className="carousel-img"
            />
            <h1>Retour de croisades</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/bFDWjm3/Medieval-un-canon.jpg"
              className="carousel-img"
            />
            <h1>Un canon</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/g4Gf637/Medieval-une-meurtriere.jpg"
              className="carousel-img"
            />
            <h1>Une meurtriere</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/BLs40pZ/Medieval-Reconstitution-du-souterrain.jpg"
              className="carousel-img"
            />
            <h1>Reconstitution du souterrain</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
