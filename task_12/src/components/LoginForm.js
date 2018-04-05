import {AUTH_SERVICE} from '../store/login.service.js';

class LoginForm {
    constructor() {
    }

    renderLogin() {
        document.getElementById('log-info').innerHTML = 
        `<a href="#login" class="login">
            <i aria-hidden="true" class="fas fa-user"></i>&nbsp;&nbsp;login            
        </a>`;

        document.getElementById('main-container').innerHTML = 
        `<form class='login-form'>
            <span class='registration-form__title'>login</span>
            <input id='user' type='text' placeholder='login'>
            <input id='password' type='password' placeholder='password'>
            <p class='error-text' id='error-text'></p>
            <button id='btn-login' class='btn-login'  type='button'>login</button>
            <p class='message'>Already registered?&nbsp;<a href='#registration'>Registration</a></p>
        </form>`;

        let el = document.getElementById('btn-login');

        el.onclick = () => {
            const username = document.querySelector('#user').value;
            const password = document.querySelector('#password').value;

            AUTH_SERVICE.login({username, password})
                .then(
                    result => {
                        console.log(AUTH_SERVICE.token);
                        console.log(AUTH_SERVICE.isAuthorized());
                    },
                    data => {
                        console.log(data);
                        if(data.code == 400){
                            document.getElementById('error-text').textContent = data.answer.error;
                        }
                    });
        }
    }


}

export default LoginForm;