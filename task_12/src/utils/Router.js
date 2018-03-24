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
                // this.rout = 'registration';

            let json_data = new DataApi();
                json_data.getObject();
        } else if (window.location.hash.length > 0 && sessionStorage.getItem('Login') && url =='home') {
            let home = new DashBoard();
                home.renderDashBoard();
                // this.rout = 'home';
        } else {
            let login = new LoginForm();   
                login.renderLogin();
                // this.rout = 'login';
        }
    }   
}

export default Router;
