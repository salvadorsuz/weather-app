import React from 'react';
import WeatherIcons from 'react-weathericons';
import './Components.css';
import {
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weather'

const icons = {
    [CLOUDY]: "day-cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "day-rain",
    [SNOW]: "day-snow",
    [WINDY]: "day-windy",
};

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    if(icon)
        return (<WeatherIcons name={icon} size="2x" />);
    else 
        return (<WeatherIcons name={"day-sunny"} size="2x" />);
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{` ${temperature}`}</span>    
    </div>
);

export default WeatherTemperature;