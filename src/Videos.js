import React from 'react';

export default function Videos() {
  return (
    <>
    <h1 className="section-title">VIDEOS</h1>
    <div
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 align-self-end">
                <h1>Visite du Bastion du Dauphin</h1>
                <iframe
                  title="video"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/NoSyssZez3U"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                </div>
              <div className="col-lg-6 col-md-6 col-sm-12 align-self-end">
                <h1>Bapaume Médiéval: reconstitution par la Société Archéologique</h1>
                <iframe
                  title="video"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/_oiXBphPZgk"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 align-self-end">
                <h1>Exploration de Bastion du Brézé</h1>
                <iframe
                  title="video"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/y86KElrxChw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 align-self-end">
                <h1>Visite de Bapaume et du Bastion du Dauphin</h1>
                <iframe
                  title="video"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/bVJws7yP-cw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                </div>
        </div>
      </div>
    </div>
  </>
  )
}