import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Dropdown.stories';
import { test, expect, describe } from 'vitest';

const { Default, ControlledState, NonFixedLabel, Iconless } =
    composeStories(stories);

const dropdownTestId = 'test-dropdown';

describe('default', () => {
    it('renders', () => {
        render(<Default />);
        const element = screen.getByTestId(dropdownTestId);
        expect(element).toBeDefined();
    });

    it('renders label', () => {
        render(<Default />);
        const label = Default.args?.label?.trim();
        const element = screen.getAllByText(`${label}`);
        expect(element).toBeDefined();
    });

    it('toggles select', () => {
        const { rerender } = render(<Default />);
        const element = screen.getByTestId(dropdownTestId);
        fireEvent.click(element);
        rerender(<Default />);
        const RenderOptions = screen.getByTestId(dropdownTestId);
        expect(RenderOptions).toBeDefined();
    });
});

describe('Controlled State', () => {
    it('renders', () => {
        render(<ControlledState />);
        const element = screen.getByTestId(dropdownTestId);
        expect(element).toBeDefined();
    });
    it('toggles select', () => {
        const { rerender } = render(<ControlledState />);
        const element = screen.getByTestId(dropdownTestId);
        fireEvent.click(element);
        rerender(<ControlledState />);
        const RenderOptions = screen.getByTestId(dropdownTestId);
        expect(RenderOptions).toBeDefined();
    });
});

describe('NonFixedLabel', () => {
    it('renders', () => {
        render(<NonFixedLabel />);
        const element = screen.getByTestId(dropdownTestId);
        expect(element).toBeDefined();
    });

    it('renders label', () => {
        render(<NonFixedLabel />);
        const element = screen.getAllByText('Server:');
        expect(element).toBeDefined();
    });

    it('toggles select', () => {
        const { rerender } = render(<NonFixedLabel />);
        const element = screen.getByTestId(dropdownTestId);
        fireEvent.click(element);
        rerender(<NonFixedLabel />);
        const RenderOptions = screen.getByTestId(dropdownTestId);
        expect(RenderOptions).toBeDefined();
    });
});

describe('IconLess', () => {
    it('renders', () => {
        render(<Iconless />);
        const element = screen.getByTestId(dropdownTestId);
        expect(element).toBeDefined();
    });

    it('renders label', () => {
        render(<Iconless />);
        const element = screen.getAllByText('Server:');
        expect(element).toBeDefined();
    });

    it('toggles select', () => {
        const { rerender } = render(<Iconless />);
        const element = screen.getByTestId(dropdownTestId);
        fireEvent.click(element);
        rerender(<Iconless />);
        const RenderOptions = screen.getByTestId(dropdownTestId);
        expect(RenderOptions).toBeDefined();
    });
});
