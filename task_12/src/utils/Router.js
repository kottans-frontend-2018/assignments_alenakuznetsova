import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import DataApi from '../utils/DataApi.js';

class Router {    
    constructor () {  
        window.addEventListener('hashchange', () => {  
            this.hashChanged();;  
        }); 
    }

    hashChanged() {  
        let url = window.location.hash.slice(1);
        if (window.location.hash.length > 0  && url =='registration'){
            let reg = new RegistrationForm();
                reg.renderRegistration();
            let json_data = new DataApi();
                json_data.getObject();
        } else {     
            let login = new LoginForm();   
                login.render();
            let json_data = new DataApi();
                json_data.getObject();
        }
    }   
}

export default Router;
