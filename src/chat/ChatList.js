import Component from '../Component.js';
import ChatItem from './ChatItem.js';


class ChatList extends Component {
    render() {
        
        const chatList = this.renderDOM();
        this.props.chatrooms.forEach(title => {
            const chatItem = new ChatItem({ title });
            chatList.appendChild(chatItem.render());
            
        });
        return chatList;
    }


    renderTemplate() {
        return /*html*/ `
        <ul id="chatrooms">
        </ul>
            `;
    }
}
export default ChatList;