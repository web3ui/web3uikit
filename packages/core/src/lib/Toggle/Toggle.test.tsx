import { fireEvent, render } from '@testing-library/react';
import Toggle from './Toggle';
import { test, expect, describe, vi } from 'vitest';

describe('Toggle component', () => {
    test('renders labelOff and labelOn', () => {
        const { getByTestId } = render(<Toggle labelOff="Off" labelOn="On" />);
        expect(getByTestId('test-toggle-labelOff')).not.toBeNull();
        expect(getByTestId('test-toggle-labelOn')).not.toBeNull();
    });

    test('calls onToggle when toggled', () => {
        const onToggle = vi.fn();
        const { getByTestId } = render(
            <Toggle labelOff="Off" labelOn="On" onToggle={onToggle} />,
        );
        const input = getByTestId('test-toggle-input');
        fireEvent.click(input);
        expect(onToggle).toHaveBeenCalledWith('On');
    });

    test('disables toggle when disabled prop is true', () => {
        const onToggle = vi.fn();
        const { getByTestId } = render(
            <Toggle labelOff="Off" labelOn="On" disabled />,
        );
        const input = getByTestId('test-toggle-input');
        fireEvent.click(input);
        expect(onToggle).toHaveBeenCalledTimes(0);
    });
});
