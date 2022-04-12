import { render, screen } from '@testing-library/react';
import React from 'react';
import { IconProps, Icon, iconTypes } from '.';
import color from '../../styles/colors';
import { TIconType } from './collection';

export const iconTestId = 'test-icon';

const defaultState: IconProps = {
    fill: color.black,
    size: 24,
    svg: iconTypes.mail,
};

/**
 * helpers
 */
const setState = (props: Partial<IconProps>): IconProps => {
    return { ...defaultState, ...props };
};

const renderComponent = (props: Partial<IconProps>) => {
    return <Icon {...setState(props)} />;
};

const testIconId = 'test-icon';
const testIcon = 'mail icon';
const testSize = defaultState.size;

test('Renders - Icon Default', () => {
    render(renderComponent({}));
    const iconElement = screen.getByTestId(testIconId);
    expect(iconElement).not.toBeNull();
    expect(iconElement.getAttribute('aria-hidden')).toBe('true');
});

test('Renders - Icon with custom svg', () => {
    render(renderComponent({ svg: iconTypes.mail }));
    const iconElement = screen.getByTestId(testIconId);
    expect(iconElement.textContent).toBe(testIcon);
    expect(iconElement.getAttribute('aria-hidden')).toBe('true');
});

test('Renders - Icon with custom size', () => {
    render(renderComponent({ size: testSize }));
    const iconElement = screen.getByTestId(testIconId);
    expect(iconElement.getAttribute('height')).toBe(testSize?.toString());
    expect(iconElement.getAttribute('width')).toBe(testSize?.toString());
    expect(iconElement.getAttribute('aria-hidden')).toBe('true');
});

Object.keys(iconTypes).forEach((icon) => {
    const svg = icon as TIconType;
    test(`Renders - Icon ${svg}`, () => {
        render(renderComponent({ svg }));
        expect(screen.getByTestId(testIconId)).not.toBeNull();
    });
});
