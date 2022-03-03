import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import CopyButton from './CopyButton';
import { iconTypes } from '../Icon';

const copyIconTestId = 'copy-icon';

// Mocking clipboard for testing
Object.defineProperty(navigator, 'clipboard', {
    value: {
        writeText: () => {},
    },
});

test('Should render the component', () => {
    render(<CopyButton />);
    const element = screen.getByTestId(copyIconTestId);
    expect(element).not.toBeNull();

    // Verify that the `icon copy` is visible
    expect(element.textContent).toBe(`${iconTypes.copy} icon`);
});

test('Should render the component after clicking the button', () => {
    render(<CopyButton text={'With Love from Developers'} />);
    const element = screen.getByTestId(copyIconTestId);
    element && fireEvent.click(element);

    // Verify that the `icon check` is visible
    expect(element.textContent).toBe(`${iconTypes.check} icon`);
});
