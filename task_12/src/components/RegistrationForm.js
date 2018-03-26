import {AUTH_SERVICE} from '../store/login.service.js';

class RegistrationForm {
    constructor() {
    }

    renderRegistration() {
        document.getElementById('log-info').innerHTML = 
        `<a href="#login" class="login">
            <i aria-hidden="true" class="fas fa-user"></i>&nbsp;&nbsp;login            
        </a>`;
        
        document.getElementById('main-container').innerHTML = 
            `<form class='registration-form'>
                <span class='registration-form__title'>registration</span>
                <select id='select-shop'>
                    <option value=' '>Select pizza shop</option>;
                </select>
                <input id='user' type='text' placeholder='User name'>
                <input id='email' type='email' placeholder='email'>                
                <input id='password' type='password' placeholder='password'>
                <input id='repeat_password' type='password' placeholder='repeat password'>
                <input id='store_password' type='password' placeholder='Store password'>
                <button id='btn-registration' class='btn-registration' type='button'>registration</button>
                <p class='message'>Haven't registered yet?&nbsp;<a href='#login'>Login</a></p>
            </form>`;

            var el = document.getElementById('btn-registration');

        el.onclick = () => {
            const shop = document.querySelector('#select-shop').value;
            const username = document.querySelector('#user').value;
            const password = document.querySelector('#password').value;
            const password_repeat = document.querySelector('#repeat_password').value;
            const email = document.querySelector('#email').value;
            // const store_id = '8';
            const store_password = document.querySelector('#store_password').value;            

            // AUTH_SERVICE.registration({
            //         username: username, 
            //         password : password,
            //         password_repeat : password_repeat,
            //         email : email,
            //         store_id : 8,
            //         store_password : store_password 
            //     });

            fetch('https://pizza-tele.ga/api/v1/user/create', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user, 
                    password : password,
                    password_repeat : repeat_password,
                    email : email,
                    store_id : 8,
                    store_password : store_password 
                })
            }).then(res => res.json())
            .then( (res) => {
                if (res.success == true) {
                    window.location.hash = 'login';
                } else {
                    window.location.hash = 'registration';
                }                
            });
        }
    }
}

export default RegistrationForm;