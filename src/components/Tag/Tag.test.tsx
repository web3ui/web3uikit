import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Tag.stories';
import 'jest-styled-components';

const {
    Regular,
    InactiveStatus,
    ActiveStatus,
    Discount,
    Blue,
    Grey,
    Green,
    Pink,
    Purple,
    Red,
    Yellow,
} = composeStories(stories);

export const tagTestId = 'test-tag-id';
export const tagTestTextId = 'test-tag-text';
let container: HTMLDivElement;

describe('Tag - Regular', () => {
    const regularText = 'Tag';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Regular />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${tagTestTextId}"]`,
        );
        expect(element?.textContent).toBe(regularText);
    });

    it('should not render icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${tagTestId}"] > svg`,
        );
        expect(iconSVG).toBeNull();
    });
});

describe('Tag - Inactive Status', () => {
    const inactiveText = 'Inactive Tag';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<InactiveStatus />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${tagTestTextId}"]`,
        );
        expect(element?.textContent).toBe(inactiveText);
    });

    it('should not render icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${tagTestId}"] > svg`,
        );
        expect(iconSVG).toBeNull();
    });
});

describe('Tag - Active Status', () => {
    const activeText = 'Active Tag';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ActiveStatus />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${tagTestTextId}"]`,
        );
        expect(element?.textContent).toBe(activeText);
    });

    it('should render icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${tagTestId}"] > div > svg`,
        );
        expect(iconSVG).not.toBeNull();
    });
});

describe('Tag - Discount', () => {
    const discountText = '-35%';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Discount />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${tagTestTextId}"]`,
        );
        expect(element?.textContent).toBe(discountText);
    });

    it('should render icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${tagTestId}"] > svg`,
        );
        expect(iconSVG).toBeNull();
    });
});

describe('Tag - Blue', () => {
    const text = 'Blue';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Blue />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${tagTestTextId}"]`,
        );
        expect(element?.textContent).toBe(text);
    });

    it('should render icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${tagTestId}"] > svg`,
        );
        expect(iconSVG).toBeNull();
    });
});

describe('Tag - Green', () => {
    const green = 'Green';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Green />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${tagTestTextId}"]`,
        );
        expect(element?.textContent).toBe(green);
    });

    it('should render icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${tagTestId}"] > svg`,
        );
        expect(iconSVG).toBeNull();
    });
});

describe('Tag - Grey', () => {
    const grey = 'Grey';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Grey />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${tagTestTextId}"]`,
        );
        expect(element?.textContent).toBe(grey);
    });

    it('should render icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${tagTestId}"] > svg`,
        );
        expect(iconSVG).toBeNull();
    });
});

describe('Tag - Red', () => {
    const red = 'Red';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Red />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${tagTestTextId}"]`,
        );
        expect(element?.textContent).toBe(red);
    });

    it('should render icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${tagTestId}"] > svg`,
        );
        expect(iconSVG).toBeNull();
    });
});

describe('Tag - Yellow', () => {
    const yellow = 'Yellow';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Yellow />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${tagTestTextId}"]`,
        );
        expect(element?.textContent).toBe(yellow);
    });

    it('should render icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${tagTestId}"] > svg`,
        );
        expect(iconSVG).toBeNull();
    });
});

describe('Tag - Purple', () => {
    const purple = 'Purple';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Purple />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${tagTestTextId}"]`,
        );
        expect(element?.textContent).toBe(purple);
    });

    it('should render icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${tagTestId}"] > svg`,
        );
        expect(iconSVG).toBeNull();
    });
});

describe('Tag - Pink', () => {
    const pink = 'Pink';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Pink />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element = container.querySelector(`[data-testid="${tagTestId}"]`);
        expect(element).not.toBeNull();
    });

    it('renders text correctly', () => {
        const element = container.querySelector(
            `[data-testid="${tagTestTextId}"]`,
        );
        expect(element?.textContent).toBe(pink);
    });

    it('should render icon', () => {
        const iconSVG = container.querySelector(
            `[data-testid="${tagTestId}"] > svg`,
        );
        expect(iconSVG).toBeNull();
    });
});
