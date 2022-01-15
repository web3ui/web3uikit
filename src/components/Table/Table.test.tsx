import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Table.stories';

const { DefaultTable, NoPagination, Scrolling, NoData } =
    composeStories(stories);

let container: HTMLDivElement;
const testTableParent = 'test-table-parent';

describe('Radios - RadioGroup', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<DefaultTable />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element: HTMLFieldSetElement | null = container.querySelector(
            `[data-testid="${testTableParent}"]`,
        );
        expect(element).not.toBeNull();
    });

    it('renders the component', () => {
        const element: HTMLFieldSetElement | null = container.querySelector(
            `[data-testid="test-header" ]`,
        );
        expect(element).toHaveLength(5);
    });
});

