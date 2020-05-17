import React from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import { animateScroll } from "react-scroll";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWRpcmRheWFuIiwiYSI6ImNrOW8wMTA5ZTA3MHEzZG1zajF6cjV5ZTcifQ.fg8bIMH_zRykPRVIbEGPDg";
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 2.847394,
      lat: 50.100872,
      zoom: 15,
      width: "100vw",
      height: "100vh"
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    this.setState({ loading: true });
    animateScroll.scrollToBottom({
      containerId: "loading"
    });
    e.preventDefault();
    axios
      .post("/send", {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        phone: this.state.phone
      })
      .then(data => {
        if (data.data.success) {
          animateScroll.scrollToBottom({
            containerId: "mailSent"
          });
          this.setState({ success: true, loading: false });
        } else {
          animateScroll.scrollToBottom({
            containerId: "mailFail"
          });
          this.setState({ success: false, loading: false });
        }
      })
      .catch(err => console.log("err in handleSubmit: ", err));
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
    map.addControl(new mapboxgl.NavigationControl());

    new mapboxgl.Marker().setLngLat([2.847394, 50.100872]).addTo(map);

    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([2.847394, 50.100872])
      .setHTML(
        "<p>Les souterains de Bapaume</p><a target='_blank' href='https://goo.gl/maps/SwJJqZp84HnTmQuJ7'>Ouvrir avec google maps</a>"
      )
      .addTo(map);
  }

  render() {
    return (
      <>
        <br />
        <h1 className="section-title">Plan D'accès</h1>
        <br />

        <div ref={el => (this.mapContainer = el)} className="mapContainer" />

        <br />
        <br />
        {this.state.success && (
          <div id="mailSent" style={{ textAlign: "center" }}>
            <img
              alt="success"
              style={{ width: "100px" }}
              src="pictures/check.svg"
            />
            <h1>Votre mail a bien été envoyé</h1>
          </div>
        )}
        {!this.state.success && (
          <>
            <h1>Nous contacter</h1>
            <form method="POST" onSubmit={e => this.handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="fullName">Nom et Prénom *</label>
                <input
                  onChange={e => this.handleChange(e)}
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
                  onChange={e => this.handleChange(e)}
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
                  onChange={e => this.handleChange(e)}
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
                  onChange={e => this.handleChange(e)}
                  autoComplete="off"
                  name="message"
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Ecrivez votre message ici"
                  required
                ></textarea>
                <p style={{ float: "right", fontSize: "15px" }}>
                  * - Champs obligatoires
                </p>
              </div>
              <div style={{ textAlign: "center", paddingTop: "10%" }}>
                <button
                  className="btn-outline-dark btn"
                  style={{ marginBottom: "2%" }}
                >
                  Envoyer
                </button>
              </div>
              {this.state.loading && (
                <div id="loading" style={{ textAlign: "center" }}>
                  <img
                    src="/pictures/loading.svg"
                    alt="loading"
                    style={{ width: "50px" }}
                  />
                </div>
              )}
            </form>
            <br />
            <div style={{ width: "100%", textAlign: "center" }}>
              <a
                style={{ padding: "1%" }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/archeobap"
              >
                <img
                  className="logo"
                  alt="facebook-logo"
                  style={{ width: "30px" }}
                  src="/pictures/facebook.svg"
                />
              </a>
              <span>Société Archéologique de Bapaume</span>
            </div>
          </>
        )}
        {this.state.success === false && (
          <div id="mailFail">
            <br />
            <h1>
              Suite à un problème, votre mail n'a pas pu être envoyé, veuillez
              réessayer.
            </h1>
          </div>
        )}
      </>
    );
  }
}

export default Map;

// <div className="email">
// <h1>Stay in touch</h1>
// <input name="fullname" placeholder="Enter your full name" />
// <br />
// <input name="email" placeholder="Enter your email addres" />
// <br />
// <textarea placeholder="Type your message here"></textarea>
// <br />
// <button>Send</button>
// </div>
