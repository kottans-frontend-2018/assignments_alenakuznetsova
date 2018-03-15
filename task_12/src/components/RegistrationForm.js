class RegistrationForm {
    constructor() {
    }

    renderRegistration() {
        document.getElementById('main-container').innerHTML = 
            `<form class="registration-form">
                <span class="registration-form__title">registration</span>
                <select id="select-shop">
                    <option value=" ">Select pizza shop</option>;
                </select>
                <input type="text" placeholder="Name">
                <input type="email" placeholder="email">
                <input type="text" placeholder="login">
                <input type="password" placeholder="password">
                <input type="password" placeholder="repeat password">
                <button class="btn-registration">registration</button>
                <p class="message">Already registered?<a href="#login">&nbsp;Login</a></p>
            </form>`;
    }
}

export default RegistrationForm;