class DashBoard {
    constructor() {
    }

    renderDashBoard() {
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
        <button id='btn-add' class='btn-add' type='button'>+ Add new pizza</button>`;
    }
}

export default DashBoard;