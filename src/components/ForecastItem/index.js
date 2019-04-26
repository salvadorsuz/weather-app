import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData/index';




class ForecastItem extends Component {

    render() {
        const { weekDay, hour, data } = this.props;

        return (
            <div>
                <h2>{weekDay} - {hour} hs</h2>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    }
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    }),
}


export default ForecastItem;

