/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import { animateScroll } from 'react-scroll';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import { isMobile } from 'react-device-detect';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpcmRheWFuIiwiYSI6ImNrOW8wMTA5ZTA3MHEzZG1zajF6cjV5ZTcifQ.fg8bIMH_zRykPRVIbEGPDg';
export default function Map() {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [state, setState] = useState({
    lng: 2.847394,
    lat: 50.100872,
    zoom: 15,
    width: '100vw',
    height: '100vh',
  });
  let mapContainer;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    animateScroll.scrollToBottom({
      containerId: 'loading',
    });
    e.preventDefault();
    await axios.post('https://b3v2tzun4d.execute-api.us-east-1.amazonaws.com/prod/', { ...values })
      .then((res) => {
        console.log('res: ', res.data);
        setLoading(false);
        if (res.data === 'Email sent') {
          setSuccess(true);
        } else {
          setError(true);
        }
      }).catch((err) => {
        setLoading(false);
        setSuccess(false);
        setError(true);
        console.log('err from sending email: ', err.message);
        setState({ ...state, success: false, loading: false });
      });
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [state.lng, state.lat],
      zoom: state.zoom,
    });
    map.on('move', () => {
      setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
    mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js');
    map.addControl(new MapboxLanguage({
      defaultLanguage: 'fr',
    }));
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      'top-left',
    );

    new mapboxgl.Marker().setLngLat([2.847394, 50.100872]).addTo(map);

    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([2.847394, 50.101400])
      .setHTML(
        "<p>Les souterains de Bapaume</p><a target='_blank' href='https://goo.gl/maps/mSib4E9Be3p5g3Vj6'>Ouvrir avec google maps</a>",
      )
      .addTo(map);
  }, []);

  return (
    <>
    <h1 className="section-title">Plan D'accès</h1>
    <div
      className="map-div"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-easing="ease-in"
      data-aos-once="true"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 align-self-center">
            <div ref={(el) => (mapContainer = el)} className={isMobile ? 'mapContainerMobile' : 'mapContainer'} />
            {!error && !success && (
              <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-12 form-col">
                  <h1 className="section-title">Nous contacter</h1>
                  <form method="POST" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                      <label htmlFor="fullName">Nom et Prénom *</label>
                      <input
                        onChange={(e) => handleChange(e)}
                        autoComplete="off"
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="name"
                        placeholder="Entrez votre nom et prénom"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="emailForm">Adresse e-mail *</label>
                      <input
                        onChange={(e) => handleChange(e)}
                        autoComplete="off"
                        name="email"
                        type="email"
                        className="form-control"
                        id="emailForm"
                        placeholder="adresse@exemple.fr"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneForm">Numéro de téléphone</label>
                      <input
                        onChange={(e) => handleChange(e)}
                        autoComplete="off"
                        name="phone"
                        type="text"
                        className="form-control"
                        id="phoneForm"
                        placeholder="Entrez votre numéro de téléphone"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        onChange={(e) => handleChange(e)}
                        autoComplete="off"
                        name="message"
                        className="form-control"
                        id="message"
                        rows="3"
                        placeholder="Ecrivez votre message ici"
                        required
                      />
                      <p style={{ float: 'right', fontSize: '15px' }}>
                        * - Champs obligatoires
                      </p>
                    </div>
                    <div style={{ textAlign: 'center', paddingTop: '10%' }}>
                      {!loading && (
                      <button
                        type="submit"
                        className="btn-outline-dark btn"
                        style={{ marginBottom: '2%' }}
                      >
                        Envoyer
                      </button>
                      )}
                    </div>
                    {loading && (
                    <div id="loading" style={{ textAlign: 'center' }}>
                      <img
                        src="https://raw.githubusercontent.com/Adirdayan13/bapaume/gh-pages/pictures/loading.svg"
                        alt="loading"
                        style={{ width: '50px' }}
                      />
                    </div>
                    )}
                  </form>
                  <br />
                  <div style={{ width: '100%', textAlign: 'center' }}>
                    <a
                      style={{ padding: '1%' }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/archeobap"
                    >
                      <img
                        className="logo"
                        alt="facebook-logo"
                        style={{ width: '30px' }}
                        src="https://raw.githubusercontent.com/Adirdayan13/bapaume/gh-pages/pictures/facebook.svg"
                      />
                    </a>
                    <span>Société Archéologique de Bapaume</span>
                  </div>
                </div>
              </div>
            )}
            {success && (
              <div className="mailSent">
                <img
                  alt="success"
                  style={{ width: '100px' }}
                  src="https://raw.githubusercontent.com/Adirdayan13/bapaume/gh-pages/pictures/check.svg"
                />
                <h1>Votre mail a bien été envoyé</h1>
              </div>
            )}
            <div className="credit">
              <span>
                Site contruit par{' '}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https:/www.adirdayan.com/?bapaume"
                >
                  Adir Dayan
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
        {/* </div> */}
      {/* <br />
      <br />
      <div ref={(el) => (mapContainer = el)} className={isMobile ? 'mapContainerMobile' : 'mapContainer'} />
      <br />
      <br />

      {success && (
      <div id="mailSent" style={{ textAlign: 'center' }}>
        <img
          alt="success"
          style={{ width: '100px' }}
          src="https://raw.githubusercontent.com/Adirdayan13/bapaume/gh-pages/pictures/check.svg"
        />
        <h1>Votre mail a bien été envoyé</h1>
      </div>
      )}

      {!error && !success && (
      <>
        <h1>Nous contacter</h1>
        <form method="POST" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="fullName">Nom et Prénom *</label>
            <input
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              type="text"
              className="form-control"
              id="fullName"
              name="name"
              placeholder="Entrez votre nom et prénom"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailForm">Adresse e-mail *</label>
            <input
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              name="email"
              type="email"
              className="form-control"
              id="emailForm"
              placeholder="adresse@exemple.fr"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneForm">Numéro de téléphone</label>
            <input
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              name="phone"
              type="text"
              className="form-control"
              id="phoneForm"
              placeholder="Entrez votre numéro de téléphone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              name="message"
              className="form-control"
              id="message"
              rows="3"
              placeholder="Ecrivez votre message ici"
              required
            />
            <p style={{ float: 'right', fontSize: '15px' }}>
              * - Champs obligatoires
            </p>
          </div>
          <div style={{ textAlign: 'center', paddingTop: '10%' }}>
            {!loading && (
            <button
              type="submit"
              className="btn-outline-dark btn"
              style={{ marginBottom: '2%' }}
            >
              Envoyer
            </button>
            )}
          </div>
          {loading && (
          <div id="loading" style={{ textAlign: 'center' }}>
            <img
              src="https://raw.githubusercontent.com/Adirdayan13/bapaume/gh-pages/pictures/loading.svg"
              alt="loading"
              style={{ width: '50px' }}
            />
          </div>
          )}
        </form>
        <br />
        <div style={{ width: '100%', textAlign: 'center' }}>
          <a
            style={{ padding: '1%' }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/archeobap"
          >
            <img
              className="logo"
              alt="facebook-logo"
              style={{ width: '30px' }}
              src="https://raw.githubusercontent.com/Adirdayan13/bapaume/gh-pages/pictures/facebook.svg"
            />
          </a>
          <span>Société Archéologique de Bapaume</span>
        </div>
      </>
      )}

      {error && (
      <div id="mailFail">
        <br />
        <h1>
          Suite à un problème, votre mail n'a pas pu être envoyé, veuillez
          réessayer.
        </h1>
      </div>
      )}
      <div className="credit">
            <span>
              Site contruit par{' '}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https:/www.adirdayan.com/?bapaume"
              >
                Adir Dayan
              </a>
            </span> */}
          </div>
    </>
  );
}
