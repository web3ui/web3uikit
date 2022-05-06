// importing boilerplate stuff
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import {
    render,
    screen,
    fireEvent,
} from '@testing-library/react';
import * as stories from './NewComp.stories';

// // importing fire event from RTL to mock a click event
// import { fireEvent } from '@testing-library/react';

// importing color and a testing tool to convert RGB to HEX
import color from '../../styles/colors';
import rgbToHex from '../../utils/rgbToHex';

// importing testID from button and icon
import { buttonTestId } from '../Button/Button.test';
import { iconTestId } from '../Icon/Icon.test';

// importing my stories to test
const { Default, InitializeRed, UnderLinedText } = composeStories(stories);

// setting my test IDs to match my tsx
export const testCompId = 'test-new-comp';
const testTitle = 'test-title';
const testHeading = 'test-heading';
const testText = 'test-text';
// NOTE: the main test ID is exported incase
// it is needed for another components test

// /////////////////////////////////////////////////////
// examples of basic tests of props, values and styles
// /////////////////////////////////////////////////////

// Test Story 1: Default
test('Renders Default component', () => {
    const testTextOn = Default?.args?.textOn;

    render(<Default />);

    const component = screen.getByTestId(testCompId);
    expect(component).not.toBeNull();

    const icon = screen.getByTestId(iconTestId);
    expect(icon).not.toBeNull();

    const title = screen.getByTestId(testTitle);
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('The Demo Component');

    const heading = screen.getByTestId(testHeading);
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe(testTextOn);

    const styles = heading && getComputedStyle(heading);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.green);

    const text = screen.getByTestId(testText);
    expect(text).not.toBeNull();
    expect(text.textContent).toBe('Clicked: 0 times');

    const textWithoutUnderline = screen.getByTestId(testText);
    expect(textWithoutUnderline).not.toBeNull();
    const twlStyles = textWithoutUnderline && getComputedStyle(textWithoutUnderline);
    expect(twlStyles?.textDecoration).toBe('none');
});

// Test Story 2: Button Click
test('changes UI onClick of the button', () => {
    const testTextOff = Default?.args?.textOff;

    render(<Default />);

    const buttonElement = screen.getByTestId(buttonTestId);

    buttonElement && fireEvent.click(buttonElement);

    const textElelement = screen.getByTestId(testText);
    expect(textElelement).not.toBeNull();
    expect(textElelement.textContent).toBe('Clicked: 1 times');

    const headingElement = screen.getByTestId(testHeading);
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toBe(testTextOff);

    const styles = headingElement && getComputedStyle(headingElement);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.red);
});

// Test Story 3: InitializeRed
test('Renders InitializeRed', () => {
    const testTextOff = InitializeRed?.args?.textOff;

    render(<InitializeRed />);

    const component = screen.getByTestId(testCompId);
    expect(component).not.toBeNull();

    const icon = screen.getByTestId(iconTestId);
    expect(icon).not.toBeNull();

    const title = screen.getByTestId(testTitle);
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('The Demo Component');

    const heading = screen.getByTestId(testHeading);
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe(testTextOff);

    const styles = heading && getComputedStyle(heading);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.red);

    const text = screen.getByTestId(testText);
    expect(text).not.toBeNull();
    expect(text.textContent).toBe('Clicked: 0 times');

    const textWithoutUnderline = screen.getByTestId(testText);
    expect(textWithoutUnderline).not.toBeNull();
    const twlStyles = textWithoutUnderline && getComputedStyle(textWithoutUnderline);
    expect(twlStyles?.textDecoration).toBe('none');
});

// Test Story 3: Button click
test('changes UI onClick of the button', () => {
    const testTextOn = InitializeRed?.args?.textOn;

    render(<InitializeRed />);

    const buttonElement = screen.getByTestId(buttonTestId);
    buttonElement && fireEvent.click(buttonElement);

    const textElelement = screen.getByTestId(testText);
    expect(textElelement).not.toBeNull();
    expect(textElelement.textContent).toBe('Clicked: 1 times');

    const headingElement = screen.getByTestId(testHeading);
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toBe(testTextOn);

    const styles = headingElement && getComputedStyle(headingElement);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.green);
});

// Test Story 4: UnderLinedText
test('Renders UnderLinedText', () => {
    const testTextOn = UnderLinedText?.args?.textOn;

    render(<UnderLinedText />);

    const component = screen.getByTestId(testCompId);
    expect(component).not.toBeNull();

    const icon = screen.getByTestId(iconTestId);
    expect(icon).not.toBeNull();

    const title = screen.getByTestId(testTitle);
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('The Demo Component');

    const heading = screen.getByTestId(testHeading);
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe(testTextOn);

    const styles = heading && getComputedStyle(heading);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.green);

    const text = screen.getByTestId(testText);
    expect(text).not.toBeNull();
    expect(text.textContent).toBe('Clicked: 0 times');

    const textWithoutUnderline = screen.queryByTestId(testText);
    expect(textWithoutUnderline).not.toBeNull();
    const twlStyles = textWithoutUnderline && getComputedStyle(textWithoutUnderline);
    expect(twlStyles?.textDecoration).toBe('underline');
});

test('changes UI onClick of the button', () => {
    const testTextOff = UnderLinedText?.args?.textOff;

    render(<UnderLinedText />);

    const buttonElement = screen.getByTestId(buttonTestId);
    buttonElement && fireEvent.click(buttonElement);

    const textElelement = screen.getByTestId(testText);
    expect(textElelement).not.toBeNull();
    expect(textElelement.textContent).toBe('Clicked: 1 times');

    const headingElement = screen.getByTestId(testHeading);
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toBe(testTextOff);

    const styles = headingElement && getComputedStyle(headingElement);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.red);
});
