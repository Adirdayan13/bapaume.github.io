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
            <h3>Explication de la fontaine</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/ngcpxbs/Visite-du-souterrain.jpg"
              className="carousel-img"
            />
            <h3>Visite du souterrain</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/4tN86Zq/Visite-du-souterrain-2.jpg"
              className="carousel-img"
            />
            <h3>Visite du souterrain</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/Vmzj9FX/Visite-groupe-d-e-le-ves.jpg"
              className="carousel-img"
            />
            <h3>Visite d'un groupe d'élèves</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/ZSDgVj6/Visite-journe-e-du-patrimoine.jpg"
              className="carousel-img"
            />
            <h3>Journée du patrimoine</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/Jc65ZB0/Visite-par-Yves-Lievin.jpg"
              className="carousel-img"
            />
            <h3>Yves Lievin, guide</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
