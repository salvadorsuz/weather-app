import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
} from './../../constants/weather';

const data = {
    temperature : 5,
    weatherState : SUN,
    humidity: 20,
    wind: 10
}

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Madrid"} />
        <WeatherData data={data} />
    </div>
);

export default WeatherLocation;