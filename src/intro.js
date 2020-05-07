import React from "react";

function Intro() {
  return (
    <div className="intro">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        className="container-fluid"
      >
        <div className="intro-text-div">
          <p>
            Visite virtuelle du BASTION DU DAUPHIN et du BASTION DE LA REYNE et
            des BOVES constituant les fortification de la ville. Les bastions
            ont été construits dans les années 1530. Les Fortifications ont été
            bâties sous le règne de CHARLES le QUINT (vers 1530). Ils ont été
            démantelés en août 1847. Ils ont été réouverts à la guerre de 1940
            pour que la population se mette à l’abri des bombardements. Le
            Bastion du Dauphin a été ouvert en 2000
          </p>

          <img
            alt="intro"
            className="intro-img"
            src="/pictures/Bapaume-XVIII.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
