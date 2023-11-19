import React from 'react';
import useCurrentLocation from '../hooks/useCurrentLocation'; 

const LocationComponent = () => {
  const { location, getCurrentLocation, error, loading } = useCurrentLocation();

  return (
    <div>
      <h2>Current Location</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location && (
        <>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </>
      )}
      <button onClick={getCurrentLocation}>Get Current Location</button>
    </div>
  );
};

export default LocationComponent;
