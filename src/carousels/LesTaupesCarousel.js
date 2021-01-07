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

export default function LesTaupesCarousel() {
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
      <div className="carousel-h1">
        <h1>LES TAUPES</h1>
      </div>
      <Slider {...settings}>
        <div className="slider-div">
          <img
            alt="carousel"
            src="https://i.ibb.co/RNSCWjX/les-taupes-en-recherche.jpg"
            className="carousel-img"
          />
          <h3>Groupe des "taupes"</h3>
        </div>
        <div className="slider-div">
          <img
            alt="carousel"
            src="https://i.ibb.co/nqyr63Q/Les-taupes-en-recherche.jpg"
            className="carousel-img"
          />
          <h3>Nettoyage du bastion du Dauphin</h3>
        </div>
        <div className="slider-div">
          <img
            alt="carousel"
            src="https://i.ibb.co/Qn0nG08/Les-taupes-chantier-exterieur.jpg"
            className="carousel-img"
          />
          <h3>Découverte d’un créneau de fusillade</h3>
        </div>
        <div className="slider-div">
          <img
            alt="carousel"
            src="https://i.ibb.co/9wS31qK/Les-taupes-avec-les-jeunes-recrues.jpg"
            className="carousel-img"
          />
          <h3>Avec les jeunes recrues</h3>
        </div>
        <div className="slider-div">
          <img
            alt="carousel"
            src="https://i.ibb.co/3mtDnv4/les-taupes-au-travail.jpg"
            className="carousel-img"
          />
          <h3>Remise en état</h3>
        </div>
        <div className="slider-div">
          <img
            alt="carousel"
            src="https://i.ibb.co/mqP2vs3/Les-taupes-les-Guides.jpg"
            className="carousel-img"
          />
          <h3>Les guides</h3>
        </div>
        <div className="slider-div">
          <img
            alt="carousel"
            src="https://i.ibb.co/rZYFCZp/les-Taupes-crop.jpg"
            className="carousel-img"
          />
          <h3>Les taupes</h3>
        </div>
      </Slider>
    </div>
  );
}
