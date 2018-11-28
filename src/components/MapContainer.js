import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import TreeIcon from "../elements/tree.png";

const MapContainer = withScriptjs(withGoogleMap((props) =>{

  return (
    <div
       style={{ height: 275,
                width: '95%',
                display: 'flex',
                flexFlow: 'column wrap',
                justifyContent: 'center',
                padding: 0 }}
      >
      <GoogleMap
        defaultZoom={15}
        center={ { lat: props.lat, lng: props.lon} }
        mapTypeControl={false}
        >
        <Marker
        position={ {lat: Number(props.markerLat), lng: Number(props.markerLon)}}
        icon={TreeIcon}
      />
      </GoogleMap>
      </div>
    );
  }
))

export default MapContainer;
