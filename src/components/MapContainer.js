import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const MapContainer = withScriptjs(withGoogleMap((props) =>{

  // const markers = props.doctors.map( doctor => <DoctorMarker
  //                   key={doctor.uid}
  //                   doctor={doctor}
  //                   location={{lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon}}
  //                 />);

  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat: props.lat, lng: props.lon} }
        >
      </GoogleMap>
    );
  }
))

export default MapContainer;
