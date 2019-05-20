import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';


const renderForecastItemDays = (forecastData) => {
    //debugger;
    return forecastData.map( forecast => (
        <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
        </ForecastItem>
    ));
}

const ForecastExtended = ({ city, forecastData }) => (
/*
    constructor(props) {
        super();
        this.state = {
            city: props.city,
            forecastData: null,
        }
    }
    updateCity = (city) => {
        //debugger;
        const url =  getUrlForecastByCity(city);

        fetch(url).then( resolve => {
            return resolve.json();
        
        }).then(data => {
            console.log(data);
            const forecastData = transformForecast(data);
            console.log(forecastData);
            this.setState({
                forecastData
            });

        }).catch( error => {
            console.log(`Error api forecast: ${error}`)
        });
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.city!==prevState.city){
            return {city : nextProps.city};
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.city !== this.state.city) {
            this.setState({
                forecastData: null
            });
            this.updateCity(this.state.city);
        }
    }
*/
    <div>
        <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
        {forecastData ?
            renderForecastItemDays(forecastData) :
            <CircularProgress />
        }
    </div>
   
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;