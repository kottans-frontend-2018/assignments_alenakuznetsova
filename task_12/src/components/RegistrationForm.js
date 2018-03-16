class RegistrationForm {
    constructor() {
    }

    renderRegistration() {
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
                <button id='btn-login' class='btn-registration' type='button'>registration</button>
                <p class='message'>Already registered?<a href='#login'>&nbsp;Login</a></p>
            </form>`;

            var el = document.getElementById('btn-login');

        el.onclick = () => {
            const shop = document.querySelector('#select-shop').value;
            const user = document.querySelector('#user').value;
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            const repeat_password = document.querySelector('#repeat_password').value;
            const store_password = document.querySelector('#store_password').value;

            console.log(shop, user, email, password );
            fetch('https://pizza-tele.ga/api/v1/user/create', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    { username: { user }, 
                      password : { password },
                      password_repeat : { repeat_password },
                      email : { email,
                      store_id : 8,
                      store_password : { store_password }
                     }
                })
                    }).then(res=>res.json())
                    .then(res => console.log(res));
            }
    }
}

export default RegistrationForm;