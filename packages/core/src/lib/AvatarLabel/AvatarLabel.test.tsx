import * as stories from './AvatarLabel.stories';
import { test, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';
import { color, legacyColor, rgbToHex } from '@web3uikit/styles';

import { composeStories } from '@storybook/testing-react';

const { Default } = composeStories(stories);

test('Renders AvatarLabel default', () => {
    render(<Default />);

    const avatarLabel = screen.getByTestId('test-avatarLabel');
    expect(avatarLabel).not.toBeNull();

    const avatarLabelText = screen.getByTestId('test-avatarLabelText');
    const styles = avatarLabelText && getComputedStyle(avatarLabelText);

    expect(avatarLabelText?.textContent).toEqual('Level 0');

    const colorAsHexText = rgbToHex(styles?.color).toUpperCase();
    expect(colorAsHexText).toBe(color.white);

    const colorAsHexBG = rgbToHex(styles?.background).toUpperCase();
    expect(colorAsHexBG).toBe(legacyColor.pink);

    const displayedImage = document.querySelector('img') as HTMLImageElement;
    expect(displayedImage.src).not.toBeNull();
    expect(displayedImage.src).toBe(
        'https://moralis.io/wp-content/uploads/2023/05/defaultAvatar.jpg',
    );
});
