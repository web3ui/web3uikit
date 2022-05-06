import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Avatar.stories';
import { roundedEdgeValue } from './Avatar.styles';
import { render, screen } from '@testing-library/react';

const {
    AvatarImageDefault,
    AvatarImageCustom,
    AvatarLetters,
    RoundedAvatarImageCustom,
    RoundedAvatarImageDefault,
    RoundedAvatarLetters,
    CustomBackgroundAndBorderRadius,
    CustomSizeAndFontSize,
} = composeStories(stories);

const testTextId = 'test-text';
export const testAvatarId = 'test-avatar';

test('Avatar - Default Guy', () => {
    render(<AvatarImageDefault />);
    const element = screen.getByTestId(testAvatarId);
    expect(element).not.toBeNull();

    // It is not rounded
    const styles = element && getComputedStyle(element);
    expect(styles?.borderRadius).toBe('0px');

    // It is an svg element
    expect(element?.firstChild?.nodeName).toEqual('svg');
});

test('Avatar - Letters', () => {
    render(<AvatarLetters />);
    const element = screen.getByTestId(testAvatarId);
    expect(element).not.toBeNull();

    // It is not rounded
    const styles = element && getComputedStyle(element);
    expect(styles?.borderRadius).toBe('0px');

    // It has text
    const avatarText = screen.getByTestId(testTextId);
    expect(avatarText?.textContent).toEqual('DM');
});

test('Avatar - Custom Image', () => {
    render(<AvatarImageCustom />);
    const element = screen.getByTestId(testAvatarId);
    expect(element).not.toBeNull();

    // It is not  rounded
    const styles = element && getComputedStyle(element);
    expect(styles?.borderRadius).toBe('0px');

    // It has a custom background image
    expect(styles?.backgroundImage).toBe(
        'url(https://nftcoders.com/avatar/avatar-cool.svg)',
    );
});

test('Avatar - Letters Rounded', () => {
    render(<RoundedAvatarLetters />);
    const element = screen.getByTestId(testAvatarId);
    expect(element).not.toBeNull();

    // It is rounded
    const styles = element && getComputedStyle(element);
    expect(styles?.borderRadius).toBe(roundedEdgeValue);

    // It has text
    const avatarText = screen.getByTestId(testTextId);
    expect(avatarText?.textContent).toEqual('DM');
});

test('Avatar - Default Guy Rounded ', () => {
    render(<RoundedAvatarImageDefault />);
    const element = screen.getByTestId(testAvatarId);
    expect(element).not.toBeNull();

    // It is rounded
    const styles = element && getComputedStyle(element);
    expect(styles?.borderRadius).toBe(roundedEdgeValue);

    // It is an svg element
    expect(element?.firstChild?.nodeName).toEqual('svg');
});

test('Avatar - Custom Image Rounded', () => {
    render(<RoundedAvatarImageCustom />);
    const element = screen.getByTestId(testAvatarId);
    expect(element).not.toBeNull();

    // It is rounded
    const styles = element && getComputedStyle(element);
    expect(styles?.borderRadius).toBe(roundedEdgeValue);

    // It has a custom background image
    expect(styles?.backgroundImage).toBe(
        'url(https://academy.moralis.io/wp-content/uploads/2021/12/Illustration4_home.svg)',
    );
});

test('Avatar - CustomBackgroundAndBorderRadius', () => {
    render(<CustomBackgroundAndBorderRadius />);
    const element = screen.getByTestId(testAvatarId);
    expect(element).not.toBeNull();

    // It is rounded with a custom border radius
    const styles = element && getComputedStyle(element);
    expect(styles?.borderRadius).toBe(
        `${CustomBackgroundAndBorderRadius?.args?.borderRadius}px`,
    );

    expect(element).not.toBeNull();
});

test('Avatar - CustomSizeAndFontSize', () => {
    render(<CustomSizeAndFontSize />);
    const element = screen.getByTestId(testAvatarId);
    expect(element).not.toBeNull();

    // It has a custom font size
    const styles = element && getComputedStyle(element);
    expect(styles?.fontSize).toBe(
        `${CustomSizeAndFontSize?.args?.fontSize}px`,
    );

    // It has a custom size
    expect(styles?.width).toBe(`${CustomSizeAndFontSize?.args?.size}px`);
});
