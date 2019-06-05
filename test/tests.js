import './html-equal.test.js';
import { app } from '../src/services/firebase.js';
import './profile.test.js';

QUnit.done(() => {
    app.delete();
});