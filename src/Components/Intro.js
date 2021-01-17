import React from 'react';
import { isMobile } from 'react-device-detect';

function Intro() {
  return (
    <div className="container">
        {/* <div className="col-12"> */}
          <h1 className="section-title">À PROPOS</h1>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="intro-wrapper"
          >
      <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 pt-3">
              <h2 className={isMobile ? 'intro-text-mobile' : 'intro-text'}>
                Visite virtuelle du Bastion du Dauphin et du Bastion de la Reyne et
                des boves constituant les Fortifications de la ville de Bapaume. Les
                bastions ont été construits dans les années 1530. Les Fortifications
                ont été bâties sous le règne de Charles Quint. Elles ont été démantelées
                et ré-ouvertes pendant la 2nd Guerre Mondiale
                pour que la population bapalmoise se mette à l’abri des
                bombardements. Le bastion a été réhabilité en l’an 2000 par
                les membres de la Société Archéologique.
              </h2>
            </div>
              <div className="col-lg-6 col-sm-12 col-xs-12 order-1 pt-3">
              <img
                alt="intro"
                className="intro-img"
                src="/pictures/Bapaume-XVIII.jpg"
              />
              </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Intro;
