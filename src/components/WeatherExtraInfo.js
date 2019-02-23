import React from 'react';
import './Components.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span className="humidity">{`Humidity: ${humidity}`}</span>
        <span>{` - `}</span>
        <span className="wind">{`Wind: ${wind}`}</span>
    </div>
);

export default WeatherExtraInfo;