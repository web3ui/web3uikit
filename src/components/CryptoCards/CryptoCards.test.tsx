import ReactDOM from 'react-dom';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CryptoCards.stories';
import rgbToHex from '../../utils/rgbToHex';
import color from '../../styles/colors';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

const { Ethereum, Binance, Polygon, Avalanche, Fantom, Arbitrum } =
    composeStories(stories);

let container: HTMLDivElement;

describe('Ethereum', () => {
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';
    const chainNameId = 'test-chain-name';
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Ethereum onClick={testClickEvent} bgColor={color.black} />,
            container,
        );
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('triggers function on button click', async () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('checks the chain name', () => {
        const element = container.querySelector(
            `[data-testid="${chainNameId}"]`,
        );
        expect(element?.textContent).toEqual('Ethereum');
    });

    test('verifies the settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});

describe('Binance', () => {
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';
    const chainNameId = 'test-chain-name';
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Binance onClick={testClickEvent} bgColor={color.black} />,
            container,
        );
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('triggers function on button click', async () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('checks the chain name', () => {
        const element = container.querySelector(
            `[data-testid="${chainNameId}"]`,
        );
        expect(element?.textContent).toEqual('Binance');
    });

    test('verifies the settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});

describe('Polygon', () => {
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';
    const chainNameId = 'test-chain-name';
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Polygon onClick={testClickEvent} bgColor={color.black} />,
            container,
        );
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('triggers function on button click', async () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('checks the chain name', () => {
        const element = container.querySelector(
            `[data-testid="${chainNameId}"]`,
        );
        expect(element?.textContent).toEqual('Polygon');
    });

    test('verifies the settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});

describe('Avalanche', () => {
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';
    const chainNameId = 'test-chain-name';
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Avalanche onClick={testClickEvent} bgColor={color.black} />,
            container,
        );
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('triggers function on button click', async () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('checks the chain name', () => {
        const element = container.querySelector(
            `[data-testid="${chainNameId}"]`,
        );
        expect(element?.textContent).toEqual('Avalanche');
    });

    test('verifies the settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});

describe('Fantom', () => {
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';
    const chainNameId = 'test-chain-name';
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Fantom onClick={testClickEvent} bgColor={color.black} />,
            container,
        );
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('triggers function on button click', async () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('checks the chain name', () => {
        const element = container.querySelector(
            `[data-testid="${chainNameId}"]`,
        );
        expect(element?.textContent).toEqual('Fantom');
    });

    test('verifies the settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});

describe('Arbitrum', () => {
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';
    const chainNameId = 'test-chain-name';
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Arbitrum onClick={testClickEvent} bgColor={color.black} />,
            container,
        );
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    test('renders the component', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        expect(element).not.toBeNull();
    });

    test('triggers function on button click', async () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('checks the background color', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && rgbToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('checks the chain name', () => {
        const element = container.querySelector(
            `[data-testid="${chainNameId}"]`,
        );
        expect(element?.textContent).toEqual('Arbitrum');
    });

    test('verifies the settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});
