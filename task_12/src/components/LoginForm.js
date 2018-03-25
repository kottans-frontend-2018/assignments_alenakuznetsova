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
            <button id='btn-login' class='btn-login'  type='button'>login</button>
            <p class='message'>Already registered?&nbsp;<a href='#registration'>Registration</a></p>
        </form>`;

        let el = document.getElementById('btn-login');

        el.onclick = () => {
            const user = document.querySelector('#user').value;
            const password = document.querySelector('#password').value;
            
            fetch('https://pizza-tele.ga/api/v1/user/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    username : user , 
                    password : password 
                })
            }).then(res => res.json())
            .then( (res) => {
                if (res.success == true) {
                    localStorage.setItem('Login', 'true');
                    window.location.hash = 'home';
                } else {
                    window.location.hash = 'login';
                }                
            });
        }
    }


}

export default LoginForm;