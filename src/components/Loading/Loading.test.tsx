import * as React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Loading.stories';
import { render, screen } from '@testing-library/react';

const { Spinner, CustomSizeSpinner, CustomRingColors } =
    composeStories(stories);

describe('Spinner - DefaultSpinner', () => {
    it('Should render', () => {
        render(<Spinner />);
        const element = screen.getAllByRole('spinner');
        expect(element).toBeDefined();
    });
});

describe('Spinner - Customized spinner', () => {
    const size = CustomSizeSpinner?.args?.size;
    it('Should render', () => {
        render(<CustomSizeSpinner />);
        const element = screen.getAllByRole('spinner');
        expect(element).toBeDefined();
    });
    it('Should render different size', () => {
        render(<CustomSizeSpinner />);
        const element = screen.getByTestId(`${size}`);
        expect(element).toBeDefined();
    });
});

describe('Spinner - Customized colors spinner', () => {
    it('Should render', () => {
        render(<CustomRingColors />);
        const element = screen.getAllByRole('spinner');
        expect(element).toBeDefined();
    });
});
