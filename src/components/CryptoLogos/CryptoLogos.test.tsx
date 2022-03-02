import ReactDOM from 'react-dom';
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CryptoLogos.stories';
import rgbToHex from '../../utils/rgbToHex';
import color from '../../styles/colors';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

const { Ethereum, Binance, Polygon, Avalanche, Fantom, Arbitrum } =
    composeStories(stories);

let container: HTMLDivElement;

describe('Ethereum', () => {
    const CryptoLogoId = 'test-crypto-logo';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Ethereum bgColor={color.black} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });
});

describe('Binance', () => {
    const CryptoLogoId = 'test-crypto-logo';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Binance bgColor={color.black} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });
});

describe('Polygon', () => {
    const CryptoLogoId = 'test-crypto-logo';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Polygon bgColor={color.black} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });
});

describe('Avalanche', () => {
    const CryptoLogoId = 'test-crypto-logo';
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Avalanche bgColor={color.black} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });
});

describe('Fantom', () => {
    const CryptoLogoId = 'test-crypto-logo';
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Fantom bgColor={color.black} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });
});

describe('Arbitrum', () => {
    const CryptoLogoId = 'test-crypto-logo';
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Arbitrum bgColor={color.black} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${CryptoLogoId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });
});
