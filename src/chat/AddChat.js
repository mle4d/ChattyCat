import component from '../Component.js';
import { chatroomsRef } from '../services/firebase.js';

class AddChat extends component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event =>{
            event.preventDefault();

            const formData = new FormData(form);

            const newChat = {
                chat: formData.get ('chat'),
                completed: false
            };
            onAdd(newChat);
            const roomRef = chatroomsRef.push();
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