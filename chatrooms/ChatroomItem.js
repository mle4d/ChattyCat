import Component from '../Component.js';
import { auth, chatroomsRef } from '../services/firebase.js';

class ChatroomItem extends Component {
    render() {
        const dom = this.renderDOM();
        const room = this.props.chatroom;

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