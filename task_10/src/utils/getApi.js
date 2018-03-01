function getCityInfo() {  
    let city = "Kiev";
    let url = "https://query.yahooapis.com/v1/public/yql?q=",
    query = "select * from weather.forecast where woeid in ",
    getCityWoeid = '(select woeid from geo.places(1) where text="'+ city +'")',
    setDegree = ' and u="c"', 
    format = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
return url + query + getCityWoeid + setDegree + format;
}

function getObject( callback ) {
    function status(response) {  
        if (response.status >= 200 && response.status < 300) {  
            return Promise.resolve(response);
        } else {  
            return Promise.reject(new Error(response.statusText));  
        }  
    }

    function json(response) {  
        return response.json();
    }    

    fetch( getCityInfo() )  
        .then(status)  
        .then(json)  
        .then(function(obj) { 
            callback(obj); 
        });
        // .catch(function(error) {  
        //     console.log('Request failed', error);  
        // });   
}

export { getCityInfo, getObject, obj, a };