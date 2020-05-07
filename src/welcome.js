import React from "react";

function Welcome() {
  return (
    <>
      <div
        className="welcome-img-div container-fluid"
        data-aos="flip-up"
        data-aos-duration="1500"
        data-aos-easing="ease"
        data-aos-once="false"
      >
        <br />
        <br />
        <h1>
          Découvrez les souterrains de Bapaume avec la société archéologique
          bapalmoise.
        </h1>
        <br />
        <img
          alt="welcome"
          className="welcome-img"
          src="/pictures/les-Taupes.JPG"
        />
      </div>
    </>
  );
}

export default Welcome;
