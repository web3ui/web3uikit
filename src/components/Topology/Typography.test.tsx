import * as React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Typogrpahy.stories';
import { render, screen } from '@testing-library/react';
import color from '../../styles/colors';

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key: string, value: any) => {
        if (typeof value === 'object' && value !== null && key) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};

const { BaseFonts, ColoredText, FontWeights, FontStyles, BlockText } =
    composeStories(stories);

describe('Typography -- baseFonts', () => {
    it('renders correct h1 tag', () => {
        render(<BaseFonts />);
        const element = screen.getAllByRole('h1');
        expect(element).toBeDefined();
    });
    it('renders correct h2 tag', () => {
        render(<BaseFonts />);
        const element = screen.getAllByRole('h2');
        expect(element).toBeDefined();
    });
    it('renders correct h3 tag', () => {
        render(<BaseFonts />);
        const element = screen.getAllByRole('h3');
        expect(element).toBeDefined();
    });
    it('renders correct h4 tag', () => {
        render(<BaseFonts />);
        const element = screen.getAllByRole('h4');
        expect(element).toBeDefined();
    });
    it('renders correct h5 tag', () => {
        render(<BaseFonts />);
        const element = screen.getAllByRole('h5');
        expect(element).toBeDefined();
    });
    it('renders correct text tag', () => {
        render(<BaseFonts />);
        const element = screen.getAllByRole('text');
        expect(element).toBeDefined();
    });
});

describe('Typography -- Colored Text', () => {
    it('renders correct h1 tag', () => {
        render(<ColoredText />);
        const element = screen.getAllByRole('h1');
        const string = JSON.stringify(element, getCircularReplacer());
        expect(string.includes(color.blue)).toBeTruthy();
        expect(element).toBeDefined();
    });
    it('renders correct h2 tag', () => {
        render(<ColoredText />);
        const element = screen.getAllByRole('h2');
        const string = JSON.stringify(element, getCircularReplacer());
        expect(string.includes(color.green)).toBeTruthy();
        expect(element).toBeDefined();
    });
    it('renders correct h3 tag', () => {
        render(<ColoredText />);
        const element = screen.getAllByRole('h3');
        const string = JSON.stringify(element, getCircularReplacer());
        expect(string.includes(color.yellow)).toBeTruthy();
        expect(element).toBeDefined();
    });
    it('renders correct h4 tag', () => {
        render(<ColoredText />);
        const element = screen.getAllByRole('h4');
        const string = JSON.stringify(element, getCircularReplacer());
        expect(string.includes(color.red)).toBeTruthy();
        expect(element).toBeDefined();
    });
    it('renders correct h5 tag', () => {
        render(<ColoredText />);
        const element = screen.getAllByRole('h5');
        const string = JSON.stringify(element, getCircularReplacer());
        expect(string.includes(color.grey)).toBeTruthy();
        expect(element).toBeDefined();
    });
});

describe('Typography -- Font Weights', () => {
    it('renders correct number of text elements', () => {
        render(<FontWeights />);
        const element = screen.getAllByRole('text');
        expect(element.length).toEqual(7);
    });
    it('renders correct font weights', () => {
        render(<FontWeights />);
        const element = screen.getAllByRole('text');
        const string = JSON.stringify(element, getCircularReplacer());
        expect(string.includes('bolder')).toBeTruthy();
        expect(string.includes('bold')).toBeTruthy();
        expect(string.includes('normal')).toBeTruthy();
        expect(string.includes('inherit')).toBeTruthy();
        expect(string.includes('lighter')).toBeTruthy();
        expect(string.includes('200')).toBeTruthy();
    });
});

describe('Typography -- Font Styles', () => {
    it('renders correct number of Font Styles', () => {
        render(<FontStyles />);
        const element = screen.getAllByRole('text');
        expect(element.length).toEqual(5);
    });
    it('renders correct Font Styles', () => {
        render(<FontStyles />);
        const element = screen.getAllByRole('text');
        const string = JSON.stringify(element, getCircularReplacer());
        expect(string.includes('normal')).toBeTruthy();
        expect(string.includes('italic')).toBeTruthy();
        expect(string.includes('initial')).toBeTruthy();
        expect(string.includes('inherit')).toBeTruthy();
    });
});

describe('Typography -- Block', () => {
    it('renders Block', () => {
        render(<BlockText />);
        const element = screen.getAllByRole('block');
        expect(element).toBeDefined();
    });
    it('Should Render other Typography within it', () => {
        render(<BlockText />);
        const element = screen.getAllByRole('h4');
        expect(element).toBeDefined();
    });
    it('Should Render Normal Html', () => {
        render(<BlockText />);
        const elements = screen.getByText(
            'Every ordinary html text attribute is automatically styled to our default styles',
        );
        console.log(elements);
        expect(elements).toBeDefined();
    });
});
