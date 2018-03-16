class DataApi {
    constructor () {

    }    

    getObject( ) {
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

        function printList(a) {
            for (var i = 0; i<a.length; i++) {
                document.getElementById('select-shop').innerHTML +=
                    '<option value="'+ a[i].name +'">' + a[i].name + '</option>';
            }
        }

        fetch( 'https://pizza-tele.ga/api/v1/store/list' )  
            .then(status)  
            .then(json)  
            .then( (obj) => { 
                printList(obj); 
            });  
    }
}

export default DataApi;