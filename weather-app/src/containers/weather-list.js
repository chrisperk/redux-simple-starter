import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const renderWeather = city =>
  (
    <tr key={city.city.id}>
      <td>{city.city.name}</td>
    </tr>
  );

const WeatherList = props =>
  (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {props.weather.map(city => renderWeather(city))}
      </tbody>
    </table>
  );

WeatherList.propTypes = {
  weather: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
