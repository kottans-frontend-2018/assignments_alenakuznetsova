import css from './login.scss';

import { Component } from '../framework';

class LoginForm extends Component {
    constructor() {
        super();

        this.host = document.createElement('div');
        this.host.classList.add('form-login-container');
    }

    render() {
        return `
        <form class="registration-form"><span class="registration-form__title">registration</span>
            <input type="text" placeholder="login">
            <input type="text" placeholder="password">
            <button class="btn-registration">login</button>
            <p class="message">Already registered?<a href="#">&nbsp;Login</a></p>
        </form>
        `;
    }
}

export default LoginForm;