import React from "react";
import mapboxgl from "mapbox-gl";

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
      .setHTML("<p>Crazy tunnels of bapaume</p>")
      .addTo(map);
  }

  render() {
    return (
      <>
        <h1 className="section-title">Our location:</h1>
        <br />

        <div ref={el => (this.mapContainer = el)} className="mapContainer" />

        <br />
        <h1>Keep in touch</h1>
        <br />
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="emailForm">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailForm"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Type your message here"
            ></textarea>
          </div>
        </form>
        <button className="btn-outline-dark btn" style={{ marginBottom: "2%" }}>
          Send
        </button>
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
