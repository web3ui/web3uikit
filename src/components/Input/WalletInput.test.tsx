/* eslint-disable new-cap */
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import 'jest-canvas-mock';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Input.stories';
import color from '../../styles/colors';
import React from 'react';
import rgbToHex from '../../utils/rgbToHex';
import WalletInputComponent from './WalletInput';
import { getEllipsisTxt } from '../../web3utils';

const { WalletInput } = composeStories(stories);

let container: HTMLDivElement;
const testValue = '';
const testPlaceholder = '';
const testInputId = 'test-input';
const testLabelId = 'test-label';
const testDivId = 'test-div';
const testEllipsisInputId = 'test-ellipsis-input';
const testBlockieId = 'test-blockie';
const testEvent = jest.fn();

test("should conditionally render 'empty / filled' className", () => {
    render(<WalletInputComponent />);
    const div: HTMLDivElement = screen.getByTestId(testDivId);
    const input: HTMLInputElement = screen.getByTestId(testInputId);

    expect(div.classList.contains('filled')).toBeFalsy;
    expect(div.classList.contains('empty')).toBeTruthy;

    input.focus();
    fireEvent.change(input, { target: { value: 'foo' } });

    expect(input.value).toBe('foo');
    expect(div.classList.contains('filled')).toBeTruthy;
    expect(div.classList.contains('empty')).toBeFalsy;
});

test('onChange event is returned, testEvent => event.target', () => {
    render(<WalletInputComponent onChange={(e) => testEvent(e.target)} />);
    const div: HTMLDivElement = screen.getByTestId(testDivId);
    const input: HTMLInputElement = screen.getByTestId(testInputId);

    expect(div.classList.contains('filled')).toBeFalsy;
    expect(div.classList.contains('empty')).toBeTruthy;

    input.focus();
    fireEvent.change(input, { target: { value: 'foo' } });

    expect(input.value).toBe('foo');
    expect(testEvent).toHaveBeenCalledWith(input);
});

describe('Input - Wallet', () => {
    const testLabel = WalletInput?.args?.label;
    const testName = WalletInput?.args?.name;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <WalletInput
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    testEvent(event.target)
                }
            />,
            container,
        );
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
    });

    it('renders the correct input text ellipsis', async () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        input &&
            fireEvent.change(input, {
                target: {
                    value: '0xc0ffee254729296a45a3885639AC7E10F9d54979',
                },
            });
        input && fireEvent.blur(input);

        const ellipsisInput: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testEllipsisInputId}"]`,
        );
        input &&
            expect(ellipsisInput?.textContent).toBe(
                getEllipsisTxt(input.value),
            );
    });

    it('renders blockie element', () => {
        const blockie: HTMLDivElement | null = container.querySelector(
            `[data-testid="${testBlockieId}"]`,
        );
        expect(blockie).toBeTruthy();
    });

    it('renders input with the value and placeholder passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.value).toBe(testValue);
        input && expect(input.placeholder).toBe(testPlaceholder);
    });

    it('renders the correct type of input', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.type).toBe('text');
    });

    it('renders input with the name passed', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testInputId}"]`,
        );
        expect(input).not.toBeNull();
        input && expect(input.name).toBe(testName);
    });

    it('renders input correct colors', () => {
        const input: HTMLInputElement | null = container.querySelector(
            `[data-testid="${testDivId}"]`,
        );
        const styles = input && getComputedStyle(input);
        expect(rgbToHex(styles?.outlineColor).toUpperCase()).toBe(
            color.greyLight,
        );
    });

    it('renders label text', () => {
        const label = container.querySelector(`[data-testid="${testLabelId}"]`);
        expect(label).not.toBeNull();
        expect(label?.textContent).toBe(testLabel);
    });
});
