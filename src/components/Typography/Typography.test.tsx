import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Typography.stories';

const {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Subtitle1,
    Subtitle2,
    Body18,
    Body16,
    Caption14,
    Caption12,
    Caption10,
    Copyable,
} = composeStories(stories);

const testId = 'test-typography';

test('Renders Heading1', () => {
    render(<Heading1 />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Heading1.args?.children);
});

test('Renders Heading2', () => {
    render(<Heading2 />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Heading2.args?.children);
});

test('Renders Heading3', () => {
    render(<Heading3 />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Heading3.args?.children);
});

test('Renders Heading4', () => {
    render(<Heading4 />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Heading4.args?.children);
});

test('Renders Subtitle1', () => {
    render(<Subtitle1 />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Subtitle1.args?.children);
});

test('Renders Subtitle2', () => {
    render(<Subtitle2 />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Subtitle2.args?.children);
});

test('Renders Body18', () => {
    render(<Body18 />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Body18.args?.children);
});

test('Renders Body16', () => {
    render(<Body16 />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Body16.args?.children);
});

test('Renders Caption14', () => {
    render(<Caption14 />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Caption14.args?.children);
});

test('Renders Caption12', () => {
    render(<Caption12 />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Caption12.args?.children);
});

test('Renders Caption10', () => {
    render(<Caption10 />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Caption10.args?.children);
});

test('Renders Copyable', () => {
    render(<Copyable />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.textContent).toBe(Copyable.args?.children + 'copy icon');
});
