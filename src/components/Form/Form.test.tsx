import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Form.stories';
// import { fireEvent } from "@testing-library/react";

const { DemoForm } = composeStories(stories);
let container: HTMLDivElement;
const formTestID = 'test-form';

describe('Checkbox - Box', () => {
    const testTitle = DemoForm.args?.title;
    const testData = DemoForm.args?.data;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<DemoForm />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element: HTMLFormElement | null = container.querySelector(
            `[data-testid="${formTestID}"]`,
        );
        expect(element).not.toBeNull();
    });
});
