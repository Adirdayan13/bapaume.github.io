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

export default class LesBovesCarousel extends Component {
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
              src="https://i.ibb.co/N9R5Vn0/image17.jpg"
              className="carousel-img"
            />
            <h3>Graffitis des soldats</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/GRZdKmY/039.jpg"
              className="carousel-img"
            />
            <h3>Graffitis des soldats</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/CwKBKTR/040.jpg"
              className="carousel-img"
            />
            <h3>Graffitis des soldats</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/Fb6pjvX/038.jpg"
              className="carousel-img"
            />
            <h3>Boves</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/HpwLYzt/011.jpg"
              className="carousel-img"
            />
            <h3>Boves</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/zmGhK39/047.jpg"
              className="carousel-img"
            />
            <h3>Visite des boves</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/KL1c32g/048.jpg"
              className="carousel-img"
            />
            <h3>Visite des boves</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/4RCq83t/Entre-e-des-boves.jpg"
              className="carousel-img"
            />
            <h3>Entrée des boves</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/mRv2wpd/Escalier.jpg"
              className="carousel-img"
            />
            <h3>Escalier</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/Q99yQMv/Escalier-2.jpg"
              className="carousel-img"
            />
            <h3>Escalier de 2° niveau</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/8cGFH15/Escalier-3.jpg"
              className="carousel-img"
            />
            <h3>Escalier principal</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/3ctjsmF/Les-boves.jpg"
              className="carousel-img"
            />
            <h3>Les boves avant la réhabilitation</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/y4b89NP/pepere6.jpg"
              className="carousel-img"
            />
            <h3>Vestiges</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/0Qn4t5t/Re-habilitation-des-boves-2.jpg"
              className="carousel-img"
            />
            <h3>Réhabilitation des boves</h3>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/pjbfY24/Re-habilitation-des-boves.jpg"
              className="carousel-img"
            />
            <h3>Réhabilitation des boves</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
