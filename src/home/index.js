import '../utils/check-auth.js';
import App from './App.js';
import chat from '../chat/'

const root = document.getElementById('app');
const app = new App();
root.appendChild(app.render());