import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weather'

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} weatherState={RAIN} />
        <WeatherExtraInfo humidity={80} wind={10} />
    </div>
);

export default WeatherData;