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
              src="/pictures/image17.jpg"
              className="carousel-img"
            />
            <h1>NONAME</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/GRZdKmY/039.jpg"
              className="carousel-img"
            />
            <h1>Graffitis de solats</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/CwKBKTR/040.jpg"
              className="carousel-img"
            />
            <h1>Graffitis de solats</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/Fb6pjvX/038.jpg"
              className="carousel-img"
            />
            <h1>NONAME</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/HpwLYzt/011.jpg"
              className="carousel-img"
            />
            <h1>NONAME</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/zmGhK39/047.jpg"
              className="carousel-img"
            />
            <h1>NONAME</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/KL1c32g/048.jpg"
              className="carousel-img"
            />
            <h1>NONAME</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/x5qMVNX/Bastion-galerie-de-contre-mine.png"
              className="carousel-img"
            />
            <h1>Bastion galerie de contre mine</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/jWkTQPK/Bastion-le-bastion-du-Dauphin.jpg"
              className="carousel-img"
            />
            <h1>Bastion le bastion du Dauphin</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/4RCq83t/Entre-e-des-boves.jpg"
              className="carousel-img"
            />
            <h1>Entre e des boves</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/mRv2wpd/Escalier.jpg"
              className="carousel-img"
            />
            <h1>Escalier</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/Q99yQMv/Escalier-2.jpg"
              className="carousel-img"
            />
            <h1>Escalier 2</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/8cGFH15/Escalier-3.jpg"
              className="carousel-img"
            />
            <h1>Escalier 3</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/3ctjsmF/Les-boves.jpg"
              className="carousel-img"
            />
            <h1>NONAME</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/y4b89NP/pepere6.jpg"
              className="carousel-img"
            />
            <h1>NONAME</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/0Qn4t5t/Re-habilitation-des-boves-2.jpg"
              className="carousel-img"
            />
            <h1>Re habilitation des boves</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/pjbfY24/Re-habilitation-des-boves.jpg"
              className="carousel-img"
            />
            <h1>Re habilitation des boves</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
