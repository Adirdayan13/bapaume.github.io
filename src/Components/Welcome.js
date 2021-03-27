import React from 'react';

function Welcome() {
  return (
    <div className="container">
      <div
        className="welcome-img-div"
        data-aos="flip-up"
        data-aos-duration="1500"
        data-aos-easing="ease"
        data-aos-once="true"
      >
        <h1 className="section-title">
          Découvrez les souterrains avec la Société Archéologique et Historique de Bapaume
        </h1>
        <div className="row justify-content-center">
          <div className="col-12">
            <img
              alt="welcome"
              className="welcome-img"
              src="pictures/les-taupes/6.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
