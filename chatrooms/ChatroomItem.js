import Component from '../Component.js';
import { messagesRef } from '../src/services/firebase.js';


class ChatroomItem extends Component {
    render() {
        const dom = this.renderDOM();
        const message = this.props.ChatroomItem;

        const button = dom.querySelector('button');
        if(button) {
            button.addEventListener('click', () => {
                messagesRef.child(message.key)();
                
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