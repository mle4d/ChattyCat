import component from '../src/Component.js';

class ChatItem extends component {
    render() {
        const chatItem = this.renderDOM();

        return chatItem;
    }

    renderTemplate() {
        return /*html*/ `
            <li>
            <a href="#">${this.props.title}</a>
            </li>

        `;
    }
}
export default ChatItem;
