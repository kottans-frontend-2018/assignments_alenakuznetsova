export default showForecstOnSomeDays;
import printWeatherIcon from '../utils/printWeatherIcon.js';
import returnFullNameDay from '../utils/returnFullNameDay.js';
import printCitiesInfo from '../app.js';

function showForecstOnSomeDays(obj, days) {
    let daysStr = " ";
    for (let i = 0; i < days; i++) {            
        let lowDegree = obj.query.results.channel.item.forecast[i].low;
        let highDegree = obj.query.results.channel.item.forecast[i].high;
        let day = returnFullNameDay(obj.query.results.channel.item.forecast[i].day);  
        let icon = printWeatherIcon(obj.query.results.channel.item.forecast[i].code);          

        daysStr  += 
        '<tr>' +
            '<td class="day">' + day + '</td>' +                                       
            '<td class="day-degree">' + highDegree + '<span class="degree-size"> C&deg;</span></td>' +
            '<td class="day-degree">' + lowDegree + '<span class="degree-size"> C&deg;</span></td>' +
            '<td class="day-degree"><i class="wi ' + icon + '"></i></td>' +
        '</tr>';            
    }
    document.getElementById('tb-cities' + days +'-info').innerHTML = daysStr;
}