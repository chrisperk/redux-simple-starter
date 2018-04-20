import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

const renderWeather = (city) => {
  const temps = city.list.map(weather => weather.main.temp);
  const pressures = city.list.map(weather => weather.main.pressure);
  const humidities = city.list.map(weather => weather.main.humidity);
  const { lon, lat } = city.city.coord;

  return (
    <tr key={city.city.id}>
      <td><GoogleMap lat={lat} lon={lon} /></td>
      <td>
        <Chart data={temps} color="red" units="K" />
      </td>
      <td>
        <Chart data={pressures} color="blue" units="hPa" />
      </td>
      <td>
        <Chart data={humidities} color="green" units="%" />
      </td>
    </tr>
  );
};

const WeatherList = props =>
  (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
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
