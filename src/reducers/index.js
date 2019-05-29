import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { cities, 
    getForecastDataFromCities as _getForecastDataFromCities,
    getWeatherCities as _getWeatherCities} from './cities';
import { city } from './city';

export default combineReducers({
    cities,
    city
});

export const getCity = createSelector(state => state.city, city => city);

const getCities = createSelector(state => state.cities, cities => cities);

export const getForecastDataFromCities = createSelector(getCities,  getCity, _getForecastDataFromCities);

export const getWeatherCities = createSelector(getCities, _getWeatherCities);