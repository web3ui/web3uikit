import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { Button } from '../Button';

const testTitle = 'never test a Hero';
const testBgURL = 'moralis.io/img/cool.jpg';
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
        const title = screen.getByTestId('test-hero_title');
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
        const title = screen.getByTestId('test-hero_title');
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
        const subTitle = screen.getByTestId('test-hero_text');
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
