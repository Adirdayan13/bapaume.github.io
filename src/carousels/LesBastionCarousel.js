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

export default class LesBastionCarousel extends Component {
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
              src="https://i.ibb.co/mTmdbMS/echele-de-secours-en-1940.jpg"
              className="carousel-img"
            />
            <h1>Echelle de secours en 1940</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/x5qMVNX/Bastion-galerie-de-contre-mine.png"
              className="carousel-img"
            />
            <h1>Galerie de contre mine</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/dBYbZP3/Bastion-exte-rieur-du-Bastion.jpg"
              className="carousel-img"
            />
            <h1>Entrée exterieure</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/x8msgT8/rameau-de-fusillade.jpg"
              className="carousel-img"
            />
            <h1>Rameau de fusillade</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/fdXTT4k/Bastions-Plans-des-Bastions.jpg"
              className="carousel-img"
            />
            <h1>Plans des bastions</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/frxfv1c/entre-e-a-droite-de-1940.jpg"
              className="carousel-img"
            />
            <h1>Entrée à droite de 1940</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/09DnFYC/Rameau-qui-date-de-la-visite-de-Charles-Quint-Copie.jpg"
              className="carousel-img"
            />
            <h1>Rameau qui date de la visite de Charles Quint</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/5k9dXCy/1er-salle-du-bastion-de-la-Reyne.jpg"
              className="carousel-img"
            />
            <h1>1ère salle du bastion de la Reyne</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/fdRGQwb/2er-salle.jpg"
              className="carousel-img"
            />
            <h1>2ème salle</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
