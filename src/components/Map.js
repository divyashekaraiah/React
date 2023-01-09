
import React from 'react';
import Map from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2RpdnlhMTM1IiwiYSI6ImNsY29lNms5ZTAwN3Ezb3RpcDhxbGJ6cmQifQ.e3NHcxaiiK3Ag9PfX3FgZg'; // Set your mapbox token here

export default function MapView() {
  return (
    <Map
      id="mymap"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    />
  );
}