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

export default class VisiteCarousel extends Component {
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
              src="https://i.ibb.co/LkXfGmC/visite-explication-de-la-citerne.jpg"
              className="carousel-img"
            />
            <h1>Explication de la citerne</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/ngcpxbs/Visite-du-souterrain.jpg"
              className="carousel-img"
            />
            <h1>Visite du souterrain</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/Vmzj9FX/Visite-groupe-d-e-le-ves.jpg"
              className="carousel-img"
            />
            <h1>Visite groupe d'éléves</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/ZSDgVj6/Visite-journe-e-du-patrimoine.jpg"
              className="carousel-img"
            />
            <h1>Visite journée du patrimoine</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/Jc65ZB0/Visite-par-Yves-Lievin.jpg"
              className="carousel-img"
            />
            <h1>Visite par Yves Lievin</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
