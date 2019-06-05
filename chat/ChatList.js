import Component from '../src/Component.js';
import ChatItem from './ChatItem.js';

const chatRoomTitles = ['cats', 'cool cats', 'crazy cats']


class ChatList extends Component {
    render() {
        
        const chatList = this.renderDOM();
        chatRoomTitles.forEach(title => {
            const chatItem = new ChatItem({ title });
            chatList.appendChild(chatItem.render());
            
        })
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