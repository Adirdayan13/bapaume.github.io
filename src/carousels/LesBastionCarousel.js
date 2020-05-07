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
              src="https://i.ibb.co/x5qMVNX/Bastion-galerie-de-contre-mine.png"
              className="carousel-img"
            />
            <h1>Extérieur du Bastion</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/jWkTQPK/Bastion-le-bastion-du-Dauphin.jpg"
              className="carousel-img"
            />
            <h1>Le bastion du Dauphin</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/dBYbZP3/Bastion-exte-rieur-du-Bastion.jpg"
              className="carousel-img"
            />
            <h1>Plans des Bastions</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/fdXTT4k/Bastions-Plans-des-Bastions.jpg"
              className="carousel-img"
            />
            <h1>Galerie de contre mine</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
