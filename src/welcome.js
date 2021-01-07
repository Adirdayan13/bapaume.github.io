import React from 'react';
import { isMobile } from 'react-device-detect';

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
            <h1 className="section-title">Découvrez les souterrains avec la Société Archéologique et Historique de Bapaume</h1>
      <div className="row">
        <div className="col-12">
              <img
                style={isMobile ? { paddingTop: 30 } : {}}
                alt="welcome"
                className="welcome-img"
                src="https://i.ibb.co/rZYFCZp/les-Taupes-crop.jpg"
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
