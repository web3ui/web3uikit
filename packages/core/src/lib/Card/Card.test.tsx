import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Card.stories';

const { Regular, RegularSelected, Disabled } = composeStories(stories);

const cardId = 'card-test-id';
const checkmarkId = 'check-test-id';
const descriptionId = 'desc-test-id';
const titleId = 'title-test-id';
const headerId = 'header-test-id';
test('Renders - Card Regular', () => {
    render(<Regular />);
    const desc = Regular?.args?.description;
    const text = Regular?.args?.title;
    expect(screen.getByTestId(cardId)).not.toBeNull();
    expect(screen.getByTestId(titleId).textContent).toBe(text);
    expect(screen.getByTestId(descriptionId).textContent).toBe(desc);
    expect(screen.queryByTestId(checkmarkId)).toBeNull();
});

test('Renders - Card Selected', () => {
    render(<RegularSelected />);
    const text = RegularSelected?.args?.title;
    const desc = RegularSelected?.args?.description;
    expect(screen.getByTestId(cardId)).not.toBeNull();
    expect(screen.getByTestId(titleId).textContent).toBe(text);
    expect(screen.getByTestId(descriptionId).textContent).toBe(desc);
    expect(screen.getByTestId(headerId)).not.toBeNull();
});

test('Renders - Card Disabled', () => {
    render(<Disabled />);
    const desc = Disabled?.args?.description;
    const text = Disabled?.args?.title;
    expect(screen.getByTestId(cardId)).not.toBeNull();
    expect(screen.getByTestId(titleId).textContent).toBe(text);
    expect(screen.queryByTestId(descriptionId)?.textContent).toBe(desc);
    expect(screen.getByTestId(headerId)).not.toBeNull();
});
