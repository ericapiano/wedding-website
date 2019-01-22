/* this page is the map component */

import React from "react";
import L from "leaflet";
import styled from "styled-components";
import "./map.css";

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const markerIcon = L.icon({
  iconUrl: "marker.png",

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

/* creates center point of map coordinate to view map on page load*/
/* convert a street address to its coordinates using https://www.gps-coordinates.net/ */

export default class Map extends React.Component {
  componentDidMount() {
    this.map = L.map(`map`, {
      center: [40.5308709, -74.53405220000002],
      zoom: 12,
      zoomControl: false
    });

    /* adds zoom in and out plus and minus to map's top right corner */
    L.control
      .zoom({
        position: "topright"
      })
      .addTo(this.map);

    /* link between ` ` is the chosen map styling you like. map display options can be found here: https://leaflet-extras.github.io/leaflet-providers/preview/ */

    L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
      maxZoom: 50
    }).addTo(this.map);

    /* marker is the text, popup is the pinpoint on the map */
    /* convert a street address to its coordinates using https://www.gps-coordinates.net/ */
    /* coordinates for location 1 */

    L.marker([40.5308709, -74.53405220000002], { icon: markerIcon })
      .addTo(this.map)
      .bindPopup("Reception Location.")
      .openPopup();

    /* coordinates for location 2 */

    L.marker([40.5409467, -74.49528750000002], { icon: markerIcon })
      .addTo(this.map)
      .bindPopup("Ceremony Location.")
      .openPopup();
  }

  /* height and width of map on page */
  render() {
    return <Wrapper className="map" width="1000px" height="350px" id="map" />;
  }
}
