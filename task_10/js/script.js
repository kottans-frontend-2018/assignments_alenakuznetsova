var ClientSecret = '578b6c8776485de72091d97bbfb0c84c043b272d';
var ClientID = 'dj0yJmk9S1hYMHV4dWQ4YUxGJmQ9WVdrOWJXOWlZazlvTnpnbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0wNg--';

function getCity() {
    let city = "Kiev";
    let deg = "celsius";

    let url = "https://query.yahooapis.com/v1/public/yql?q=",
    query = "select * from weather.forecast where woeid in ",
    getCityWoeid = '(select woeid from geo.places(1) where text="'+ city +'")',
    setDegree = (deg === "celsius") ? ' and u="c"' : (deg === "fahrenheit") ? ' and u="f"' : ' and u="c"', 
    format = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
return url + query + getCityWoeid + setDegree + format;
}


function showRepositiries () { 
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", getCity(), true);                
    
    xhr.onreadystatechange = function(e) {
        var data_json = this.responseText;
        var obj = JSON.parse(data_json);                    
        if (this.readyState == 4 && this.status == 200) {       
            document.getElementById('today').innerHTML = obj[0].id;
        } else { 
            console.log(xhr.responseText);
        }      
    } 
    xhr.send();                         
}

showRepositiries();