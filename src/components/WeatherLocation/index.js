import React, { Component }  from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transfromWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './styles.css';

class WeatherLocation extends Component {

  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
      data: null,
    }

    console.log("constructor");
  }

  logFields = () => {
    const { city } = this.state;
    console.log(`City ${city}`);
  }

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);

    console.log("consultar "+api_weather);

    fetch(api_weather).then( resolve => {
      return resolve.json();

    }).then(data => {
      const newWeather = transfromWeather(data);
      console.log(newWeather);
//      debugger;
      this.setState({
        data : newWeather
      }, ()=> this.logFields());

    }).catch( error => {
      console.log(`Error api: ${error}`)
    });

  }

  componentDidMount() {
    console.log('componentDidMount');
    this.handleUpdateClick() ;
  }
 
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {data ? 
          <WeatherData data={data} /> : 
          <CircularProgress />
        }
      </div>
    );
  }
}
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func.isRequired,
}
export default WeatherLocation;