import React from 'react'
import { Container } from 'react-bootstrap';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  height: '350px'
};

const center = {
  lat: 10.438053,
  lng: -66.992419
};

function MyComponent() {
   
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <Container className='p-0'>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </Container>
   
  ) : <></>
}

export default React.memo(MyComponent)