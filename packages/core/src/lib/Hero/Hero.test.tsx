import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { Button } from '../Button';
import { color, rgbToHex } from '@web3uikit/styles';
import { test, expect, describe } from 'vitest';

const testTitle = 'never test a Hero';
const testBgURL =
    'https://moralis.io/wp-content/uploads/2021/07/hero_new_img.svg';
const testSubTitle = 'sub titles add context';
const testHeight = '400px';
const testChildren = <Button text="click me" />;

describe('Hero - Demo', () => {
    it('renders the component', () => {
        render(<Hero title={testTitle} backgroundURL={testBgURL} />);
        const element = screen.getByTestId('test-hero');
        expect(element).not.toBeNull();
    });

    it('renders the title', () => {
        render(<Hero title={testTitle} backgroundURL={testBgURL} />);
        const title = screen.getByTestId('test-hero-title');
        expect(title).not.toBeNull();
        expect(title.textContent).toBe(testTitle);

        const styles = title && getComputedStyle(title);
        const colorAsHex = rgbToHex(styles?.color);
        expect(colorAsHex).toBe(color.blueGray50.toLocaleLowerCase());
    });

    it('renders the background image and color', () => {
        render(<Hero title={testTitle} backgroundURL={testBgURL} />);
        const element = screen.getByTestId('test-hero');
        expect(element).not.toBeNull();
        const styles = element && getComputedStyle(element);
        expect(styles?.backgroundImage).toBe(`url(${testBgURL})`);

        const colorAsHex = rgbToHex(styles?.backgroundColor);
        expect(colorAsHex).toBe(color.gray30.toLocaleLowerCase());
    });
});

describe('Hero - customized height', () => {
    it('renders the component', () => {
        render(
            <Hero
                title={testTitle}
                backgroundURL={testBgURL}
                height={testHeight}
            />,
        );
        const element = screen.getByTestId('test-hero');
        expect(element).not.toBeNull();
    });

    it('renders the title', () => {
        render(<Hero title={testTitle} backgroundURL={testBgURL} />);
        const title = screen.getByTestId('test-hero-title');
        expect(title).not.toBeNull();
        expect(title.textContent).toBe(testTitle);
    });

    it('renders the background image', () => {
        render(<Hero title={testTitle} backgroundURL={testBgURL} />);
        const element = screen.getByTestId('test-hero');
        expect(element).not.toBeNull();
        const styles = element && getComputedStyle(element);
        expect(styles?.backgroundImage).toBe(`url(${testBgURL})`);
    });

    it('renders the component with custom height', () => {
        render(
            <Hero
                title={testTitle}
                backgroundURL={testBgURL}
                height={testHeight}
            />,
        );
        const element = screen.getByTestId('test-hero');
        expect(element).not.toBeNull();
        const styles = element && getComputedStyle(element);
        expect(styles?.height).toBe(testHeight);
    });

    it('renders the component with sub title', () => {
        render(
            <Hero
                title={testTitle}
                backgroundURL={testBgURL}
                subTitle={testSubTitle}
            />,
        );
        const subTitle = screen.getByTestId('test-hero-text');
        expect(subTitle).not.toBeNull();
        expect(subTitle.textContent).toBe(testSubTitle);
    });

    it('renders the component with children', () => {
        render(
            <Hero
                title={testTitle}
                backgroundURL={testBgURL}
                children={testChildren}
            />,
        );
        const element = screen.getByTestId('test-button');
        expect(element).not.toBeNull();
    });
});
