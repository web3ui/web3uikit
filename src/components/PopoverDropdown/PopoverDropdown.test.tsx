import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { screen, render } from '@testing-library/react';
import * as stories from './PopoverDropdown.stories';
import styles from './PopoverDropdown.styles';

const { halfSize } = styles;

const {
    PopoverWithElements,
    PopoverAnything,
    PopoverBackgroundColor,
    PopoverWidth,
    PopoverPositionTop,
    PopoverPositionRight,
    PopoverPositionLeft,
} = composeStories(stories);

const testId = 'test-popover-dropdown';
const testIdList = 'test-popover-dropdown__list';
const testIdChildren = 'test-popover-dropdown__child';

test('Renders Parent with correct children', () => {
    render(<PopoverWithElements />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();

    const children = screen.getAllByTestId(testIdChildren);
    expect(children.length).toBe(PopoverWithElements?.args?.children?.length);
});

test('Renders ID', () => {
    render(<PopoverAnything />);
    const element = screen.getByTestId(testId);
    expect(element.id).toBe(PopoverAnything?.args?.id);
});

test('Renders custom background color', () => {
    render(<PopoverBackgroundColor />);
    const list = screen.getByTestId(testIdList);
    const styles = getComputedStyle(list);
    expect(styles.backgroundColor).toBe(
        PopoverBackgroundColor.args?.backgroundColor,
    );
});

test('Renders custom width as min width', () => {
    render(<PopoverWidth />);
    const list = screen.getByTestId(testIdList);
    const styles = getComputedStyle(list);
    expect(styles.minWidth).toBe(PopoverWidth.args?.width);
});

test('Renders position bottom by default', () => {
    render(<PopoverWithElements />);
    const list = screen.getByTestId(testIdList);
    const styles = getComputedStyle(list);
    expect(styles.top).toBe(`calc(100% + ${halfSize})`);
});

test('Renders position top styles', () => {
    render(<PopoverPositionTop />);
    const list = screen.getByTestId(testIdList);
    const styles = getComputedStyle(list);
    expect(styles.bottom).toBe(`calc(100% + ${halfSize})`);
});

test('Renders position right styles', () => {
    render(<PopoverPositionRight />);
    const list = screen.getByTestId(testIdList);
    const styles = getComputedStyle(list);
    expect(styles.left).toBe(`calc(100% + ${halfSize})`);
});

test('Renders position left styles', () => {
    render(<PopoverPositionLeft />);
    const list = screen.getByTestId(testIdList);
    const styles = getComputedStyle(list);
    expect(styles.right).toBe(`calc(100% + ${halfSize})`);
});
