import Component from '../Component.js';
import Profile from './Profile.js';
import { auth } from '../services/firebase.js';

class Header extends Component {

}


renderTemplate() {
    const title = this.props.title || document.title;

    return /*html*/`
    <header>
        <h1>${title}</h1>
        <!-- pRoFiLe HeReEeE -->
    </header>
    `;
}

export default Header;