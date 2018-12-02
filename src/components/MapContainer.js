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
        defaultZoom={18.5}
        center={ { lat: props.lat, lng: props.lon} }
        defaultOptions={{mapTypeControl: false}}
        >
        {props.trees.map(tree =>
          <Marker
          position={ {lat: Number(tree.latitude), lng: Number(tree.longitude)}}
          icon={TreeIcon}
          key={tree.tree_id}
          onClick={() => props.handleClick(tree)}
        />

        )}
        <Marker
        position={ {lat: props.lat, lng: props.lon} }
        />

      </GoogleMap>
      </div>
    );
  }
))

export default MapContainer;
