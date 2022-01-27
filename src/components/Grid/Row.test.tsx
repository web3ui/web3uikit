import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Row.stories';
import React from 'react';

const {
    RowComponent,
    CustomBreakpoints,
    JustifyContent,
    AlignStyles,
    OrderedColumns,
} = composeStories(stories);

let container: HTMLDivElement;

describe('Default Row', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<RowComponent />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element: HTMLDivElement | null =
            container.querySelector(`[data-testid="row"]`);
        expect(element).not.toBeNull();
    });
    it('renders the Correct Styles', () => {
        const element: HTMLDivElement | null =
            container.querySelector(`[data-testid="row"]`);
        const style = element && getComputedStyle(element);
        expect(style?.alignItems).toEqual('center');
        expect(style?.justifyContent).toEqual('center');
    });
    it('renders all Roles', () => {
        const element = container.querySelectorAll(`[role="col"]`);
        const cols = (RowComponent?.args?.children as any).props?.children;
        expect(cols.length).toEqual(element?.length);
    });
});

describe('Custom Breakpoints', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<CustomBreakpoints />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element: HTMLDivElement | null =
            container.querySelector(`[data-testid="row"]`);
        expect(element).not.toBeNull();
    });
    it('renders the Correct Styles', () => {
        const element: HTMLDivElement | null =
            container.querySelector(`[data-testid="row"]`);
        const style = element && getComputedStyle(element);
        expect(style?.alignItems).toEqual('center');
        expect(style?.justifyContent).toEqual('center');
    });
    it('renders all Roles', () => {
        const element = container.querySelectorAll(`[role="col"]`);
        const cols = (CustomBreakpoints?.args?.children as any).props.children;
        expect(cols.length).toEqual(element?.length);
    });
});

describe('Justify Content', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<JustifyContent />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element: HTMLDivElement | null =
            container.querySelector(`[data-testid="row"]`);
        expect(element).not.toBeNull();
    });
});

describe('Align Styles', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<AlignStyles />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element: HTMLDivElement | null =
            container.querySelector(`[data-testid="row"]`);
        expect(element).not.toBeNull();
    });
});

describe('Ordered Columns', () => {
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<OrderedColumns />, container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const element: HTMLDivElement | null =
            container.querySelector(`[data-testid="row"]`);
        expect(element).not.toBeNull();
    });
    it('renders all Roles', () => {
        const element = container.querySelectorAll(`[role="col"]`);
        const cols = (OrderedColumns?.args?.children as any)?.props?.children;
        expect(cols.length).toEqual(element.length);
    });
});
