import React from "react";
import L from "leaflet";
// import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import "./map.css";

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

export default class Map extends React.Component {
  componentDidMount() {
    this.map = L.map(`map`, {
      center: [51.5, -0.09],
      zoom: 5,
      zoomControl: false
    });

    L.control
      .zoom({
        position: "topright"
      })
      .addTo(this.map);

    L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
      maxZoom: 20
    }).addTo(this.map);

    L.marker([51.5, -0.09])
      .addTo(this.map)
      .bindPopup("Ceremony Location.")
      .openPopup();
  }

  render() {
    return <Wrapper className="map" width="1000px" height="350px" id="map" />;
  }
}
