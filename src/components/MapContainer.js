import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import TreeIcon from "../elements/tree.png";

const MapContainer = withScriptjs(withGoogleMap((props) =>{

  return (
      <GoogleMap
        defaultZoom={17}
        center={ { lat: props.lat, lng: props.lon} }
        >
        <Marker
        position={ {lat: Number(props.markerLat), lng: Number(props.markerLon)}}
        icon={TreeIcon}
      />
      </GoogleMap>
    );
  }
))

export default MapContainer;
