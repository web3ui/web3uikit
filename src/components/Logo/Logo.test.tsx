import ReactDOM from 'react-dom';
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Logo.stories';

const {
    LogoIconWhite,
    LogoDefaultWhite,
    VisaRegular,
    MastercardRegular,
    AmexRegular,
    DinersRegular,
} = composeStories(stories);

let container: HTMLDivElement;

describe('Logo - Icon', () => {
    const testlogoIconId = 'test-logo-icon';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<LogoIconWhite />, container);
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testlogoIconId}"]`,
        );
        expect(element).not.toBeNull();
    });
});

describe('Logo - Default', () => {
    const testlogoIconId = 'test-logo-default';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<LogoDefaultWhite />, container);
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testlogoIconId}"]`,
        );
        expect(element).not.toBeNull();
    });
});

describe('Logo - Visa', () => {
    const testlogoIconId = 'test-logo-visa';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<VisaRegular />, container);
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testlogoIconId}"]`,
        );
        expect(element).not.toBeNull();
    });
});

describe('Logo - Mastercard', () => {
    const testlogoIconId = 'test-logo-mastercard';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<MastercardRegular />, container);
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testlogoIconId}"]`,
        );
        expect(element).not.toBeNull();
    });
});

describe('Logo - American Express', () => {
    const testlogoIconId = 'test-logo-amex';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<AmexRegular />, container);
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testlogoIconId}"]`,
        );
        expect(element).not.toBeNull();
    });
});

describe('Logo - Diners Club', () => {
    const testlogoIconId = 'test-logo-diners';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<DinersRegular />, container);
    });

    it('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${testlogoIconId}"]`,
        );
        expect(element).not.toBeNull();
    });
});
