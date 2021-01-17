import React, { useState } from 'react';
import axios from 'axios';
import { animateScroll } from 'react-scroll';

export default function Contact() {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    animateScroll.scrollToBottom({
      containerId: 'loading',
    });
    await axios.post('https://b3v2tzun4d.execute-api.us-east-1.amazonaws.com/prod/', { ...values })
      .then((res) => {
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
      });
    };

  return (
    <div
        className="contact-div"
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-easing="ease-in"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
    >
      <div className="container">
        {!error && !success && (
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-12 form-col">
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
                    <p style={{ float: 'right', fontSize: '15px', paddingTop: '5px' }}>
                    * - Champs obligatoires
                    </p>
                </div>
                {!loading && (
                    <div className="submit-button">
                    <button
                        type="submit"
                        className="btn-outline-dark btn"
                        style={{ marginBottom: '2%' }}
                    >
                        Envoyer
                    </button>
                    </div>
                )}
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
                <div className="row justify-content-between credits">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 right">
                    <span>Site contruit par{' '}
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
      </div>
    </div>
  )
};
