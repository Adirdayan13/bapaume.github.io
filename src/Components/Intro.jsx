import React from 'react';
import { isMobile } from 'react-device-detect';

function Intro() {
  return (
    <div className="container">
      <h1 className="section-title">À PROPOS</h1>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        data-aos-once
        data-aos-anchor-placement="top-bottom"
        className="intro-wrapper"
      >
        <div className='d-flex flex-column'>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 pt-3">
              <img
                alt="intro"
                className="intro-img"
                src="/pictures/Yves.jpg"
              />
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 order-1 pt-3">
              <h2 className={isMobile ? 'intro-text-mobile' : 'intro-text'}>
                Notre Ami Yves Liévin nous a quitté le 3 janvier 2024, il avait 86 ans.
                Une grande perte pour la ville de Bapaume, il avait été à l’origine des initiatives de fouilles  archéologiques dans la ville en découvrant entre autre avec d’autres membres dont une partie est aujourd’hui disparue (Michel, Lucien, Jean-Claude, Claude et Alain) les souterrains du bastion du Dauphin. 
                Le dernier de ses rêves, était de pouvoir entrer dans les salles du Brézé. Y arrivera t’on vraiment, mais il aura eu au moins la chance de pouvoir visionner l’intérieur de ces salles. 
                Sa passion pour Bapaume, l’intérêt qu’il portait continuellement à sa ville de coeur, la ville qui l’a vu naître, était sans  limite. 
                Toutes nos condoléances à, Eliane,  Isabelle, Pascal, Simon, Noémie, Adir et Shir ainsi qu’à toute sa famille.  
                Adieu Yves.
              </h2>
            </div>
          </div>
          <div className={`row mt-5 ${isMobile && 'flex-column-reverse'}`}>
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
        </div>
      </div>
    </div>
  );
}

export default Intro;
