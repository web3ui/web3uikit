import React from 'react';
import { render } from 'react-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Tabs.stories';

const { BasicTabs } = composeStories(stories);

describe('Render', () => {
    const container = document.createElement('div');
    render(<BasicTabs/>, container);

    it('shoud render one container', () => {
        const element = container.querySelector('[data-testing=tabs-container]');

        expect(element).not.toBeNull();
    })
    it('shoul render one tablist', () => {
        const element = container.querySelector('[role=tablist]');

        expect(element).not.toBeNull();
    })
    it('shoul render tree tabs', () => {
        const elements = container.querySelectorAll('[role=tab]');

        elements.forEach((el) => expect(el).not.toBeNull());
    })
    it('shoul render tree panels', () => {
        const elements = container.querySelectorAll('[role=tabpanel]');

        elements.forEach((el) => expect(el).not.toBeNull());
    })
})

describe('Styles', () => {});
describe('Accessibility', () => {});