function getCityInfo() {
    let city = document.getElementById("input_search").value;
    let deg = "celsius";

    let url = "https://query.yahooapis.com/v1/public/yql?q=",
    query = "select * from weather.forecast where woeid in ",
    getCityWoeid = '(select woeid from geo.places(1) where text="'+ city +'")',
    setDegree = (deg === "celsius") ? ' and u="c"' : (deg === "fahrenheit") ? ' and u="f"' : ' and u="c"', 
    format = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
return url + query + getCityWoeid + setDegree + format;
}

function printCityInfo (obj) {
    let curCity = obj.query.results.channel.location.city +', '+ obj.query.results.channel.location.country;
    let curTime = obj.query.results.channel.lastBuildDate.substring(16,25);
    let curDate = obj.query.results.channel.item.forecast[0].date;
    let curDay = returnFullNameDay(obj.query.results.channel.item.forecast[0].day);
    let curIcon = printWeatherIcon(obj.query.results.channel.item.condition.code);
    let curDegree = obj.query.results.channel.item.condition.temp;

    document.getElementById('current-city-info').innerHTML = 
        '<p class="add-favorite-city"><i class="material-icons">star_border</i></p>' +
        '<p class="main-city" id="curent-city">' + curCity + '</p>' +                    
        '<p class="time" id="curent-time">'  + curTime + '</p>' +             
        '<p class="date" id="curent-date">' + curDate +'</p>' +
        '<p class="main-day" id="curent-day">' + curDay + '</p>' +
        '<span class="main-icon"><i id="main-icon" class="wi ' + curIcon + '"></i></span>' +                       
       
    
    document.getElementById('day-2').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[1].day);
    document.getElementById('high-deg-day2').innerHTML = obj.query.results.channel.item.forecast[1].high;
    document.getElementById('low-deg-day2').innerHTML = obj.query.results.channel.item.forecast[1].low;
    document.getElementById('icon-day2').classList.add(printWeatherIcon(obj.query.results.channel.item.condition.code));

    document.getElementById('day-3').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[2].day);
    document.getElementById('high-deg-day3').innerHTML = obj.query.results.channel.item.forecast[2].high;
    document.getElementById('low-deg-day3').innerHTML = obj.query.results.channel.item.forecast[2].low;
    document.getElementById('icon-day3').classList.add(printWeatherIcon(obj.query.results.channel.item.condition.code));

    document.getElementById('day-4').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[3].day);
    document.getElementById('high-deg-day4').innerHTML = obj.query.results.channel.item.forecast[3].high;
    document.getElementById('low-deg-day4').innerHTML = obj.query.results.channel.item.forecast[3].low;
    document.getElementById('icon-day4').classList.add(printWeatherIcon(obj.query.results.channel.item.condition.code));

    document.getElementById('day-5').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[4].day);
    document.getElementById('high-deg-day5').innerHTML = obj.query.results.channel.item.forecast[4].high;
    document.getElementById('low-deg-day5').innerHTML = obj.query.results.channel.item.forecast[4].low;
    document.getElementById('icon-day5').classList.add(printWeatherIcon(obj.query.results.channel.item.condition.code));

    document.getElementById('day-6').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[5].day);
    document.getElementById('high-deg-day6').innerHTML = obj.query.results.channel.item.forecast[5].high;
    document.getElementById('low-deg-day6').innerHTML = obj.query.results.channel.item.forecast[5].low;
    document.getElementById('icon-day6').classList.add(printWeatherIcon(obj.query.results.channel.item.condition.code));

    document.getElementById('day-7').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[6].day);
    document.getElementById('high-deg-day7').innerHTML = obj.query.results.channel.item.forecast[6].high;
    document.getElementById('low-deg-day7').innerHTML = obj.query.results.channel.item.forecast[6].low;
    document.getElementById('icon-day7').classList.add(printWeatherIcon(obj.query.results.channel.item.condition.code));

    document.getElementById('day-8').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[7].day);
    document.getElementById('high-deg-day8').innerHTML = obj.query.results.channel.item.forecast[7].high;
    document.getElementById('low-deg-day8').innerHTML = obj.query.results.channel.item.forecast[7].low;
    document.getElementById('icon-day8').classList.add(printWeatherIcon(obj.query.results.channel.item.condition.code));

    document.getElementById('day-9').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[8].day);
    document.getElementById('high-deg-day9').innerHTML = obj.query.results.channel.item.forecast[8].high;
    document.getElementById('low-deg-day9').innerHTML = obj.query.results.channel.item.forecast[8].low;
    document.getElementById('icon-day9').classList.add(printWeatherIcon(obj.query.results.channel.item.condition.code));


}

function returnFullNameDay(shortName) {
    switch(shortName) {
        case 'Mon':  
            return 'Monday';
            break;      
        case 'Tue':
            return 'Tuesday';
            break;
        case 'Wed':
            return 'Wednesday';
            break;
        case 'Thu':
            return 'Thursday';
            break;
        case 'Fri':
            return 'Friday';
            break;
        case 'Sat':
            return 'Saturday';
            break;
        case 'Sun':
            return 'Sunday';
            break;
        default:
            return 'Could not find a week day'
          break;      
    }
}

function printWeatherIcon(weatherCode) {
    var icon = "";
    switch (weatherCode) {
        case "0":
            icon = "wi-tornado";
            break;
        case "1":
            icon = "wi-storm-showers";
            break;
        case "2":
            icon = "wi-tornado";
            break;
        case "3":
            icon = "wi-thunderstorm";
            break;
        case "4":
            icon = "wi-thunderstorm";
            break;
        case "5":
            icon = "wi-snow";
            break;
        case "6":
            icon = "wi-rain-mix";
            break;
        case "7":
            icon = "wi-rain-mix";
            break;
        case "8":
            icon = "wi-sprinkle";
            break;
        case "9":
            icon = "wi-sprinkle";
            break;
        case "10":
            icon = "wi-hail";
            break;
        case "11":
            icon = "wi-showers";
            break;
        case "12":
            icon = "wi-showers";
            break;
        case "13":
            icon = "wi-snow";
            break;
        case "14":
            icon = "wi-storm-showers";
            break;
        case "15":
            icon = "wi-snow";
            break;
        case "16":
            icon = "wi-snow";
            break;
        case "17":
            icon = "wi-hail";
            break;
        case "18":
            icon = "wi-hail";
            break;
        case "19":
            icon = "wi-cloudy-gusts";
            break;
        case "20":
            icon = "wi-fog";
            break;
        case "21":
            icon = "wi-fog";
            break;
        case "22":
            icon = "wi-fog";
            break;
        case "23":
            icon = "wi-cloudy-gusts";
            break;
        case "24":
            icon = "wi-cloudy-windy";
            break;
        case "25":
            icon = "wi-thermometer";
            break;
        case "26":
            icon = "wi-cloudy";
            break;
        case "27":
            icon = "wi-night-cloudy";
            break;
        case "28":
            icon = "wi-day-cloudy";
            break;
        case "29":
            icon = "wi-night-cloudy";
            break;
        case "30":
            icon = "wi-day-cloudy";
            break;
        case "31":
            icon = "wi-night-clear";
            break;
        case "32":
            icon = "wi-day-sunny";
            break;
        case "33":
            icon = "wi-night-clear";
            break;
        case "34":
            icon = "wi-day-sunny-overcast";
            break;
        case "35":
            icon = "wi-hail";
            break;
        case "36":
            icon = "wi-day-sunny";
            break;
        case "37":
            icon = "wi-thunderstorm";
            break;
        case "38":
            icon = "wi-thunderstorm";
            break;
        case "39":
            icon = "wi-thunderstorm";
            break;
        case "40":
            icon = "wi-storm-showers";
            break;
        case "41":
            icon = "wi-snow";
            break;
        case "42":
            icon = "wi-snow";
            break;
        case "43":
            icon = "wi-snow";
            break;
        case "44":
            icon = "wi-cloudy";
            break;
        case "45":
            icon = "wi-lightning";
            break;
        case "46":
            icon = "wi-snow";
            break;
        case "47":
            icon = "wi-thunderstorm";
            break;
        case "3200":
            icon = "wi-cloud";
            break;
        default:
            icon = "wi-cloud";
        break;
    }
    return icon;
}


function showRepositiries () {     
    var xhr = new XMLHttpRequest();
    xhr.open("GET", getCityInfo(), true);                
    
    xhr.onreadystatechange = function(e) {
        var data_json = this.responseText;
        var obj = JSON.parse(data_json);                    
        if (this.readyState == 4 && this.status == 200) {       
            printCityInfo (obj);       
        } else { 
            console.log(xhr.responseText);
        }      
    } 
    xhr.send();                         
}

document.onkeyup = function (e) {
	e = e || window.event;
	if ( e.keyCode === 13 ) {
        getCityInfo();
        showRepositiries();
	} else  { 
        return false;
    }
}