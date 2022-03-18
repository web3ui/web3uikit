import * as React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Loading.stories';
import { render, screen } from '@testing-library/react';

const {
    Loader,
    LoaderWithText,
    LoaderWithCustomColor,
    LoaderWithCustomSize,
    WaveLoader,
} = composeStories(stories);

describe('Spinner - DefaultSpinner', () => {
    it('Should render', () => {
        render(<Loader />);
        const element = screen.getAllByRole('spinner');
        expect(element).toBeDefined();
    });
});

describe('Spinner - Customized Spinner Text', () => {
    const text = LoaderWithText?.args?.text;
    it('Should render', () => {
        render(<LoaderWithText />);
        const element = screen.getAllByRole('spinner');
        expect(element).toBeDefined();
    });

    it('Should render different text', () => {
        render(<LoaderWithText />);
        const element = screen.getByText(`${text}`);
        expect(element).toBeDefined();
    });
});

describe('Spinner - Customized colors spinner', () => {
    it('Should render', () => {
        render(<LoaderWithCustomColor />);
        const element = screen.getAllByRole('spinner');
        expect(element).toBeDefined();
    });
});

describe('Spinner - LoaderWithCustomSize', () => {
    it('Should render', () => {
        render(<LoaderWithCustomSize />);
        const element = screen.getAllByRole('spinner');
        expect(element).toBeDefined();
    });
});

describe('WaveLoader - Wave Loader', () => {
    it('Should render', () => {
        render(<WaveLoader />);
        const element = screen.getAllByRole('spinner');
        expect(element).toBeDefined();
    });
});
