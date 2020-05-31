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
            <h3>La société archéologique</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/M6nZqKJ/Medieval-decord-medievals.jpg"
              className="carousel-img"
            />
            <h3>Décors médievaux</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/C99BCyv/Medieval-journe-medievals.jpg"
              className="carousel-img"
            />
            <h3>Journée médiévale</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/QrjqT08/Medieval-le-Moineau.jpg"
              className="carousel-img"
            />
            <h3>Salle dite du "Moineau"</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/BVd8d2W/Medieval-retour-de-croisades.jpg"
              className="carousel-img"
            />
            <h3>Retours des croisades</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/bFDWjm3/Medieval-un-canon.jpg"
              className="carousel-img"
            />
            <h3>Un canon</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/g4Gf637/Medieval-une-meurtriere.jpg"
              className="carousel-img"
            />
            <h3>Une meurtrière</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/BLs40pZ/Medieval-Reconstitution-du-souterrain.jpg"
              className="carousel-img"
            />
            <h3>Reconstitution du souterrain</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
