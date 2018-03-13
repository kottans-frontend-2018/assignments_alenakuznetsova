export { addFavoriteCity, showFavoriteCities };
import printWeatherIcon from '../utils/printWeatherIcon.js';
import returnFullNameDay from '../utils/returnFullNameDay.js';


function addFavoriteCity() {
    let star = document.getElementById('favorite-star');
    let city = document.getElementById("input_search").value;

    if (star.textContent == 'star_border') {
        star.textContent = 'star';
        favCityArr.push(city);
        // saveData();
    } else {
        star.textContent = 'star_border';
        favCityArr.pop();
        // saveData();
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