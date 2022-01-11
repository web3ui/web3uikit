import ReactDOM from 'react-dom';
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Avatar.stories';

const { AvatarImageDefault, AvatarImageCustom, AvatarLetters } =
    composeStories(stories);

let container: HTMLDivElement;

describe('Avatar - Letters', () => {
    const testAvatarId = 'test-avatar';
    const testTextId = 'test-text';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<AvatarLetters />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the text', () => {
        const element = container.querySelector(
            `[data-testid="${testTextId}"]`,
        );
        expect(element?.textContent).toEqual('DM');
    });
});

describe('Avatar - Default Guy', () => {
    const testAvatarId = 'test-avatar';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<AvatarImageDefault />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('uses the default image', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        expect(element?.firstChild?.nodeName).toEqual('svg');
    });
});

describe('Avatar - Custom Image', () => {
    const testAvatarId = 'test-avatar';
    const testImageId = 'test-custom-image';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<AvatarImageCustom />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the custom image', () => {
        const element = container.querySelector(
            `[data-testid="${testImageId}"]`,
        );
        expect(element?.getAttribute('src')).toEqual(
            'https://scalebranding.com/wp-content/uploads/2021/06/penguin.jpg',
        );
    });
});
