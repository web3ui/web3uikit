import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Checkbox.stories';
import { render, screen, fireEvent } from '@testing-library/react';

const {
    Box,
    BoxDisabled,
    BoxOnByDefault,
    Switch,
    SwitchDisabled,
    SwitchOnByDefault,
    SwitchingText,
} = composeStories(stories);

const labelTestID = 'test-checkbox-label';
const inputTestID = 'test-checkbox-input';
const textTestID = 'test-checkbox-text';
const testEvent = jest.fn();

test('Renders Checkbox - Box', () => {
    render(
        <Box
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
        />,
    );
    const testId = Box?.args?.id;
    const testLabelText = Box?.args?.label;
    const testNameText = Box?.args?.name;
    const labelElement = screen.getByTestId(labelTestID);
    expect(labelElement).not.toBeNull();
    expect(labelElement.dataset?.layout).toBe('box');
    expect(screen.getByTestId(textTestID).textContent).toBe(testLabelText);

    const inputElement = screen.getByTestId(inputTestID);
    expect(inputElement).not.toBeNull();
    expect(inputElement.id).toBe(testId);
    expect(inputElement.getAttribute('name')).toBe(testNameText);
    expect(inputElement.getAttribute('value')).toBe('false');
    expect(inputElement.getAttribute('disabled')).toBeNull();
    fireEvent.click(labelElement);
    expect(testEvent).toHaveBeenCalled();
    expect(testEvent).toHaveBeenCalledWith(inputElement);
});

test('Renders Checkbox - Box Disabled', () => {
    render(
        <BoxDisabled
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
        />,
    );
    const testId = BoxDisabled?.args?.id;
    const testLabelText = BoxDisabled?.args?.label;
    const testNameText = BoxDisabled?.args?.name;
    const labelElement = screen.getByTestId(labelTestID);
    expect(labelElement).not.toBeNull();
    expect(labelElement.dataset?.layout).toBe('box');

    expect(screen.getByTestId(textTestID).textContent).toBe(testLabelText);
    const inputElement = screen.getByTestId(inputTestID);
    expect(inputElement).not.toBeNull();
    expect(inputElement.id).toBe(testId);
    expect(inputElement.parentNode?.nodeName).toBe('LABEL');
    expect(inputElement.getAttribute('name')).toBe(testNameText);
    expect(inputElement.getAttribute('value')).toBe('false');
    expect(inputElement.getAttribute('disabled')).toBe('');
    fireEvent.click(labelElement);
    expect(testEvent).toHaveBeenCalled();
});

test('Renders Checkbox - Box On by Default', () => {
    render(
        <BoxOnByDefault
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
        />,
    );
    const testId = BoxOnByDefault?.args?.id;
    const testLabelText = BoxOnByDefault?.args?.label;
    const testNameText = BoxOnByDefault?.args?.name;
    const labelElement = screen.getByTestId(labelTestID);
    expect(labelElement).not.toBeNull();
    expect(labelElement.dataset?.layout).toBe('box');
    expect(screen.getByTestId(textTestID).textContent).toBe(testLabelText);

    const inputElement = screen.getByTestId(inputTestID);
    expect(inputElement).not.toBeNull();
    expect(inputElement.id).toBe(testId);
    expect(inputElement.parentNode?.nodeName).toBe('LABEL');
    expect(inputElement.getAttribute('name')).toBe(testNameText);
    expect(inputElement.getAttribute('value')).toBe('true');
    expect(inputElement.getAttribute('checked')).toBe('');
    expect(inputElement.getAttribute('disabled')).toBeNull();
    fireEvent.click(labelElement);
    expect(testEvent).toHaveBeenCalled();
    expect(testEvent).toHaveBeenCalledWith(inputElement);
});

test('Renders Checkbox - Switch', () => {
    render(
        <Switch
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
        />,
    );
    const testId = Switch?.args?.id;
    const testLabelText = Switch?.args?.label;
    const testNameText = Switch?.args?.name;
    const labelElement = screen.getByTestId(labelTestID);
    expect(labelElement).not.toBeNull();
    expect(labelElement.dataset?.layout).toBe('switch');
    expect(screen.getByTestId(textTestID).textContent).toBe(testLabelText);

    const inputElement = screen.getByTestId(inputTestID);
    expect(inputElement).not.toBeNull();
    expect(inputElement.id).toBe(testId);
    expect(inputElement.parentNode?.nodeName).toBe('LABEL');
    expect(inputElement.getAttribute('name')).toBe(testNameText);
    expect(inputElement.getAttribute('value')).toBe('false');
    expect(inputElement.getAttribute('checked')).toBeNull();
    expect(inputElement.getAttribute('disabled')).toBeNull();
    fireEvent.click(labelElement);
    expect(testEvent).toHaveBeenCalled();
    expect(testEvent).toHaveBeenCalledWith(inputElement);
});

test('Renders Checkbox - Switch Disabled', () => {
    render(
        <SwitchDisabled
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
        />,
    );
    const testId = SwitchDisabled?.args?.id;
    const testLabelText = SwitchDisabled?.args?.label;
    const testNameText = SwitchDisabled?.args?.name;
    const labelElement = screen.getByTestId(labelTestID);
    expect(labelElement).not.toBeNull();
    expect(labelElement.dataset?.layout).toBe('switch');
    expect(screen.getByTestId(textTestID).textContent).toBe(testLabelText);

    const inputElement = screen.getByTestId(inputTestID);
    expect(inputElement).not.toBeNull();
    expect(inputElement.id).toBe(testId);
    expect(inputElement.parentNode?.nodeName).toBe('LABEL');
    expect(inputElement.getAttribute('name')).toBe(testNameText);
    expect(inputElement.getAttribute('value')).toBe('false');
    expect(inputElement.getAttribute('checked')).toBeNull();
    expect(inputElement.getAttribute('disabled')).toBe('');
    fireEvent.click(labelElement);
    expect(testEvent).toHaveBeenCalled();
});

test('Renders Checkbox - Switch On By Default', () => {
    render(
        <SwitchOnByDefault
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
        />,
    );
    const testId = SwitchOnByDefault?.args?.id;
    const testLabelText = SwitchOnByDefault?.args?.label;
    const testNameText = SwitchOnByDefault?.args?.name;
    const labelElement = screen.getByTestId(labelTestID);
    expect(labelElement).not.toBeNull();
    expect(labelElement.dataset?.layout).toBe('switch');
    expect(screen.getByTestId(textTestID).textContent).toBe(testLabelText);

    const inputElement = screen.getByTestId(inputTestID);
    expect(inputElement).not.toBeNull();
    expect(inputElement.id).toBe(testId);
    expect(inputElement.parentNode?.nodeName).toBe('LABEL');
    expect(inputElement.getAttribute('name')).toBe(testNameText);
    expect(inputElement.getAttribute('value')).toBe('true');
    expect(inputElement.getAttribute('checked')).toBe('');
    expect(inputElement.getAttribute('disabled')).toBeNull();
    fireEvent.click(labelElement);
    expect(testEvent).toHaveBeenCalled();
    expect(testEvent).toHaveBeenCalledWith(inputElement);
});

test('Renders Checkbox - Switching Text', () => {
    render(
        <SwitchingText
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                testEvent(event.target)
            }
        />,
    );
    const testId = SwitchingText?.args?.id;
    const testLabelText = SwitchingText?.args?.label;
    const testNameText = SwitchingText?.args?.name;
    const labelElement = screen.getByTestId(labelTestID);
    expect(labelElement).not.toBeNull();
    expect(labelElement.dataset?.layout).toBe('switch');
    expect(screen.getByTestId(textTestID).textContent).toBe(testLabelText);

    const inputElement = screen.getByTestId(inputTestID);
    expect(inputElement).not.toBeNull();
    expect(inputElement.id).toBe(testId);
    expect(inputElement.parentNode?.nodeName).toBe('LABEL');
    expect(inputElement.getAttribute('name')).toBe(testNameText);
    expect(inputElement.getAttribute('value')).toBe('false');
    expect(inputElement.getAttribute('checked')).toBeNull();
    expect(inputElement.getAttribute('disabled')).toBeNull();
    // Label text changes on this click
    fireEvent.click(labelElement);
    expect(testEvent).toHaveBeenCalled();
    expect(testEvent).toHaveBeenCalledWith(inputElement);
    const textElement = screen.getByTestId(textTestID);
    expect(textElement.textContent).not.toBe(testLabelText);
    // Label text changes back to original on this click
    fireEvent.click(labelElement);
    expect(textElement.textContent).toBe(testLabelText);
});
