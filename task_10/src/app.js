import { getCityInfo, showRepositiries } from './utils/getApi.js';
import printWeatherIcon from './utils/printWeatherIcon.js';
import returnFullNameDay from './utils/returnFullNameDay.js';
import { saveData, getSaveData } from './utils/localStorage.js';
import showForecstOnSomeDays from './components/showForecstOnSomeDays.js';

export default printCitiesInfo;
// export default favCityArr;

const css = require('./css/style.scss');
const normalize = require('./css/normalize.scss');
const weather_icons = require('./css/weather-icons/css/weather-icons.min.css');


// const favCityArr = [];
getSaveData();

document.onkeyup = function (e) {
	e = e || window.event;
	if ( e.keyCode === 13 ) {
        let curCity = document.getElementById("input_search").value;
        showRepositiries( getCityInfo(curCity), printCitiesInfo);
        showRepositiries( getCityInfo(curCity), showForecstOnSomeDays);

        let city = favCityArr[1];
        // showRepositiries (getCityInfo(city), showFavoriteCities);
	} else  { 
        return false;
    }
}

function addFavoriteCity() {
    let star = document.getElementById('favorite-star');
    let city = document.getElementById("input_search").value;

    if (star.textContent == 'star_border') {
        star.textContent = 'star';
        favCityArr.push(city);
        saveData();
    } else {
        star.textContent = 'star_border';
        favCityArr.pop();
        saveData();
    }
    console.log(favCityArr);    
}

 function showFavoriteCities (obj) {
        let curCity = obj.query.results.channel.location.city;
        let curDegree = obj.query.results.channel.item.condition.temp;
        let descrip = obj.query.results.channel.item.condition.text;    
   
        document.getElementById('favorite-cities-info').innerHTML  = 
        '<div class="city-block">' +
        '<img src="images/pic-city' + 1 +'.jpg" alt="favorite-city" class="fav-city">' +                    
        '<div class="div__fav-city-info">' +
        '<table class="fav-city-info">' +
        '<tbody><tr><td><span class="fav-city-name">' + curCity + '</span></td>' +
        '</tr><tr><td><span class="fav-city-des">' + descrip + '</span></td></tr><tr>' +
        '<td><span class="fav-city-degree">' + curDegree + '<span class="degree-size">C &deg;</span></td>' +
        '</tr></tbody></table></div></div>'; 
}

function printCitiesInfo (obj) {
    let curCity = obj.query.results.channel.location.city +', '+ obj.query.results.channel.location.country;
    let curTime = obj.query.results.channel.lastBuildDate.substring(16,25);
    let curDate = obj.query.results.channel.item.forecast[0].date;
    let curDay = returnFullNameDay(obj.query.results.channel.item.forecast[0].day);
    let curIcon = printWeatherIcon(obj.query.results.channel.item.condition.code);
    let curDegree = obj.query.results.channel.item.condition.temp;  

    document.getElementById('current-city-info').innerHTML = 
        '<a href="#" class="add-favorite-city" onclick=addFavoriteCity()><i id="favorite-star" class="material-icons">star_border</i></a>' +
        '<p class="main-city" id="curent-city">' + curCity + '</p>' +                    
        '<p class="time" id="curent-time">'  + curTime + '</p>' +             
        '<p class="date" id="curent-date">' + curDate +'</p>' +
        '<p class="main-day" id="curent-day">' + curDay + '</p>' +
        '<span class="main-icon"><i id="main-icon" class="wi ' + curIcon + '"></i></span>' +
        '<p class="main-day-degree" id="current-degree">' + curDegree + ' <span class="degree-size">C&deg;</span>' + '</p>';                         
    showForecstOnSomeDays(obj, 3);
    showForecstOnSomeDays(obj, 10);
}