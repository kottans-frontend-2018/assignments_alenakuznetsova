import css from './app.scss';

window.addEventListener('hashchange', () => {  
  hashChanged();  
})

function hashChanged() {
    let url = window.location.hash.slice(1);
    if (window.location.hash.length > 0  && url =='registration'){
        renderRegistration();
    } else {        
        renderLogin();
    }
}

function renderLogin() {
    document.getElementById('main-container').innerHTML = 
        `<form class="registration-form">
            <span class="registration-form__title">login</span>
            <input type="text" placeholder="login">
            <input type="text" placeholder="password">
            <button class="btn-registration">login</button>
            <p class="message">You don't registrate?<a href="#registration">&nbsp;Registration</a></p>
        </form>`
}

function renderRegistration() {
    document.getElementById('main-container').innerHTML = 
        `<form class="registration-form">
            <span class="registration-form__title">registration</span>
            <input type="text" placeholder="Name">
            <input type="text" placeholder="login">
            <input type="text" placeholder="password">
            <button class="btn-registration">registration</button>
            <p class="message">Already registered?<a href="#login">&nbsp;Login</a></p>
        </form>`
}

function renderHome() {
    document.getElementById('main-container').innerHTML = 
        `<div class="pizza-container">
            <div class="pizza-img">
                <img class="img" src="images/pizza-PomoLivo.png">
            </div>
            <div class="pizza-order-info">
                <div class="div1">
                    <span>xx</span><span>xx</span>
                </div>
                <div class="div2">
                    <span>xx</span><span>xx</span>
                </div>
            </div>
        </div>`
}