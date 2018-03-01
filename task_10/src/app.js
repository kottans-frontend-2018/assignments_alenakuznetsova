const css = require('./css/style.scss');
const normalize = require('./css/normalize.scss');
const weather_icons = require('./css/weather-icons/css/weather-icons.min.css');

import { getCityInfo, getObject, obj} from './utils/getApi.js';
import { saveData, getSaveData } from './utils/localStorage.js';
// import printCitiesInfo from './components/getCurentDayForecast.js';
import PrintCitiesInfo from './components/getCurentDayForecast.js';


let printCitiesInfo = new PrintCitiesInfo();

document.onkeyup = function (e) {
    e = e || window.event;
    if ( e.keyCode === 13 ) {    
        getObject( printCitiesInfo.getData); 
        // printCitiesInfo.render;       
    } else  { 
        return false;
    }
}