import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CryptoCards.stories';
import rgbToHex from '../../utils/rgbToHex';
import color from '../../styles/colors';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

const { Ethereum, Binance, Polygon, Avalanche, Fantom, Arbitrum } =
    composeStories(stories);

const testClickEvent = jest.fn();
const cryptoCardId = 'test-crypto-card';
const buttonId = 'test-button';
const chainNameId = 'test-chain-name';

test('Renders - Ethereum Card', () => {
    render(<Ethereum onClick={testClickEvent} bgColor={color.black} />);
    const cryptoCardElement = screen.getByTestId(cryptoCardId);
    expect(cryptoCardElement).not.toBeNull();
    const styles = cryptoCardElement && getComputedStyle(cryptoCardElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
    const buttonElement = screen.getByTestId(buttonId);
    fireEvent.click(buttonElement);
    expect(testClickEvent).toHaveBeenCalled();

    expect(screen.getByTestId(chainNameId).textContent).toBe('Ethereum');
    expect(screen.getByTestId('test-icon').textContent).toBe('cog icon');
});

test('Renders - Binance Card', () => {
    render(<Binance onClick={testClickEvent} bgColor={color.black} />);
    const cryptoCardElement = screen.getByTestId(cryptoCardId);
    expect(cryptoCardElement).not.toBeNull();
    const styles = cryptoCardElement && getComputedStyle(cryptoCardElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
    const buttonElement = screen.getByTestId(buttonId);
    fireEvent.click(buttonElement);
    expect(testClickEvent).toHaveBeenCalled();
    expect(screen.getByTestId(chainNameId).textContent).toBe('Binance');
    expect(screen.getByTestId('test-icon').textContent).toBe('cog icon');
});

test('Renders - Polygon Card', () => {
    render(<Polygon onClick={testClickEvent} bgColor={color.black} />);
    const cryptoCardElement = screen.getByTestId(cryptoCardId);
    expect(cryptoCardElement).not.toBeNull();
    const styles = cryptoCardElement && getComputedStyle(cryptoCardElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
    const buttonElement = screen.getByTestId(buttonId);
    fireEvent.click(buttonElement);
    expect(testClickEvent).toHaveBeenCalled();
    expect(screen.getByTestId(chainNameId).textContent).toBe('Polygon');
    expect(screen.getByTestId('test-icon').textContent).toBe('cog icon');
});

test('Renders - Avalanche Card', () => {
    render(<Avalanche onClick={testClickEvent} bgColor={color.black} />);
    const cryptoCardElement = screen.getByTestId(cryptoCardId);
    expect(cryptoCardElement).not.toBeNull();
    const styles = cryptoCardElement && getComputedStyle(cryptoCardElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
    const buttonElement = screen.getByTestId(buttonId);
    fireEvent.click(buttonElement);
    expect(testClickEvent).toHaveBeenCalled();
    expect(screen.getByTestId(chainNameId).textContent).toBe('Avalanche');
    expect(screen.getByTestId('test-icon').textContent).toBe('cog icon');
});

test('Renders - Fantom Card', () => {
    render(<Fantom onClick={testClickEvent} bgColor={color.black} />);
    const cryptoCardElement = screen.getByTestId(cryptoCardId);
    expect(cryptoCardElement).not.toBeNull();
    const styles = cryptoCardElement && getComputedStyle(cryptoCardElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
    const buttonElement = screen.getByTestId(buttonId);
    fireEvent.click(buttonElement);
    expect(testClickEvent).toHaveBeenCalled();
    expect(screen.getByTestId(chainNameId).textContent).toBe('Fantom');
    expect(screen.getByTestId('test-icon').textContent).toBe('cog icon');
});

test('Renders - Arbitrum Card', () => {
    render(<Arbitrum onClick={testClickEvent} bgColor={color.black} />);
    const cryptoCardElement = screen.getByTestId(cryptoCardId);
    expect(cryptoCardElement).not.toBeNull();
    const styles = cryptoCardElement && getComputedStyle(cryptoCardElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
    const buttonElement = screen.getByTestId(buttonId);
    fireEvent.click(buttonElement);
    expect(testClickEvent).toHaveBeenCalled();
    expect(screen.getByTestId(chainNameId).textContent).toBe('Arbitrum');
    expect(screen.getByTestId('test-icon').textContent).toBe('cog icon');
});
