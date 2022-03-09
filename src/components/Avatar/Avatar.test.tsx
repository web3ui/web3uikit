import ReactDOM from 'react-dom';
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Avatar.stories';
import { roundedEdgeValue } from './Avatar.styles';

const {
    AvatarImageDefault,
    AvatarImageCustom,
    AvatarLetters,
    RoundedAvatarImageCustom,
    RoundedAvatarImageDefault,
    RoundedAvatarLetters,
    CustomBackgroundAndBorderRadius,
    CustomSizeAndFontSize,
} = composeStories(stories);

let container: HTMLDivElement;
const testTextId = 'test-text';
export const testAvatarId = 'test-avatar';

describe('Avatar - Letters', () => {
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

    it('is not rounded', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.borderRadius).toBe('0px');
    });

    it('renders the text', () => {
        const element = container.querySelector(
            `[data-testid="${testTextId}"]`,
        );
        expect(element?.textContent).toEqual('DM');
    });
});

describe('Avatar - Default Guy', () => {
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

    it('is not rounded', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.borderRadius).toBe('0px');
    });

    it('uses the default image', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        expect(element?.firstChild?.nodeName).toEqual('svg');
    });
});

describe('Avatar - Custom Image', () => {
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

    it('is not rounded', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.borderRadius).toBe('0px');
    });

    it('renders the custom image', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.backgroundImage).toBe(
            'url(https://nftcoders.com/avatar/avatar-cool.svg)',
        );
    });
});

describe('Avatar - Letters Rounded', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<RoundedAvatarLetters />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('is rounded', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.borderRadius).toBe(roundedEdgeValue);
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

describe('Avatar - Default Guy Rounded ', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<RoundedAvatarImageDefault />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('is rounded', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.borderRadius).toBe(roundedEdgeValue);
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

describe('Avatar - Custom Image Rounded', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<RoundedAvatarImageCustom />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('is rounded', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.borderRadius).toBe(roundedEdgeValue);
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the custom image', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.backgroundImage).toBe(
            'url(https://academy.moralis.io/wp-content/uploads/2021/12/Illustration4_home.svg)',
        );
    });
});

describe('Avatar - CustomBackgroundAndBorderRadius', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<CustomBackgroundAndBorderRadius />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('has custom border radius', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.borderRadius).toBe(
            `${CustomBackgroundAndBorderRadius?.args?.borderRadius}px`,
        );
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        expect(element).not.toBeNull();
    });
});

describe('Avatar - CustomSizeAndFontSize', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<CustomSizeAndFontSize />, container);
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

    it('has custom font size', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.fontSize).toBe(
            `${CustomSizeAndFontSize?.args?.fontSize}px`,
        );
    });

    it('has custom size', () => {
        const element = container.querySelector(
            `[data-testid="${testAvatarId}"]`,
        );
        const styles = element && getComputedStyle(element);
        expect(styles?.width).toBe(`${CustomSizeAndFontSize?.args?.size}px`);
    });
});
