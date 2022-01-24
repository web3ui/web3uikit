import React from 'react';
import ReactDOM from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Form.stories';

const { DemoForm } = composeStories(stories);
let container: HTMLDivElement;
const formTestID = 'test-form';
const FormTestTitleID = 'test-form-title';

describe('Form', () => {
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
    it('renders the title', () => {
        const element: HTMLHeadingElement | null = container.querySelector(
            `[data-testid="${FormTestTitleID}"]`,
        );
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testTitle);
    });
    it('renders the correct amount of inputs from the data', () => {
        const elements = container.querySelectorAll(
            `[data-testclass="form-ele"]`,
        );
        expect(elements.length).toBe(testData?.length);
    });
});
