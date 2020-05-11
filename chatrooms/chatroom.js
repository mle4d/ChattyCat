import '../src/utils/check-auth.js';
import ChatroomApp from './ChatroomApp.js';
import { auth } from '../src/services/firebase.js';

const root = document.getElementById('app');

auth.onAuthStateChanged(() =>{
    const app = new ChatroomApp();
    root.appendChild(app.render());
});