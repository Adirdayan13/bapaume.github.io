import React from 'react';

const Map = () => {
  return (
    <div>
      <h1 className="section-title">Plan D'accès</h1>
      <div
        className="map-div"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-easing="ease-in"
        data-aos-once
        data-aos-anchor-placement="top-bottom"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 align-self-center">
              <div className="map-wrapper">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.218149721649!2d2.845269715442439!3d50.1009236203694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd51e050d93de1%3A0xa821e04cfcc5bc5c!2sBastion%20du%20Dauphin!5e0!3m2!1sen!2sde!4v1610741550316!5m2!1sen!2sde"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
