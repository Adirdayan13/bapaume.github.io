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
              src="https://i.ibb.co/HpwLYzt/011.jpg"
              className="carousel-img"
            />
            <h1>NONAME</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/ZWYn4r1/037.jpg"
              className="carousel-img"
            />
            <h1>NONAME</h1>
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
              src="https://i.ibb.co/GRZdKmY/039.jpg"
              className="carousel-img"
            />
            <h1>NONAME</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/CwKBKTR/040.jpg"
              className="carousel-img"
            />
            <h1>NONAME</h1>
          </div>
          <div className="slider-div">
            <img
              alt="carousel"
              src="https://i.ibb.co/2dMB1c7/045.jpg"
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
        </Slider>
      </div>
    );
  }
}
