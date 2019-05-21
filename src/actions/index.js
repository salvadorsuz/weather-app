import transformForecast from './../services/transformForecast';
import transfromWeather from './../services/transformWeather';
import getUrlForecastByCity from './../services/getUrlForecastByCity';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA= 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY= 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY= 'GET_WEATHER_CITY';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setSelectedCity = payload => {

    return (dispatch, getState) => {
        const url =  getUrlForecastByCity(payload);

        //activar estado indicador busqueda de datos
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();
        
        if(date && (now-date)< 1*60*1000) {
            return ;
        }

        return fetch(url).then( 
            resolve => (resolve.json())
        ).then( data => {
            const forecastData = transformForecast(data);
            console.log(forecastData);

            //modificar estado con resultado de promise
            dispatch(setForecastData({city:payload, forecastData}));
        }).catch( error => {
            console.log(`Error api forecast: ${error}`)
        });
    }
};

export const setWeather = payload => {
   
    return dispatch => {

        payload.forEach(city => {

            dispatch(getWeatherCity(city));

            const api_weather = getUrlWeatherByCity(city);
            return fetch(api_weather).then(
                resolve => (resolve.json())
            ).then(data => {
                const weather = transfromWeather(data);
                console.log(weather);

                dispatch(setWeatherCity({city, weather}));
            }).catch( error => {
                console.log(`Error api weather: ${error}`)
            });
        });
    }
};