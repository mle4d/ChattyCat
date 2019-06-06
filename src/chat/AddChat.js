import component from '../Component.js';
import { chatroomsRef, auth } from '../services/firebase.js';

class AddChat extends component {

    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event =>{
            event.preventDefault();

            const formData = new FormData(form);
            const roomRef = chatroomsRef.push();

            const newChat = {
                chat: formData.get('chatname'),
                owner: auth.currentUser.uid,
                key: roomRef.key


            };
            
            roomRef.set(newChat);

            form.reset();
        });
        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="add-chat">
                <label>Create New Chat: <input name="chatname"></label>
                <button>Add</button>
            </form>
            `;
    
    }
}
export default AddChat;