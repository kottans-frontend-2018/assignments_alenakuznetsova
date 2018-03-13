class LoginForm {
    constructor() {
    }

    render() {
        document.getElementById('main-container').innerHTML = 
        `<form class="registration-form">
            <span class="registration-form__title">login</span>
            <input type="text" placeholder="login">
            <input type="text" placeholder="password">
            <button class="btn-registration">login</button>
            <p class="message">Already registered?<a href="#registration">&nbsp;Registration</a></p>
        </form>`;
    }
}

export default LoginForm;