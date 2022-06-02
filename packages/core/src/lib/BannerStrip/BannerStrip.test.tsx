import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './BannerStrip.stories';
import color from '../../styles/colors';
import rgbToHex from '../../utils/rgbToHex';

const { Standard, StandardWithButton, Warning, Error, Success } =
    composeStories(stories);

const testId = 'banner-strip';

test('Renders Standard', () => {
    const testText = 'Hey this is a notification you should check out';
    render(<Standard />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(testText);
    expect(element.lastChild?.nodeName).not.toBe('BUTTON');

    const styles = element && getComputedStyle(element);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe(color.blue);
});

test('Renders Standard with Button', () => {
    const testText = StandardWithButton.args?.text;
    render(<StandardWithButton />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.firstChild?.textContent).toBe(testText);
    expect(element.lastChild?.nodeName).toBe('BUTTON');

    const styles = element && getComputedStyle(element);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe(color.blue);
});

test('Renders Warning', () => {
    const testText = Warning.args?.text;
    render(<Warning />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.firstChild?.textContent).toBe(testText);
    expect(element.lastChild?.nodeName).not.toBe('BUTTON');

    const styles = element && getComputedStyle(element);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe(color.yellow);
});

test('Renders Error', () => {
    const testText = Error.args?.text;
    render(<Error />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.firstChild?.textContent).toBe(testText);
    expect(element.lastChild?.nodeName).not.toBe('BUTTON');

    const styles = element && getComputedStyle(element);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe(color.red);
});

test('Renders Success', () => {
    const testText = Success.args?.text;
    render(<Success />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.firstChild?.textContent).toBe(testText);
    expect(element.lastChild?.nodeName).not.toBe('BUTTON');

    const styles = element && getComputedStyle(element);
    const backgroundColorHex =
        styles && rgbToHex(styles.backgroundColor).toUpperCase();
    expect(backgroundColorHex).toBe(color.green);
});
