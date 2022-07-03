import { fireEvent, waitFor, screen, render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Breadcrumbs.stories';
import { color } from '@web3uikit/styles';
import { test, expect, describe } from 'vitest';
const { One, Two, Three, Four } = composeStories(stories);

const olId = 'test-breadcrumbs-list';
const navId = 'test-breadcrumbs';
const separatorId = 'test-breadcrumbs-separator';
const breadcrumbId = 'test-breadcrumb-item';

test('Renders - Breadcrumbs One', () => {
    render(<One />);
    expect(screen.getByTestId(navId)).not.toBeNull();
    expect(screen.queryByTestId(separatorId)).toBeNull();
    expect(
        screen.queryByTestId(`${breadcrumbId}-0`)?.querySelector('svg'),
    ).toBeDefined();
    expect(screen.queryByTestId(olId)).not.toBeNull();
});

test.skip('Renders - Breadcrumbs One: Hover Test', async () => {
    render(<One />);
    // TODO: Hover/MouseOver Event does not work as expected so it passes. Need to Fix
    const breadcrumbElement = screen.getByTestId(`${breadcrumbId}-0`);
    fireEvent.mouseOver(breadcrumbElement);
    await waitFor(() => breadcrumbElement);
    expect(breadcrumbElement).toHaveStyleRule(`background: ${color.grey}`);
});

test('Renders - Breadcrumbs Two', async () => {
    render(<Two />);
    expect(screen.getByTestId(navId)).not.toBeNull();
    expect(screen.queryByTestId(separatorId)).not.toBeNull();
    expect(
        screen.queryByTestId(`${breadcrumbId}-0`)?.querySelector('svg'),
    ).toBeDefined();
    expect(screen.queryByTestId(olId)).not.toBeNull();
});

test.skip('Renders - Breadcrumbs Two: Hover Test', async () => {
    render(<Two />);
    // TODO: Hover Event does not work as expected so it passes. Need to Fix
    const breadcrumbElement = screen.getByTestId(`${breadcrumbId}-0`);
    fireEvent.mouseOver(breadcrumbElement);
    await waitFor(() => breadcrumbElement);
    expect(breadcrumbElement).toHaveStyleRule(`background: ${color.blueDark}`);
    const breadcrumbElement1 = screen.getByTestId(`${breadcrumbId}-1`);
    fireEvent.mouseOver(breadcrumbElement1);
    await waitFor(() => breadcrumbElement1);
    expect(breadcrumbElement).toHaveStyleRule(`background: ${color.grey}`);
});

test('Renders - Breadcrumbs Three', () => {
    render(<Three />);
    expect(screen.getByTestId(navId)).not.toBeNull();
    expect(screen.queryAllByTestId(separatorId).length).toBeGreaterThanOrEqual(
        1,
    );
    expect(
        screen.queryByTestId(`${breadcrumbId}-0`)?.querySelector('svg'),
    ).toBeDefined();
    expect(screen.queryByTestId(olId)).not.toBeNull();
});

test.skip('Renders - Breadcrumbs Three: Hover Test', async () => {
    render(<Three />);
    // TODO: Hover Event does not work as expected so it passes. Need to Fix
    const breadcrumbElement = screen.getByTestId(`${breadcrumbId}-0`);
    fireEvent.mouseOver(breadcrumbElement);
    await waitFor(() => breadcrumbElement);
    expect(breadcrumbElement).toHaveStyleRule(`background: ${color.blueDark}`);
    const breadcrumbElement1 = screen.getByTestId(`${breadcrumbId}-1`);
    fireEvent.mouseOver(breadcrumbElement1);
    await waitFor(() => breadcrumbElement1);
    expect(breadcrumbElement).toHaveStyleRule(`background: ${color.blueDark}`);
    // third breadcrumb should not change color on hover
    const breadcrumbElement2 = screen.getByTestId(`${breadcrumbId}-2`);
    fireEvent.mouseOver(breadcrumbElement2);
    await waitFor(() => breadcrumbElement2);
    expect(breadcrumbElement).toHaveStyleRule(`background: ${color.grey}`);
});

test('Renders - Breadcrumbs Four', () => {
    render(<Four />);
    expect(screen.getByTestId(navId)).not.toBeNull();
    expect(screen.queryAllByTestId(separatorId).length).toBeGreaterThanOrEqual(
        1,
    );
    expect(
        screen.queryByTestId(`${breadcrumbId}-0`)?.querySelector('svg'),
    ).toBeDefined();
    expect(screen.queryByTestId(olId)).not.toBeNull();
});

test.skip('Renders - Breadcrumbs Four: Hover Test', async () => {
    render(<Four />);
    // TODO: Hover Event does not work as expected so it passes. Need to Fix
    const breadcrumbElement = screen.getByTestId(`${breadcrumbId}-0`);
    fireEvent.mouseOver(breadcrumbElement);
    await waitFor(() => breadcrumbElement);
    expect(breadcrumbElement).toHaveStyleRule(`background: ${color.blueDark}`);
    const breadcrumbElement1 = screen.getByTestId(`${breadcrumbId}-1`);
    fireEvent.mouseOver(breadcrumbElement1);
    await waitFor(() => breadcrumbElement1);
    expect(breadcrumbElement).toHaveStyleRule(`background: ${color.blueDark}`);
    // third breadcrumb should change color on hover
    const breadcrumbElement2 = screen.getByTestId(`${breadcrumbId}-2`);
    fireEvent.mouseOver(breadcrumbElement2);
    await waitFor(() => breadcrumbElement2);
    expect(breadcrumbElement).toHaveStyleRule(`background: ${color.blueDark}`);
    // third breadcrumb should not change color on hover
    const breadcrumbElement3 = screen.getByTestId(`${breadcrumbId}-3`);
    fireEvent.mouseOver(breadcrumbElement3);
    await waitFor(() => breadcrumbElement3);
    expect(breadcrumbElement).toHaveStyleRule(`background: ${color.grey}`);
});
