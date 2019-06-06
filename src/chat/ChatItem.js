import Component from '../Component.js';
import { auth, chatroomsRef } from '../services/firebase.js';

class ChatItem extends Component {
    render() {
        const dom = this.renderDOM();
        const room = this.props.chat;
        
        const button = dom.querySelector('button');
        if(button) {
            button.addEventListener('click', () => {
                chatroomsRef.child(room.key).remove();
                
            });
        }
        return dom;
    }

    renderTemplate() {
        const chatTitle = this.props.chat.chat;
        const isOwner = auth.currentUser.uid === this.props.chat.owner;
        const button = isOwner ? '<button>delete</button>' : '';
        return /*html*/ `
            <li>
            <a href="#">${chatTitle}</a>
            ${button}
            </li>

        `;
    }
}
export default ChatItem;
