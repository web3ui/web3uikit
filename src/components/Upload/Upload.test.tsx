// importing boilerplate stuff
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render, screen, cleanup } from '@testing-library/react';
import * as stories from './Upload.stories';

// importing my stories to test
const { TextOnly, WithIcon } = composeStories(stories);

// setting my test IDs to match my tsx
const uploadComp = 'test-upload';
const inputTestId = 'test-upload-input';
const iconTestId = 'test-upload-icon';

// Test Story 1
describe('Render TextOnly', () => {
    beforeEach(() => {
        render(<TextOnly />);
    });
    afterEach(() => cleanup());

    it('render the component', () => {
        const component = screen.getByTestId(uploadComp);
        expect(component).not.toBeNull();
    });
    it('render input component', () => {
        const input = screen.getByTestId(inputTestId);
        expect(input).not.toBeNull();
    });
});

// Test Story 2
describe('Render withIcon', () => {
    beforeEach(() => {
        render(<WithIcon />);
    });
    afterEach(() => cleanup());

    it('render the component', () => {
        const component = screen.getByTestId(uploadComp);
        expect(component).not.toBeNull();
    });
    it('render input component', () => {
        const input = screen.getByTestId(inputTestId);
        expect(input).not.toBeNull();
    });
    it('should  render icon', () => {
        const icon = screen.getByTestId(iconTestId);
        expect(icon).not.toBeNull();
    });
});
