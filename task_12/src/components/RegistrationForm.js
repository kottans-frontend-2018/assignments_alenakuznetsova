class RegistrationForm {
    constructor() {
    }

    renderRegistration() {
        document.getElementById('main-container').innerHTML = 
            `<form class="registration-form">
                <span class="registration-form__title">registration</span>
                <input type="text" placeholder="Name">
                <input type="text" placeholder="login">
                <input type="text" placeholder="password">
                <button class="btn-registration">registration</button>
                <p class="message">Already registered?<a href="#login">&nbsp;Login</a></p>
            </form>`;
    }
}

export default RegistrationForm;