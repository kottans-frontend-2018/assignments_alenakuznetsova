class DashBoard {
    renderDashBoard() {
        document.getElementById('log-info').innerHTML = 
        `<a href="#login" class="login" id="log-out">
            <i aria-hidden="true" class="fas fa-user"></i>&nbsp;&nbsp;log out          
        </a>`;

        const url = require('../images/pizza-PomoLivo.png');

        document.getElementById('main-container').innerHTML = 
        `<div class="pizza-container">
            <div class="pizza-img">
                <img class="img" src="${url}">
            </div>
            <div class="pizza-order-info">
                <div class="pizza-order-info__left">
                    <span>xx</span><span>xx</span>
                </div>
                <div class="pizza-order-info__right">
                    <span>xx</span><span>xx</span>
                </div>
            </div>
        </div>
        <div class="pizza-container">
            <div class="pizza-img">
                <img class="img" src="${url}">
            </div>
            <div class="pizza-order-info">
                <div class="pizza-order-info__left">
                    <span>xx</span><span>xx</span>
                </div>
                <div class="pizza-order-info__right">
                    <span>xx</span><span>xx</span>
                </div>
            </div>
        </div>
        <div class="pizza-container">
            <div class="pizza-img">
                <img class="img" src="${url}">
            </div>
            <div class="pizza-order-info">
                <div class="pizza-order-info__left">
                    <span>xx</span><span>xx</span>
                </div>
                <div class="pizza-order-info__right">
                    <span>xx</span><span>xx</span>
                </div>
            </div>
        </div>
        <div class="pizza-container">
            <div class="pizza-img">
                <img class="img" src="${url}">
            </div>
            <div class="pizza-order-info">
                <div class="pizza-order-info__left">
                    <span>xx</span><span>xx</span>
                </div>
                <div class="pizza-order-info__right">
                    <span>xx</span><span>xx</span>
                </div>
            </div>
        </div>
         <div class="pizza-container">
            <div class="pizza-img">
                <img class="img" src="${url}">
            </div>
            <div class="pizza-order-info">
                <div class="pizza-order-info__left">
                    <span>xx</span><span>xx</span>
                </div>
                <div class="pizza-order-info__right">
                    <span>xx</span><span>xx</span>
                </div>
            </div>
        </div>
        <button id='btn-add' class='btn-add' type='button'>+ Add new pizza</button>`;
    }

    logOut() {
        let el = document.getElementById('log-out');
        el.onclick = () => {
            alert('logout');
            localStorage.setItem('token', '');
        }
    }
}

export default DashBoard;