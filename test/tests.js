import { app } from '../src/services/firebase.js';
import './html-equal.js';
import './html-equal.test.js';
import './profile.test.js';

QUnit.done(() => {
    app.delete();
});