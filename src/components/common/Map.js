import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps } from 'recompose';

export const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCTPeJ6h7Xj84VCrmyJhlmMfIrZIRcmwyc&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.defaultLat, lng: props.defaultLon }}>
    {props.markers !== undefined &&
      props.markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lon }}
          onClick={() => {
            if (props.onMarkerClick) props.onMarkerClick(marker.id, marker.lat, marker.lon);
          }}
        />
      ))}
  </GoogleMap>
));
