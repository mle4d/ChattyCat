import Component from '../Component.js';
import Header from '../shared/Header.js';
import { auth } from '../services/firebase.js';


class AuthApp extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'sigh up here' });
        const main = dom.querySelector('main');
        dom.insertBefore(header.render(), main);

        const ui = new firebaseui.auth.AuthUI(auth);

        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ],
            signInSUccessUrl: './',
            credentialHelper: firebaseui.authCredentialHelper.NONE
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                    <p>Sign in to chat about cats!</p>
                        <!--firebaseui goeseth hereth -->
                </main>
            </div>
            `;
    }
}

export default AuthApp;