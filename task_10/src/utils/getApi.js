export { getCityInfo, showRepositiries };

function getCityInfo(city) {    
    let deg = "celsius";
    let url = "https://query.yahooapis.com/v1/public/yql?q=",
    query = "select * from weather.forecast where woeid in ",
    getCityWoeid = '(select woeid from geo.places(1) where text="'+ city +'")',
    setDegree = (deg === "celsius") ? ' and u="c"' : (deg === "fahrenheit") ? ' and u="f"' : ' and u="c"', 
    format = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
return url + query + getCityWoeid + setDegree + format;
}

function showRepositiries (link, func) {     
    let xhr = new XMLHttpRequest();
    xhr.open("GET", link, true);                
    
    xhr.onreadystatechange = function(e) {                            
        if (this.readyState == 4 && this.status == 200) { 
            let data_json = this.responseText;
            let object = JSON.parse(data_json);
            func (object);      
        } else { 
            console.log(xhr.responseText);
        }      
    } 
    xhr.send();                         
}