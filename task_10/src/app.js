const css = require('./css/style.scss');
const normalize = require('./css/normalize.scss');
const weather_icons = require('./css/weather-icons/css/weather-icons.min.css');

import { getCityInfo, getObject } from './utils/getApi.js';
import { saveData, getSaveData } from './utils/localStorage.js';
import printCitiesInfo from './components/locationSearch.js';
// import { addFavoriteCity, showFavoriteCities } from './components/showFavoriteCities.js';

// export default favCityArr;
// const favCityArr = [];
// getSaveData();

document.onkeyup = function (e) {
	e = e || window.event;
	if ( e.keyCode === 13 ) {    
        let cityValue = document.getElementById("input_search").value;
        getObject( getCityInfo(cityValue), printCitiesInfo);
        // let city = favCityArr[1];
        // showRepositiries (getCityInfo(city), showFavoriteCities);
	} else  { 
        return false;
    }
}