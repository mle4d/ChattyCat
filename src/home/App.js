import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatList from '../../chat/ChatList.js';
import { chatroomsRef } from '../services/firebase.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        const chatList = new ChatList({ chatrooms: [] });
        main.appendChild(chatList.render());
        dom.insertBefore(headerDOM, main);

        chatroomsRef
            .on('value', snapshot => {
                const value = snapshot.val();
                console.log(value);
                const chatrooms = value ? Object.values(value) : [];
                chatList.update({ chatrooms });
            });


        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main>
            </main>
        </div>
        `;
    }
}
export default App;
