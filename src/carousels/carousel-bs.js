import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function LesTaupesCarousel(props) {
  return (
    <Carousel>
      <h1>Les taupes</h1>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pictures/image1.jpg"
          alt="First slideee"
        />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pictures/image2.jpg"
          alt="Third slideee"
        />

        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pictures/image3.jpg"
          alt="Third slideee"
        />

        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
