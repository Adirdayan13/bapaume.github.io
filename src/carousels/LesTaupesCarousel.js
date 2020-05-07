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

export default class LesTaupesCarousel extends Component {
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
              src="https://i.ibb.co/RNSCWjX/les-taupes-en-recherche.jpg"
              className="carousel-img"
            />
            <h1>En recherche</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/Qn0nG08/Les-taupes-chantier-exterieur.jpg"
              className="carousel-img"
            />
            <h1>Chantier exterieur</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/3mtDnv4/les-taupes-au-travail.jpg"
              className="carousel-img"
            />
            <h1>Au travail</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/mqP2vs3/Les-taupes-les-Guides.jpg"
              className="carousel-img"
            />
            <h1>Les guides</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
