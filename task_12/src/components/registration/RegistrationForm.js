import { Component } from '../framework';

class RegistrationForm extends Component {
    constructor() {
        super();

        this.host = document.createElement('div');
        this.host.classList.add('form-registration-container');
    }

    render() {
        return `
        <form class="registration-form"><span class="registration-form__title">registration</span>
            <input type="text" placeholder="Name">
            <input type="text" placeholder="login">
            <input type="text" placeholder="password">
            <button class="btn-registration">registration</button>
            <p class="message">Already registered?<a href="#">&nbsp;Login</a></p>
        </form>
        `;
    }
}

export default RegistrationForm;