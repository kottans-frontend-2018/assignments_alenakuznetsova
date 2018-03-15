import css from './app.scss';
import Router from './utils/Router';

const router = new Router();


window.onload = router.hashChanged();