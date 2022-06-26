import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from './Logo.stories';
import { test, expect, describe } from 'vitest';

const {
    AmexRegular,
    DinersRegular,
    LogoDefaultWhite,
    MastercardRegular,
    VisaRegular,
} = composeStories(stories);

test('Renders Logo Default', () => {
    const testlogoIconId = 'test-logo-default';

    render(<LogoDefaultWhite />);

    const logoIcon = screen.getByTestId(testlogoIconId);
    expect(logoIcon).not.toBeNull();
});

test('Renders Logo Visa', () => {
    const testlogoIconId = 'test-logo-visa';

    render(<VisaRegular />);

    const logoIcon = screen.getByTestId(testlogoIconId);
    expect(logoIcon).not.toBeNull();
});

test('Renders Logo Mastercard', () => {
    const testlogoIconId = 'test-logo-mastercard';

    render(<MastercardRegular />);

    const logoIcon = screen.getByTestId(testlogoIconId);
    expect(logoIcon).not.toBeNull();
});

test('Renders Logo American Express', () => {
    const testlogoIconId = 'test-logo-amex';

    render(<AmexRegular />);

    const logoIcon = screen.getByTestId(testlogoIconId);
    expect(logoIcon).not.toBeNull();
});

test('Renders Logo Diners Club', () => {
    const testlogoIconId = 'test-logo-diners';

    render(<DinersRegular />);

    const logoIcon = screen.getByTestId(testlogoIconId);
    expect(logoIcon).not.toBeNull();
});
