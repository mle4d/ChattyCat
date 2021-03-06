const config = {
    apiKey: 'AIzaSyAVv2zqTQWbzOYalWTWqsmVCcu2xYwOloE',
    authDomain: 'chattycat-c420b.firebaseapp.com',
    databaseURL: 'https://chattycat-c420b.firebaseio.com',
    projectId: 'chattycat-c420b',
    storageBucket: 'chattycat-c420b.appspot.com',
    messagingSenderId: '13347680511',
    appId: '1:13347680511:web:2027493e1d1548bd'
};

export const app = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const chatroomsRef = db.ref('chatrooms');
export const messagesRef = db.ref('messages');
export const usersRef = db.ref('users');

window.db = db;