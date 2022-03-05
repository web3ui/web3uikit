import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import { fireEvent, waitFor, screen } from '@testing-library/react';
import * as stories from './PopoverDropdown.stories';
import 'jest-styled-components';

const { PopoverSelection } = composeStories(stories);

describe('Default', () => {
    let container: HTMLDivElement;
    const dropdownParentId = 'dropdown-parent-test-id';
    const dropdownElementId = 'element-test-id';

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<PopoverSelection position={'bottom'} />, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('should render the parent', () => {
        const element = container.querySelector(
            `[data-testid="${dropdownParentId}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('should display the menu on hover', async () => {
        fireEvent.mouseOver(screen.getByTestId(dropdownParentId));

        await waitFor(() => screen.getByTestId(dropdownParentId));
        expect(
            container.querySelector(`[data-testid="${dropdownElementId}"]`)
                ?.innerHTML,
        ).not.toBeNull();
    });
});
