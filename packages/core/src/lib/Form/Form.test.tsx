import { configure, render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Form.stories';
import { test, expect, describe } from 'vitest';

const { DemoForm } = composeStories(stories);
const formTestID = 'test-form';
const FormTestTitleID = 'test-form-title';

describe('Form', () => {
    const testTitle = DemoForm.args?.title;
    const testData = DemoForm.args?.data;

    it('renders the component', () => {
        render(<DemoForm />);
        const element: HTMLFormElement = screen.getByTestId(formTestID);
        expect(element).not.toBeNull();
    });
    it('renders the title', () => {
        render(<DemoForm />);
        const element: HTMLHeadingElement = screen.getByTestId(FormTestTitleID);
        expect(element).not.toBeNull();
        expect(element?.textContent).toBe(testTitle);
    });
    it('renders the correct amount of inputs from the data', () => {
        render(<DemoForm />);
        configure({ testIdAttribute: 'data-testclass' });
        const elements = screen.getAllByTestId('form-ele');
        expect(elements.length).toBe(testData?.length);
    });
});
