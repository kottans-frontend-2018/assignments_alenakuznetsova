import css from './app.scss';
import Router from './utils/Router';
import Time from './components/time.js';

sessionStorage.setItem('Login', 'false');
const router = new Router();
const time = new Time();

window.onload = time.render ();
window.onload = router.hashChanged();