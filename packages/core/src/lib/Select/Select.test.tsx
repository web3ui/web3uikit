import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from 'vitest';

import { color } from '@web3uikit/styles';
import * as stories from './Select.stories';

const {
    Default,
    NoDefaultIndexOption,
    Error,
    Confirmed,
    Disabled,
    ErrorWithMessage,
} = composeStories(stories);

const testLabelId = 'test-select-label';
const testWrapperId = 'test-select';
const testSelectedId = 'test-select-selected';
const testTextContent = 'triangle down icon';

test('Select - Default', () => {
    const testLabel = Default?.args?.label;

    render(<Default />);

    // renders the component
    const select = (screen.getByTestId(
        testWrapperId,
    ) as unknown) as HTMLDivElement | null;
    expect(select).not.toBeNull();

    // renders select without selected option 0 index
    const selected = (screen.getByTestId(
        testSelectedId,
    ) as unknown) as HTMLDivElement | null;
    expect(selected).not.toBeNull();
    selected && expect(selected.textContent).toContain(testTextContent);

    //   renders select correct colors
    const styles = selected && getComputedStyle(selected);
    expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);

    // renders label text
    const label = screen.getByTestId(testLabelId);
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe(testLabel);
});

test('Select - NoDefaultIndexOption', () => {
    const testLabel = NoDefaultIndexOption?.args?.label;

    render(<NoDefaultIndexOption />);

    // renders the component
    const select = (screen.getByTestId(
        testWrapperId,
    ) as unknown) as HTMLDivElement | null;
    expect(select).not.toBeNull();

    // renders select without selected option 0 index
    const selected = (screen.getByTestId(
        testSelectedId,
    ) as unknown) as HTMLDivElement | null;
    expect(selected).not.toBeNull();
    selected && expect(selected.textContent).toContain(testTextContent);

    //   renders select correct colors
    const styles = selected && getComputedStyle(selected);
    expect(styles?.borderColor.toUpperCase()).toBe(color.greyLight);

    // renders label text
    const label = screen.getByTestId(testLabelId);
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe(testLabel);
});

test('Select - Error', () => {
    const testLabel = Error?.args?.label;
    const testOptions = Error?.args?.options;

    render(<Error />);

    // renders the component
    const select = (screen.getByTestId(
        testWrapperId,
    ) as unknown) as HTMLDivElement | null;
    expect(select).not.toBeNull();

    // renders select without selected option 0 index
    const selected = (screen.getByTestId(
        testSelectedId,
    ) as unknown) as HTMLDivElement | null;
    expect(selected).not.toBeNull();
    selected &&
        expect(selected.textContent).toContain(testOptions?.[0]?.['label']);

    //   renders select correct colors
    const styles = selected && getComputedStyle(selected);
    expect(styles?.borderColor.toUpperCase()).toBe(color.red);

    // renders label text
    const label = screen.getByTestId(testLabelId);
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe(testLabel);
});

test('Select - ErrorWithMessage', () => {
    const testLabel = ErrorWithMessage?.args?.label;
    const testOptions = ErrorWithMessage?.args?.options;

    render(<ErrorWithMessage />);

    // renders the component
    const select = (screen.getByTestId(
        testWrapperId,
    ) as unknown) as HTMLDivElement | null;
    expect(select).not.toBeNull();

    // renders select without selected option 0 index
    const selected = (screen.getByTestId(
        testSelectedId,
    ) as unknown) as HTMLDivElement | null;
    expect(selected).not.toBeNull();
    selected &&
        expect(selected.textContent).toContain(testOptions?.[0]?.['label']);

    //   renders select correct colors
    const styles = selected && getComputedStyle(selected);
    expect(styles?.borderColor.toUpperCase()).toBe(color.red);

    // renders label text
    const label = screen.getByTestId(testLabelId);
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe(testLabel);
});

test('Select - Confirmed', () => {
    const testLabel = Confirmed?.args?.label;
    const testOptions = Confirmed?.args?.options;

    render(<Confirmed />);

    // renders the component
    const select = (screen.getByTestId(
        testWrapperId,
    ) as unknown) as HTMLDivElement | null;
    expect(select).not.toBeNull();

    // renders select without selected option 0 index
    const selected = (screen.getByTestId(
        testSelectedId,
    ) as unknown) as HTMLDivElement | null;
    expect(selected).not.toBeNull();
    selected &&
        expect(selected.textContent).toContain(testOptions?.[0]?.['label']);

    //   renders select correct colors
    const styles = selected && getComputedStyle(selected);
    expect(styles?.borderColor.toUpperCase()).toBe(color.green);

    // renders label text
    const label = screen.getByTestId(testLabelId);
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe(testLabel);
});

test('Select - Disabled', () => {
    const testLabel = Disabled?.args?.label;
    const testOptions = Disabled?.args?.options;

    render(<Disabled />);

    // renders the component
    const select = (screen.getByTestId(
        testWrapperId,
    ) as unknown) as HTMLDivElement | null;
    expect(select).not.toBeNull();

    // renders select without selected option 0 index
    const selected = (screen.getByTestId(
        testSelectedId,
    ) as unknown) as HTMLDivElement | null;
    expect(selected).not.toBeNull();
    selected &&
        expect(selected.textContent).toContain(testOptions?.[0]?.['label']);

    //   renders select correct colors
    const styles = selected && getComputedStyle(selected);
    expect(styles?.borderColor.toUpperCase()).toBe(color.greyDisabled);

    // renders label text
    const label = screen.getByTestId(testLabelId);
    expect(label).not.toBeNull();
    expect(label?.textContent).toBe(testLabel);
});
