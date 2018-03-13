import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

class Router {    
    constructor () {  
        window.addEventListener('hashchange', () => {  
            this.hashChanged();;  
        })      
    }

    hashChanged() {  
        let url = window.location.hash.slice(1);
        if (window.location.hash.length > 0  && url =='registration'){
            let reg = new RegistrationForm();
                reg.renderRegistration();
        } else {     
            let login = new LoginForm();   
                login.render();
        }
    }   
}

export default Router;
