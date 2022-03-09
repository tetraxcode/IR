// const key = "AIzaSyBH847gg2wXBQRiZlpSlEucUiYgxWZ65E8"

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 33.983967,
      lng: -117.328528
    },
    zoom: 12
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBH847gg2wXBQRiZlpSlEucUiYgxWZ65E8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LocationOnSharpIcon
            style={{transform: 'scale(1.8)'}}
            lat={33.983967}
            lng={-117.328528}
          />
          <LocationOnSharpIcon
            style={{transform: 'scale(1.8)'}}
            lat={33.1}
            lng={-117.2}
          />
          <LocationOnSharpIcon
            style={{transform: 'scale(1.8)'}}
            lat={	40.730610}
            lng={-73.935242}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
