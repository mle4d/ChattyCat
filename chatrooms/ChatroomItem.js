import Component from '../src/Component.js';
import { messagesRef, auth } from '../src/services/firebase.js';


class ChatroomItem extends Component {
    render() {
        const dom = this.renderDOM();
        const message = this.props.ChatroomItem;
        const chatRooms = this.props.chatRooms;

        if(chatRooms.uid === auth.currentUser.uid) {
            const button = dom.querySelector('button');
            button.addEventListener('click', () => {
                messagesRef.child(message.key)
                    .child(chatRooms.key)
                    .remove();
                
            });
        }
        return dom;
    }

    renderTemplate() {
        const chatTitle = this.props.chat.chat;
        return /*html*/ `
            <li>
            <h2>welcome to${chatTitle}/h2>
            </li>

        `;
    }
}
export default ChatroomItem;

//just about individual message in room