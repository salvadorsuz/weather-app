import React from 'react';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import PropTypes from 'prop-types'
import {
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    DEFAULT,
} from './../../../constants/weather'

const icons = {
    [CLOUDY]: "day-cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "day-rain",
    [SNOW]: "day-snow",
    [WINDY]: "day-windy",
    [DEFAULT]:"day-sunny",
};

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState] ? icons[weatherState] : icons[[DEFAULT]];
    const sizeIcon="2x";
    return (<WeatherIcons name={icon} size={sizeIcon} className="wicon" />);
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{` ${temperature}`}</span>    
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;