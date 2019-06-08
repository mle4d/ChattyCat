import component from '../Component.js';
import { chatroomsRef, auth } from '../services/firebase.js';

class ChatroomInput extends component {

    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event =>{
            event.preventDefault();

            const formData = new FormData(form);
            const roomRef = chatroomsRef.push();

            const newChatMessage = {
                chat: formData.get('chatmessage'),
                owner: auth.currentUser.uid,
                key: roomRef.key


            };
            
            roomRef.set(newChatMessage);

            form.reset();
        });
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="add-message">
                <label>Add new message<input type="text" name="chatmessage"></label>
                <button>Submit</button>
            </form>
            `;
    
    }
}
export default ChatroomInput;