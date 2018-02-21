export { saveData, getSaveData };
import favCityArr from '../app.js';

let favCityArr = [];

function saveData() {
    let str = JSON.stringify(favCityArr);  
    localStorage.setItem('favCityArr', str);
}

function getSaveData() {
    let str = localStorage.getItem('favCityArr');
    favCityArr= JSON.parse(str);
    if (!favCityArr) {
        favCityArr = [];
    }   
}