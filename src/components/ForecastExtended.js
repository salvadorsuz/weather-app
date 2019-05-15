import React, { Component}  from 'react';
import { PropTypes } from 'prop-types';
import ForecastItem from './ForecastItem/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformForecast from './../services/transformForecast';
import getUrlForecastByCity from './../services/getUrlForecastByCity';
import './styles.css';

/* const days =[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
]; 

const data = {
    temperature: 10,
    weatherState: 'normal',
    humidity: 15,
    wind: 30,

}; */


class ForecastExtended extends Component {

    constructor(props) {
        super();
        this.state = {
            city: props.city,
            forecastData: null,
        }
    }

    renderForecastItemDays(forecastData) {
        //debugger;
        return forecastData.map( forecast => (
            <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} 
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>
        ));
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
/*
    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city) {
            this.setState({
                forecastData: null
            });
            this.updateCity(nextProps.city);
        }
    }
*/

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

    render() {
        console.log("render forecast extended");
        const { city, forecastData} = this.state;
        return (<div>
                    <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
                    {forecastData ?
                        this.renderForecastItemDays(forecastData) :
                        <CircularProgress />
                    }
                </div>);
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;