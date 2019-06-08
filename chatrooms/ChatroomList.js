import Component from '../Component.js';
import ChatroomItem from './ChatroomItem.js';



class ChatroomList extends Component {
    render() {
        const chatList = this.renderDOM();
        this.props.chatrooms.forEach(chat => {
            const chatItem = new ChatroomItem({ chat });
            chatList.appendChild(chatItem.render());
            
        });
        return chatList;
    }


    renderTemplate() {
        return /*html*/ `
        <ul id="chatroom">${chatTitle}
        </ul>
            `;
    }
}
export default ChatroomList;

//list of all the messages in the room