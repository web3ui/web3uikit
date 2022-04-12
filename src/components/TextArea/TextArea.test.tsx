import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import color from '../../styles/colors';
import * as stories from './TextArea.stories';

const { Default, Error, Confirmed, Disabled, CustomWidth } =
    composeStories(stories);

const testValue = 'Test Value';
const testPlaceholder = 'Type here field';
const testTextAreaId = 'test-textarea';
const testWrapperId = 'test-textarea-wrapper';
const testLabelId = 'test-label';
const testEvent = jest.fn();

test('TextArea - Default', async () => {
    const testLabel = Default?.args?.label;
    const testName = Default?.args?.name;

    render(
        <Default
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                testEvent(event.target)
            }
        />,
    );

    // renders the component
    const textarea = screen.getByTestId(
        testTextAreaId,
    ) as unknown as HTMLTextAreaElement | null;
    expect(textarea).not.toBeNull();

    // renders textarea with the value and placeholder passed
    textarea && expect(textarea.value).toBe(testValue);
    textarea && expect(textarea.placeholder).toBe(testPlaceholder);

    // renders textarea with the name passed'
    textarea && expect(textarea.name).toBe(testName);

    // renders wrapper correct border color
    const textareaWrapper = screen.getByTestId(
        testWrapperId,
    ) as unknown as HTMLDivElement | null;
    const styles = textareaWrapper && getComputedStyle(textareaWrapper);
    expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);

    // renders label text
    const label = screen.getByTestId(testLabelId);
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe(testLabel);

    // should conditionally render 'empty / filled' className
    expect(textareaWrapper?.classList.contains('filled')).toBeFalsy;
    expect(textareaWrapper?.classList.contains('empty')).toBeTruthy;

    textarea?.focus();
    textarea && fireEvent.change(textarea, { target: { value: 'foo' } });
    textarea && expect(textarea.value).toBe('foo');

    expect(textareaWrapper?.classList.contains('filled')).toBeTruthy;
    expect(textareaWrapper?.classList.contains('empty')).toBeFalsy;

    // onChange event is returned, testEvent
    expect(testEvent).toHaveBeenCalled();
});

test('TextArea - Error', async () => {
    const testLabel = Error?.args?.label;
    const testName = Error?.args?.name;

    render(<Error />);

    // renders the component
    const textarea = screen.getByTestId(
        testTextAreaId,
    ) as unknown as HTMLTextAreaElement | null;
    expect(textarea).not.toBeNull();

    // renders textarea with the value and placeholder passed
    textarea && expect(textarea.value).toBe(testValue);
    textarea && expect(textarea.placeholder).toBe(testPlaceholder);

    // renders textarea with the name passed'
    textarea && expect(textarea.name).toBe(testName);

    // renders wrapper correct border color
    const textareaWrapper = screen.getByTestId(
        testWrapperId,
    ) as unknown as HTMLDivElement | null;
    const styles = textareaWrapper && getComputedStyle(textareaWrapper);
    expect(styles?.borderColor.toUpperCase()).toBe(color.red);

    // renders label text
    const label = screen.getByTestId(testLabelId);
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe(testLabel);

    // should conditionally render 'empty / filled' className
    expect(textareaWrapper?.classList.contains('filled')).toBeFalsy;
    expect(textareaWrapper?.classList.contains('empty')).toBeTruthy;

    textarea?.focus();
    textarea && fireEvent.change(textarea, { target: { value: 'foo' } });
    textarea && expect(textarea.value).toBe('foo');

    expect(textareaWrapper?.classList.contains('filled')).toBeTruthy;
    expect(textareaWrapper?.classList.contains('empty')).toBeFalsy;

    // onChange event is returned, testEvent
    expect(testEvent).toHaveBeenCalled();
});

test('TextArea - Confirmed', async () => {
    const testLabel = Confirmed?.args?.label;
    const testName = Confirmed?.args?.name;

    render(<Confirmed />);

    // renders the component
    const textarea = screen.getByTestId(
        testTextAreaId,
    ) as unknown as HTMLTextAreaElement | null;
    expect(textarea).not.toBeNull();

    // renders textarea with the value and placeholder passed
    textarea && expect(textarea.value).toBe(testValue);
    textarea && expect(textarea.placeholder).toBe(testPlaceholder);

    // renders textarea with the name passed'
    textarea && expect(textarea.name).toBe(testName);

    // renders wrapper correct border color
    const textareaWrapper = screen.getByTestId(
        testWrapperId,
    ) as unknown as HTMLDivElement | null;
    const styles = textareaWrapper && getComputedStyle(textareaWrapper);
    expect(styles?.borderColor.toUpperCase()).toBe(color.green);

    // renders label text
    const label = screen.getByTestId(testLabelId);
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe(testLabel);

    // should conditionally render 'empty / filled' className
    expect(textareaWrapper?.classList.contains('filled')).toBeFalsy;
    expect(textareaWrapper?.classList.contains('empty')).toBeTruthy;

    textarea?.focus();
    textarea && fireEvent.change(textarea, { target: { value: 'foo' } });
    textarea && expect(textarea.value).toBe('foo');

    expect(textareaWrapper?.classList.contains('filled')).toBeTruthy;
    expect(textareaWrapper?.classList.contains('empty')).toBeFalsy;

    // onChange event is returned, testEvent
    expect(testEvent).toHaveBeenCalled();
});

test('TextArea - Disabled', async () => {
    const testLabel = Disabled?.args?.label;
    const testName = Disabled?.args?.name;

    render(<Disabled />);

    // renders the component
    const textarea = screen.getByTestId(
        testTextAreaId,
    ) as unknown as HTMLTextAreaElement | null;
    expect(textarea).not.toBeNull();

    // renders textarea with the value and placeholder passed
    textarea && expect(textarea.value).toBe(testValue);
    textarea && expect(textarea.placeholder).toBe(testPlaceholder);

    // renders textarea with the name passed'
    textarea && expect(textarea.name).toBe(testName);

    // renders wrapper correct border color
    const textareaWrapper = screen.getByTestId(
        testWrapperId,
    ) as unknown as HTMLDivElement | null;
    const styles = textareaWrapper && getComputedStyle(textareaWrapper);
    expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);

    // renders label text
    const label = screen.getByTestId(testLabelId);
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe(testLabel);

    // should conditionally render 'empty / filled' className
    expect(textareaWrapper?.classList.contains('filled')).toBeFalsy;
    expect(textareaWrapper?.classList.contains('empty')).toBeTruthy;

    textarea?.focus();
    textarea && fireEvent.change(textarea, { target: { value: 'foo' } });
    textarea && expect(textarea.value).toBe('foo');

    expect(textareaWrapper?.classList.contains('filled')).toBeTruthy;
    expect(textareaWrapper?.classList.contains('empty')).toBeFalsy;

    // onChange event is returned, testEvent
    expect(testEvent).toHaveBeenCalled();
});

test('TextArea - CustomWidth', async () => {
    const testLabel = CustomWidth?.args?.label;
    const testName = CustomWidth?.args?.name;
    const testWidth = CustomWidth?.args?.width;

    render(
        <CustomWidth
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                testEvent(event.target)
            }
        />,
    );

    // renders the component
    const textarea = screen.getByTestId(
        testTextAreaId,
    ) as unknown as HTMLTextAreaElement | null;
    expect(textarea).not.toBeNull();

    // renders textarea with the value and placeholder passed
    textarea && expect(textarea.value).toBe('');
    textarea && expect(textarea.placeholder).toBe(testPlaceholder);

    // renders textarea with the name passed'
    textarea && expect(textarea.name).toBe(testName);

    // renders wrapper correct border color
    const textareaWrapper = screen.getByTestId(
        testWrapperId,
    ) as unknown as HTMLDivElement | null;
    const styles = textareaWrapper && getComputedStyle(textareaWrapper);
    expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);

    // renders label text
    const label = screen.getByTestId(testLabelId);
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe(testLabel);

    // should conditionally render 'empty / filled' className
    expect(textareaWrapper?.classList.contains('filled')).toBeFalsy;
    expect(textareaWrapper?.classList.contains('empty')).toBeTruthy;

    textarea?.focus();
    textarea && fireEvent.change(textarea, { target: { value: 'foo' } });
    textarea && expect(textarea.value).toBe('foo');

    expect(textareaWrapper?.classList.contains('filled')).toBeTruthy;
    expect(textareaWrapper?.classList.contains('empty')).toBeFalsy;

    // onChange event is returned, testEvent
    expect(testEvent).toHaveBeenCalled();

    // renders width property
    expect(styles?.width).toBe(testWidth);
});
