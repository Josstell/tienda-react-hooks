import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({data}) => {

  const mapStyles = {
    height: '50vh',
    width: '100%',
  };
  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyCCv_SbZ-4-0F0DFXNfFIdA6_XGCvFe9qk">
      <GoogleMap 
        mapContainerStyle={mapStyles} 
        zoom={10} 
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
