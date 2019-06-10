import component from '../Component.js';
import { messagesRef, auth } from '../services/firebase.js';

class ChatroomInput extends component {

    render() {
        const dom = this.renderDOM();
        const chatRooms = this.props.chatrooms;
        const message = dom.querySelector('message');

        dom.addEventListener('submit', event =>{
            event.preventDefault();

            const formData = new FormData(dom);
            const chatRoomRef = messagesRef.child(chatRooms.key).push();

            const newChatMessage = {
                chat: formData.get('chatmessage'),
                owner: auth.currentUser.uid,
                key: chatRoomRef.key
                //something for date probably goes here


            };
            
            chatRoomRef.set(newChatMessage).then(() => {
                message.value = '';
            });

            dom.reset();
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <form class="add-message">
                <label>Add new message
                <input type="text" name="chatmessage"></label>
                <button>Submit</button>
            </form>
            `;
    
    }
}
export default ChatroomInput;