import { fireEvent, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CryptoCards.stories';
import { color, rgbToHex } from '@web3uikit/styles';

import '@testing-library/jest-dom/extend-expect';
import { test, expect, describe, vi } from 'vitest';

const { Ethereum, Binance, Polygon, Avalanche, Fantom, Arbitrum } =
    composeStories(stories);

const testClickEvent = vi.fn();
const cryptoCardId = 'test-crypto-card';
const buttonId = 'test-button';
const chainNameId = 'test-crypto-card-name';

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
});
