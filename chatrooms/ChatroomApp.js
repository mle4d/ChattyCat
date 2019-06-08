import Component from '../src/Component.js';
import Header from '../src/shared/Header.js';

class ChatroomApp extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header({ title: 'join the conversation!' });
        const main = dom.querySelector('main');
        dom.insertBefore(header.render(), main);


        return dom;
    }
       
    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
            `;
    }
    

}

export default ChatroomApp;
