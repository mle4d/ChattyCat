import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatList from '../chat/ChatList.js';
import { chatroomsRef } from '../services/firebase.js';
import AddChat from '../chat/AddChat.js';
import ChatroomList from '../chatrooms/ChatroomList.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');

        const addChat = new AddChat();
        main.appendChild(addChat.render());

        const chatList = new ChatList({ chatrooms: [] });
        main.appendChild(chatList.render());
        dom.insertBefore(headerDOM, main);

        chatroomsRef
            .on('value', snapshot => {
                const value = snapshot.val();
                const chatrooms = value ? Object.values(value) : [];
                chatList.update({ chatrooms });
            });

        const chatroomList = new ChatroomList({ chatroom: [] });
        main.appendChild(chatroomList.render());

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
