import { composeStories } from '@storybook/testing-react';
import * as stories from './CryptoLogos.stories';
import { color, rgbToHex } from '@web3uikit/styles';
import { test, expect, describe } from 'vitest';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

const { Ethereum, Binance, Polygon, Avalanche, Fantom, Arbitrum } =
    composeStories(stories);

const cryptoLogoId = 'test-crypto-logo';

test('Renders - Ethereum Logo', () => {
    render(<Ethereum bgColor={color.blue70} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.blue70);
});

test('Renders - Binance Logo', () => {
    render(<Binance bgColor={color.blue70} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.blue70);
});

test('Renders - Polygon Logo', () => {
    render(<Polygon bgColor={color.blue70} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.blue70);
});

test('Renders - Avalanche Logo', () => {
    render(<Avalanche bgColor={color.blue70} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.blue70);
});

test('Renders - Fantom Logo', () => {
    render(<Fantom bgColor={color.blue70} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.blue70);
});

test('Renders - Arbitrum Logo', () => {
    render(<Arbitrum bgColor={color.blue70} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.blue70);
});
