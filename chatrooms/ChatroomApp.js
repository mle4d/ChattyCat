import Component from '../src/Component.js';
import Header from '../src/shared/Header.js';
import ChatroomList from '../chatrooms/ChatroomList.js';
import ChatroomInput from './ChatroomInput.js';
import ChatroomDetail from './ChatDetail,js';
import QUERY from '../src/utils/QUERY.js';
import { chatroomsRef, messagesRef } from '../src/services/firebase.js';


class ChatroomApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const query = window.location.search;
        const key = QUERY.parse(query).key;

        if(!key) {
            window.location = './';
        }

        const header = new Header({ title: 'join the conversation!' });
        dom.insertBefore(header.render(), main);

        const chatroomList = new ChatroomList({ messages: [], chatRoom: {} });
        main.appendChild(chatroomList.render());

        const chatroomInput = new ChatroomInput();
        main.appendChild(chatroomInput.render());

        const chatroomDetail = new ChatroomDetail();
        main.appendChild(chatroomDetail.render());
       
        chatroomsRef
            .child(key)
            .on('value', snapshot => {
                const chatRoom = snapshot.val();
                chatroomList.update({ title: chatRoom.name });
                chatroomInput.update({ chatRoom });
                chatroomList.update({ chatRoom });
           
            });

        messagesRef
            .child(key)
            .on('value', snapshot => {
                const value = snapshot.val();
                const messages = value ? Object.values(value) : [];
                chatroomList.update({ messages });
            });
        return dom;

    }
       
    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
            `;
    }
    

}

export default ChatroomApp;
