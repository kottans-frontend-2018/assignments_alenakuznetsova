import returnFullNameDay from '../utils/returnFullNameDay.js';
import printWeatherIcon from '../utils/printWeatherIcon.js';
import showForecstOnSomeDays from '../components/showForecstOnSomeDays.js';

class PrintCitiesInfo {
    getWork(a) {
        console.log('class works ' + a);
    }

    getData(obj) {
        let curCity = obj.query.results.channel.location.city +', '+ obj.query.results.channel.location.country;
        let curTime = obj.query.results.channel.lastBuildDate.substring(16,25);
        let curDate = obj.query.results.channel.item.forecast[0].date;
        let curDay = returnFullNameDay(obj.query.results.channel.item.forecast[0].day);
        let curIcon = printWeatherIcon(obj.query.results.channel.item.condition.code);
        let curDegree = obj.query.results.channel.item.condition.temp;
    }

    render() {
        document.getElementById('current-city-info').innerHTML = 
        '<a href="#" class="add-favorite-city" onclick=addFavoriteCity()><i id="favorite-star" class="material-icons">star_border</i></a>' +
        '<p class="main-city" id="curent-city">' + curCity + '</p>' +                    
        '<p class="time" id="curent-time">'  + curTime + '</p>' +             
        '<p class="date" id="curent-date">' + curDate +'</p>' +
        '<p class="main-day" id="curent-day">' + curDay + '</p>' +
        '<span class="main-icon"><i id="main-icon" class="wi ' + curIcon + '"></i></span>' +
        '<p class="main-day-degree" id="current-degree">' + curDegree + ' <span class="degree-size">C&deg;</span>' + '</p>';                         
    
    }
}



// function printCitiesInfo (obj) {
//     let curCity = obj.query.results.channel.location.city +', '+ obj.query.results.channel.location.country;
//     let curTime = obj.query.results.channel.lastBuildDate.substring(16,25);
//     let curDate = obj.query.results.channel.item.forecast[0].date;
//     let curDay = returnFullNameDay(obj.query.results.channel.item.forecast[0].day);
//     let curIcon = printWeatherIcon(obj.query.results.channel.item.condition.code);
//     let curDegree = obj.query.results.channel.item.condition.temp;  

//     document.getElementById('current-city-info').innerHTML = 
//         '<a href="#" class="add-favorite-city" onclick=addFavoriteCity()><i id="favorite-star" class="material-icons">star_border</i></a>' +
//         '<p class="main-city" id="curent-city">' + curCity + '</p>' +                    
//         '<p class="time" id="curent-time">'  + curTime + '</p>' +             
//         '<p class="date" id="curent-date">' + curDate +'</p>' +
//         '<p class="main-day" id="curent-day">' + curDay + '</p>' +
//         '<span class="main-icon"><i id="main-icon" class="wi ' + curIcon + '"></i></span>' +
//         '<p class="main-day-degree" id="current-degree">' + curDegree + ' <span class="degree-size">C&deg;</span>' + '</p>';                         
//     showForecstOnSomeDays(obj, 3);
//     showForecstOnSomeDays(obj, 10);
// }

export default PrintCitiesInfo;