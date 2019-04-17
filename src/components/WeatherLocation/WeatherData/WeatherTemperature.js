import React from 'react';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
    DEFAULT,
} from './../../../constants/weather'

const icons = {
    [CLOUD]: "day-cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "day-rain",
    [SNOW]: "day-snow",
    [THUNDER]: "day-thunderstorm",
    [DRIZZLE]: "day-showers",
    [DEFAULT]:"day-cloudy",
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