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
    document.getElementById('curent-city').innerHTML = obj.query.results.channel.location.city +', '+ obj.query.results.channel.location.country;
    document.getElementById('curent-day').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[0].day);
    document.getElementById('day-2').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[1].day);
    document.getElementById('day-3').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[2].day);
    document.getElementById('day-4').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[3].day);
    document.getElementById('day-5').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[4].day);
    document.getElementById('day-6').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[5].day);
    document.getElementById('day-7').innerHTML = returnFullNameDay(obj.query.results.channel.item.forecast[6].day);
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