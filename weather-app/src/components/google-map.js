/* eslint-disable no-new, no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.mapRef, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      },
    });
  }

  render() {
    return (
      // refer to html element with this.refs.map
      <div ref={(el) => { this.mapRef = el; }} />
    );
  }
}

GoogleMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};

export default GoogleMap;
