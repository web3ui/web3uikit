import ReactDOM, { render } from 'react-dom';
import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CryptoCards.stories';
import RGBToHex from '../../utils/rgbToHex';
import color from '../../styles/colors';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

const { Ethereum, Binance, Polygon, Avalanche, Fantom, Arbitrum } =
    composeStories(stories);

describe('Ethereum', () => {
    let container: HTMLDivElement;
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';

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

    test('on initial render the button is enabled', async () => {
        render(<Ethereum />, container);
        expect(await screen.findByTestId(buttonId)).toBeEnabled();
    });

    test('a function is triggered when the button is clicked', () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('the background color should be black', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && RGBToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('the chain name should be Ethereum', () => {
        expect(screen.getByText('Ethereum')).toBeDefined();
    });

    test('the chain name should be Binance', () => {
        render(<Ethereum chain="Binance" />, container);
        expect(screen.getByText('Binance')).toBeDefined();
    });

    test('verify settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});

describe('Binance', () => {
    let container: HTMLDivElement;
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';

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

    test('on initial render the button is enabled', async () => {
        render(<Binance />, container);
        expect(await screen.findByTestId(buttonId)).toBeEnabled();
    });

    test('a function is triggered when the button is clicked', () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('the background color should be black', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && RGBToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('the chain name should be Binance', () => {
        expect(screen.getByText('Binance')).toBeDefined();
    });

    test('the chain name should be Ethereum', () => {
        render(<Ethereum chain="Ethereum" />, container);
        expect(screen.getByText('Ethereum')).toBeDefined();
    });

    test('verify settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});

describe('Polygon', () => {
    let container: HTMLDivElement;
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';

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

    test('on initial render the button is enabled', async () => {
        render(<Polygon />, container);
        expect(await screen.findByTestId(buttonId)).toBeEnabled();
    });

    test('a function is triggered when the button is clicked', () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('the background color should be black', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && RGBToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('the chain name should be Polygon', () => {
        expect(screen.getByText('Polygon')).toBeDefined();
    });

    test('the chain name should be Ethereum', () => {
        render(<Ethereum chain="Ethereum" />, container);
        expect(screen.getByText('Ethereum')).toBeDefined();
    });

    test('verify settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});

describe('Avalanche', () => {
    let container: HTMLDivElement;
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';

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

    test('on initial render the button is enabled', async () => {
        render(<Avalanche />, container);
        expect(await screen.findByTestId(buttonId)).toBeEnabled();
    });

    test('a function is triggered when the button is clicked', () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('the background color should be black', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && RGBToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('the chain name should be Avalanche', () => {
        expect(screen.getByText('Avalanche')).toBeDefined();
    });

    test('the chain name should be Ethereum', () => {
        render(<Ethereum chain="Ethereum" />, container);
        expect(screen.getByText('Ethereum')).toBeDefined();
    });

    test('verify settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});

describe('Fantom', () => {
    let container: HTMLDivElement;
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';

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

    test('on initial render the button is enabled', async () => {
        render(<Fantom />, container);
        expect(await screen.findByTestId(buttonId)).toBeEnabled();
    });

    test('a function is triggered when the button is clicked', () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('the background color should be black', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && RGBToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('the chain name should be Fantom', () => {
        expect(screen.getByText('Fantom')).toBeDefined();
    });

    test('the chain name should be Ethereum', () => {
        render(<Ethereum chain="Ethereum" />, container);
        expect(screen.getByText('Ethereum')).toBeDefined();
    });

    test('verify settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});

describe('Arbitrum', () => {
    let container: HTMLDivElement;
    const testClickEvent = jest.fn();
    const cryptoCardId = 'test-crypto-card';
    const buttonId = 'test-button';

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

    test('on initial render the button is enabled', async () => {
        render(<Arbitrum />, container);
        expect(await screen.findByTestId(buttonId)).toBeEnabled();
    });

    test('a function is triggered when the button is clicked', () => {
        const element = container.querySelector(`[data-testid="${buttonId}"]`);
        element && fireEvent.click(element);
        expect(testClickEvent).toHaveBeenCalled();
    });

    test('the background color should be black', () => {
        const element = container.querySelector(
            `[data-testid="${cryptoCardId}"]`,
        );
        const styles = element && getComputedStyle(element);
        const bgColorHex =
            styles && RGBToHex(styles.backgroundColor).toUpperCase();
        expect(bgColorHex).toBe(color.black);
    });

    test('the chain name should be Arbitrum', () => {
        expect(screen.getByText('Arbitrum')).toBeDefined();
    });

    test('the chain name should be Ethereum', () => {
        render(<Ethereum chain="Ethereum" />, container);
        expect(screen.getByText('Ethereum')).toBeDefined();
    });

    test('verify settings icon', async () => {
        const element = await screen.findByTestId('test-icon');
        expect(element).toHaveTextContent('cog icon');
    });
});
