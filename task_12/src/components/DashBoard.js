class DashBoard {
    constructor() {
    }

    renderHome() {
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
            </div>`;
    }
}

export default DashBoard;