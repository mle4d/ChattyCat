import Component from '../src/Component.js';
import ChatItem from './ChatItem.js';

class chat extends Component {

}


renderTemplate() {
    return /*html*/`
    <fieldset>Chat Rooms
    <label>Chat: <input name="chatroom"></label>
    </fieldset>
    ` 
}

export default chat;