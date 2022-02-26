import React from 'react';
import { render, screen } from '@testing-library/react';
import DatePicker from './DatePicker';

const datePickerTestId = 'test-date-picker';
const datePickerIcon = 'date-picker_icon';
const datePickerInput = 'date-picker_input';
const datePickerLabel = 'date-picker_label';

test('Should load with default setup', () => {
    render(<DatePicker id="date-picker" label="test label" />);
    const element: HTMLDivElement = screen.getByTestId(datePickerTestId);
    expect(element).not.toBeNull;

    const input: HTMLInputElement = screen.getByTestId(datePickerInput);
    expect(input).not.toBeNull;
    expect(input.value).toBe(new Date().toISOString().substring(0, 10));

    const icon: HTMLSpanElement = screen.getByTestId(datePickerIcon);
    expect(icon).not.toBeNull;
    expect(icon.textContent).toBe('calendar icon');

    const label: HTMLLabelElement = screen.getByTestId(datePickerLabel);
    expect(label).not.toBeNull;
    expect(label.textContent).toBe('test label');
});

test('Should load with month mode', () => {
    render(<DatePicker id="date-picker" type="month" label="test label" />);
    const element: HTMLDivElement = screen.getByTestId(datePickerTestId);
    expect(element).not.toBeNull;

    const input: HTMLInputElement = screen.getByTestId(datePickerInput);
    expect(input).not.toBeNull;
    expect(input.value).toBe(new Date().toISOString().substring(0, 7));

    const icon: HTMLSpanElement = screen.getByTestId(datePickerIcon);
    expect(icon).not.toBeNull;
    expect(icon.textContent).toBe('calendar icon');

    const label: HTMLLabelElement = screen.getByTestId(datePickerLabel);
    expect(label).not.toBeNull;
    expect(label.textContent).toBe('test label');
});

test('Should render validation', () => {
    render(
        <DatePicker
            id="date-picker"
            type="date"
            label="test label"
            value="2010-10-20"
            validation={{
                required: true,
                min: '1999-12-31',
                max: '2050-12-31',
            }}
        />,
    );
    const element: HTMLDivElement = screen.getByTestId(datePickerTestId);
    expect(element).not.toBeNull;

    const input: HTMLInputElement = screen.getByTestId(datePickerInput);
    expect(input).not.toBeNull;
    expect(input.max).toBe('2050-12-31');
    expect(input.min).toBe('1999-12-31');
    expect(input.value).toBe('2010-10-20');
    expect(input.required).toBeTruthy;
});
