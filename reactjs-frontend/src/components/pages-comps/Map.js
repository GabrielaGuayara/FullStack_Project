import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Marker = ({ markerIcon}) => <div>{markerIcon}</div>;

export default class Map extends Component {

  static defaultProps = {
    center: {
      lat: 40.648486,
      lng: -74.007104
    },
    zoom: 16
  };

  render() {
    return (
      <div className="map" style={{ height: '60vh', width: '80%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCsKRTWdedWzFhmR2mCbSLOpKwC8LXIghk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={40.648486}
            lng={-74.007104}
            markerIcon={<FaMapMarkerAlt className="marker"/>}
            
            
          />
          <div className="markerinfo">THE PERFUME HOUSE STORE</div>
        </GoogleMapReact>
      </div>
    );
  }
}

// VLS Pharmacy
// 4402 5th Ave, Brooklyn, NY 11220
// 40.648486, -74.007104

// import React from 'react';
// import { FaMapMarkerAlt } from 'react-icons/fa';


// const Marker = ({onClick}) => {
//   return(
//     <div className='mapmarker' onClick={onClick}>
//       <FaMapMarkerAlt className='locationicon'/>

//     </div>
//   )
// }
//   export default Marker;