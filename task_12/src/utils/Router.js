import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import DataApi from '../utils/DataApi.js';
import DashBoard from '../components/DashBoard.js';

class Router {    
    constructor () {  
        window.location.hash = 'login';
        window.addEventListener('hashchange', () => {  
            this.hashChanged();  
        }); 
    }

    hashChanged() {  
        let url = window.location.hash.slice(1);
        if (window.location.hash.length > 0  && url =='registration') {
            let reg = new RegistrationForm();
                reg.renderRegistration();

            let json_data = new DataApi();
                json_data.getObject();
        } else if (window.location.hash.length > 0 && localStorage.getItem('Login') == 'true' && url =='home') {
            let home = new DashBoard();
                home.renderDashBoard();
        } else {
            let login = new LoginForm();   
                login.renderLogin();
        }
    }   
}

export default Router;
