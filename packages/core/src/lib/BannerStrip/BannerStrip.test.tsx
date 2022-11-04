import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './BannerStrip.stories';
// import { color, rgbToHex } from '@web3uikit/styles';
import { test, expect, describe } from 'vitest';

const { Standard, Warning, Error, Success } = composeStories(stories);

const testId = 'test-banner-strip';

test('Renders Standard', () => {
    const testText = 'Hey this is a notification you should check out';
    render(<Standard />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(testText);
    expect(element.lastChild?.nodeName).not.toBe('BUTTON');

    // TODO : UPDATE ALL COLORS WITH NAMING SYSTEM ONCE IT IS FINALIZED
    // const styles = element && getComputedStyle(element);
    // const backgroundColorHex =
    //     styles && rgbToHex(styles.backgroundColor).toUpperCase();
    // expect(backgroundColorHex).toBe(color.navy40);
});

test('Renders Warning', () => {
    const testText = Warning.args?.text;
    render(<Warning />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.firstChild?.textContent).toBe(testText);
    expect(element.lastChild?.nodeName).not.toBe('BUTTON');

    // TODO : UPDATE ALL COLORS WITH NAMING SYSTEM ONCE IT IS FINALIZED
    // const styles = element && getComputedStyle(element);
    // const backgroundColorHex =
    //     styles && rgbToHex(styles.backgroundColor).toUpperCase();
    // expect(backgroundColorHex).toBe(color.yellow50);
});

test('Renders Error', () => {
    const testText = Error.args?.text;
    render(<Error />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.firstChild?.textContent).toBe(testText);
    expect(element.lastChild?.nodeName).not.toBe('BUTTON');
    // TODO : UPDATE ALL COLORS WITH NAMING SYSTEM ONCE IT IS FINALIZED
    // const styles = element && getComputedStyle(element);
    // const backgroundColorHex =
    //     styles && rgbToHex(styles.backgroundColor).toUpperCase();
    // expect(backgroundColorHex).toBe(color.red40);
});

test('Renders Success', () => {
    const testText = Success.args?.text;
    render(<Success />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.firstChild?.textContent).toBe(testText);
    expect(element.lastChild?.nodeName).not.toBe('BUTTON');
    // TODO : UPDATE ALL COLORS WITH NAMING SYSTEM ONCE IT IS FINALIZED
    // const styles = element && getComputedStyle(element);
    // const backgroundColorHex =
    //     styles && rgbToHex(styles.backgroundColor).toUpperCase();
    // expect(backgroundColorHex).toBe(color.mint40);
});
