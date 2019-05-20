import transformForecast from './../services/transformForecast';
import getUrlForecastByCity from './../services/getUrlForecastByCity';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA= 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const setSelectedCity = payload => {

    return dispatch => {
        const url =  getUrlForecastByCity(payload);

        //activar estado indicador busqueda de datos
        dispatch(setCity(payload));

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