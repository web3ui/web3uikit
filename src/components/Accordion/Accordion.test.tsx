import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Accordion.stories';
import { tagTestId } from '../Tag/Tag.test';
import { iconTestId } from '../Icon/Icon.test';
import color from '../../styles/colors';

const { Default, FullDemo, HasIcon, HasSubtitle, HasTag, ThemeColor } =
    composeStories(stories);

const testId = 'test-accordion';
const testTitle = 'test-accordion-title';
const testSubtitle = 'test-accordion-subtitle';
const testHeader = 'test-accordion-header';

test('Renders Default', () => {
    const titleText = Default?.args?.title;

    render(<Default />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.id).toBe('accordion');

    const title = screen.getByTestId(testTitle);
    expect(title).not.toBeNull();
    expect(title.textContent).toBe(titleText);

    const subTitle = screen.queryByTestId(testSubtitle);
    expect(subTitle).toBeNull();

    const tag = screen.queryByTestId(tagTestId);
    expect(tag).toBeNull();

    const iconArray = screen.getAllByTestId(iconTestId);
    expect(iconArray[0]).not.toBeNull();
    expect(iconArray[0].textContent).toBe('plus icon');
    expect(iconArray[1].textContent).not.toBe('lock closed icon');
});

test('Renders FullDemo', () => {
    const titleText = FullDemo?.args?.title;
    const subtitleText = FullDemo?.args?.subTitle;
    const tagText = FullDemo?.args?.tagText;

    render(<FullDemo />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.id).toBe('accordion');

    const title = screen.getByTestId(testTitle);
    expect(title).not.toBeNull();
    expect(title.textContent).toBe(titleText);

    const subTitle = screen.getByTestId(testSubtitle);
    expect(subTitle).not.toBeNull();
    expect(subTitle.textContent).toBe(subtitleText);

    const tag = screen.getByTestId(tagTestId);
    expect(tag).not.toBeNull();
    expect(tag.textContent).toBe(tagText);

    const iconArray = screen.getAllByTestId(iconTestId);
    expect(iconArray[0]).not.toBeNull();
    expect(iconArray[0].textContent).toBe('plus icon');
    expect(iconArray[1]).not.toBeNull();
    expect(iconArray[1].textContent).toBe('lock closed icon');
});

test('Component is interactive', () => {
    const isExpanded = FullDemo?.args?.isExpanded;
    render(<Default />);
    const headerElement = screen.getByTestId(testHeader);
    expect(headerElement).not.toBeNull();
    expect(headerElement.getAttribute('aria-expanded')).toBe(`${isExpanded}`);
    fireEvent.click(headerElement);
    expect(headerElement?.getAttribute('aria-expanded')).toBe(`${!isExpanded}`);
});

test('Renders colors', () => {
    render(<Default />);
    const element = screen.getByTestId(testId);
    const styles = element && getComputedStyle(element);
    expect(styles.border).toBe(`1px solid ${color.blue}`.toLowerCase());
});

test('Renders theme colors', () => {
    render(<ThemeColor />);
    const element = screen.getByTestId(testId);
    const styles = element && getComputedStyle(element);
    expect(styles.border).toBe(`1px solid ${color.green}`.toLowerCase());
});

test('Renders HasSubtitle', () => {
    const titleText = HasSubtitle?.args?.title;
    const subtitleText = FullDemo?.args?.subTitle;

    render(<HasSubtitle />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.id).toBe('accordion');

    const title = screen.getByTestId(testTitle);
    expect(title).not.toBeNull();
    expect(title.textContent).toBe(titleText);

    const subTitle = screen.getByTestId(testSubtitle);
    expect(subTitle).not.toBeNull();
    expect(subTitle.textContent).toBe(subtitleText);

    const tag = screen.queryByTestId(tagTestId);
    expect(tag).toBeNull();

    const iconArray = screen.getAllByTestId(iconTestId);
    expect(iconArray[0]).not.toBeNull();
    expect(iconArray[0].textContent).toBe('plus icon');
    expect(iconArray[1].textContent).not.toBe('lock closed icon');
});

test('Renders HasTag', () => {
    const titleText = HasTag?.args?.title;
    const tagText = FullDemo?.args?.tagText;

    render(<HasTag />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.id).toBe('accordion');

    const title = screen.getByTestId(testTitle);
    expect(title).not.toBeNull();
    expect(title.textContent).toBe(titleText);

    const subTitle = screen.queryByTestId(testSubtitle);
    expect(subTitle).toBeNull();

    const tag = screen.getByTestId(tagTestId);
    expect(tag).not.toBeNull();
    expect(tag.textContent).toBe(tagText);

    const iconArray = screen.getAllByTestId(iconTestId);
    expect(iconArray[0]).not.toBeNull();
    expect(iconArray[0].textContent).toBe('plus icon');
    expect(iconArray[1].textContent).not.toBe('lock closed icon');
});

test('Renders HasIcon', () => {
    const titleText = HasIcon?.args?.title;

    render(<HasIcon />);
    const element = screen.getByTestId(testId);
    expect(element).not.toBeNull();
    expect(element.id).toBe('accordion');

    const title = screen.getByTestId(testTitle);
    expect(title).not.toBeNull();
    expect(title.textContent).toBe(titleText);

    const subTitle = screen.queryByTestId(testSubtitle);
    expect(subTitle).toBeNull();

    const tag = screen.queryByTestId(tagTestId);
    expect(tag).toBeNull();

    const iconArray = screen.getAllByTestId(iconTestId);
    expect(iconArray[0]).not.toBeNull();
    expect(iconArray[0].textContent).toBe('plus icon');
    expect(iconArray[1]).not.toBeNull();
    expect(iconArray[1].textContent).toBe('lock closed icon');
});
