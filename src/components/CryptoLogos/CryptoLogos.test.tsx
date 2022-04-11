import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './CryptoLogos.stories';
import rgbToHex from '../../utils/rgbToHex';
import color from '../../styles/colors';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

const { Ethereum, Binance, Polygon, Avalanche, Fantom, Arbitrum } =
    composeStories(stories);

const cryptoLogoId = 'test-crypto-logo';

test('Renders - Ethereum Logo', () => {
    render(<Ethereum bgColor={color.black} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
});

test('Renders - Binance Logo', () => {
    render(<Binance bgColor={color.black} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
});

test('Renders - Polygon Logo', () => {
    render(<Polygon bgColor={color.black} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
});

test('Renders - Avalanche Logo', () => {
    render(<Avalanche bgColor={color.black} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
});

test('Renders - Fantom Logo', () => {
    render(<Fantom bgColor={color.black} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
});

test('Renders - Arbitrum Logo', () => {
    render(<Arbitrum bgColor={color.black} />);
    const logoElement = screen.getByTestId(cryptoLogoId);
    expect(logoElement).not.toBeNull();
    const styles = logoElement && getComputedStyle(logoElement);
    const bgColorHex = styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(bgColorHex).toBe(color.black);
});
