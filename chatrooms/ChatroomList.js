import Component from '../src/Component.js';
import ChatroomItem from './ChatroomItem.js';
import { usersRef } from '../src/services/firebase.js';



class ChatroomList extends Component {
    render() {
        const dom = this.renderDOM();
        const messages = this.props.messages;

        messages.forEach(message => {
            const chatroomItem = new ChatroomItem({ message, user: {} });
            const chatroomItemDOM = chatroomItem.render();
            dom.appendChild(chatroomItemDOM);

            usersRef
                .child(message.uid)
                .on('value', snapshot => {
                    const value = snapshot.val();
                    chatroomItem.update({ user: value });
                });
        });
            
        return dom;
    }
    


    renderTemplate() {
        return /*html*/ `
        <ul id="chatroom">chat here
        </ul>
            `;
    }
}

export default ChatroomList;

//list of all the messages in the room