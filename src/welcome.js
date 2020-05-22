import React from "react";

function Welcome() {
  return (
    <>
      <div
        className="welcome-img-div  container-fluid"
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
        <div className="welcome-img-wrapper">
          <img
            alt="welcome"
            className="welcome-img"
            src="https://i.ibb.co/rZYFCZp/les-Taupes-crop.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Welcome;
