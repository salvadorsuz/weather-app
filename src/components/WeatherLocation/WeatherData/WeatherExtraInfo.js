import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoCont">
        <span className="humidity">{`Humidity: ${humidity}`}</span>
        <span className="wind">{`Wind: ${wind}`}</span>
    </div>
);

Location.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}
export default WeatherExtraInfo;