import * as stories from './CryptoAddress.stories';
import { test, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';
import { color, rgbToHex } from '@web3uikit/styles';

import { composeStories } from '@storybook/testing-react';

const { Default } = composeStories(stories);

test('Renders CryptoAddress default', () => {
    render(<Default />);

    const cryptoAddress = screen.getByTestId('test-cryptoAddress');
    expect(cryptoAddress).not.toBeNull();

    const styles = cryptoAddress && getComputedStyle(cryptoAddress);
    const colorAsHex = rgbToHex(styles?.color).toUpperCase();
    expect(colorAsHex).toBe(color.aero80);
});
