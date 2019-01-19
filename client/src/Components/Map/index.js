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
      center: [40.5308709, -74.53405220000002],
      zoom: 12,
      zoomControl: false
    });

    L.control
      .zoom({
        position: "topright"
      })
      .addTo(this.map);

    L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
      maxZoom: 50
    }).addTo(this.map);

    L.marker([40.5308709, -74.53405220000002])
      .addTo(this.map)
      .bindPopup("Reception Location.")
      .openPopup();

    L.marker([40.5409467, -74.49528750000002])
      .addTo(this.map)
      .bindPopup("Ceremony Location.")
      .openPopup();
  }

  render() {
    return <Wrapper className="map" width="1000px" height="350px" id="map" />;
  }
}
