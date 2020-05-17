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
            Visite virtuelle du Bastion du Dauphin et du Bastion de la Reyne et
            des boves constituant les fortification de la ville de Bapaume. Les
            bastions ont été construits dans les années 1530. Les Fortifications
            ont été bâties sous le règne de Charles le Quint. Ils ont été
            démantelés en août 1847 et ont été réouverts à la guerre de 1940
            pour que la population bapalmoise se mette à l’abri des
            bombardements. Le Bastion du Dauphin a été ouvert en 2000 par la
            Société Archéologique.
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
