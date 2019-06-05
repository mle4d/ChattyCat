import Profile from '../src/shared/Profile.js';

const test = QUnit.test;

QUnit.module('Profile Component');

test('renders with full user props', assert => {
    // arrange
    const user = {
        displayName: 'Narty Melson',
        photoURL: 'https://images.vexels.com/media/users/3/155407/isolated/lists/84d636131360b843e427a4ff7061ae0a-striped-cat-avatar.png'
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div class="profile">
            <img src="https://images.vexels.com/media/users/3/155407/isolated/lists/84d636131360b843e427a4ff7061ae0a-striped-cat-avatar.png">
            <span>Narty Melson</span>
            <button>Sign Out</button>
        </div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});

test('renders with default avatar when no photoURL', assert => {
    // arrange
    const user = {
        displayName: 'Narty Melson',
        photoURL: null
    };
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div class="profile">
            <img src="./assets/catavatar.png">
            <span>Narty Melson</span>
            <button>Sign Out</button>
        </div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});

test('renders empty div when no user', assert => {
    // arrange
    const user = null;
    const profile = new Profile({ user });
    const expected = /*html*/`
        <div></div>
    `;

    // act
    const rendered = profile.renderTemplate();

    // assert
    assert.htmlEqual(rendered, expected);
});