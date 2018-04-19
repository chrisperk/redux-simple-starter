import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chart from '../components/chart';

const renderWeather = (city) => {
  const temps = city.list.map(weather => weather.main.temp);

  return (
    <tr key={city.city.id}>
      <td>{city.city.name}</td>
      <td>
        <Chart data={temps} color="red" />
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
