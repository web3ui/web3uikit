import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { fireEvent, render, screen } from '@testing-library/react';
import * as stories from './LinkTo.stories';
import 'jest-styled-components';
import color from '../../styles/colors';
import rgbToHex from '../../utils/rgbToHex';

const {
    ExternalLink,
    ExternalLinkIconAfter,
    InternalLink,
    LinkInText,
    LinkWithOutText,
    MailToLink,
    MailToLinkIconAfter,
} = composeStories(stories);

const testIcon = 'test-icon';
const testId = 'test-link-to';
const testFlexId = 'test-link-flex';
const testTextWrap = 'test-link-text';

test('Renders ExternalLink', () => {
    const testAddress = ExternalLink?.args?.address;
    const testText = ExternalLink?.args?.text;

    render(<ExternalLink />);

    const link = screen.getByTestId(testId);
    expect(link).not.toBeNull();

    const textLink = screen.getByTestId(testTextWrap);
    expect(textLink.textContent).toBe(testText);

    const anchorLink = screen.getByTestId(testId);
    expect(anchorLink.getAttribute('href')).toBe(testAddress);

    const targetLink = screen.getByTestId(testId);
    expect(targetLink.getAttribute('target')).toBe('_blank');

    const iconSVG = screen.getByTestId(testIcon);
    expect(iconSVG).not.toBeNull();
    expect(iconSVG.textContent).toBe('link icon');

    const colorLink = screen.getByTestId(testId);
    const styles = colorLink && getComputedStyle(colorLink);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.blue);

    const inlineLink = screen.getByTestId(testId);
    const inlineLinkStyles = inlineLink && getComputedStyle(inlineLink);
    expect(inlineLinkStyles?.display).toBe('inline-block');

    const flexSpan = screen.getByTestId(testFlexId);
    const flexSpanStyles = flexSpan && getComputedStyle(flexSpan);
    expect(flexSpanStyles?.flexDirection).toBe('row');
});

test('Renders External Icon After', () => {
    const testAddress = ExternalLinkIconAfter?.args?.address;
    const testText = ExternalLinkIconAfter?.args?.text;

    render(<ExternalLinkIconAfter />);

    const link = screen.getByTestId(testId);
    expect(link).not.toBeNull();

    const textLink = screen.getByTestId(testTextWrap);
    expect(textLink.textContent).toBe(testText);

    const anchorLink = screen.getByTestId(testId);
    expect(anchorLink.getAttribute('href')).toBe(testAddress);

    const targetLink = screen.getByTestId(testId);
    expect(targetLink.getAttribute('target')).toBe('_blank');

    const iconSVG = screen.getByTestId(testIcon);
    expect(iconSVG).not.toBeNull();
    expect(iconSVG.textContent).toBe('link icon');

    const colorLink = screen.getByTestId(testId);
    const styles = colorLink && getComputedStyle(colorLink);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.blue);

    const inlineLink = screen.getByTestId(testId);
    const inlineLinkStyles = inlineLink && getComputedStyle(inlineLink);
    expect(inlineLinkStyles?.display).toBe('inline-block');

    const flexSpan = screen.getByTestId(testFlexId);
    const flexSpanStyles = flexSpan && getComputedStyle(flexSpan);
    expect(flexSpanStyles?.flexDirection).toBe('row-reverse');
});

test('Renders Email', () => {
    const testAddress = `mailto:${MailToLink?.args?.address}`;
    const testText = MailToLink?.args?.text;

    render(<MailToLink />);

    const link = screen.getByTestId(testId);
    expect(link).not.toBeNull();

    const textLink = screen.getByTestId(testTextWrap);
    expect(textLink.textContent).toBe(testText);

    const anchorLink = screen.getByTestId(testId);
    expect(anchorLink.getAttribute('href')).toBe(testAddress);

    const targetLink = screen.getByTestId(testId);
    expect(targetLink.getAttribute('target')).toBe('_self');

    const iconSVG = screen.getByTestId(testIcon);
    expect(iconSVG).not.toBeNull();
    expect(iconSVG.textContent).toBe('mail icon');

    const colorLink = screen.getByTestId(testId);
    const styles = colorLink && getComputedStyle(colorLink);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.blue);

    const inlineLink = screen.getByTestId(testId);
    const inlineLinkStyles = inlineLink && getComputedStyle(inlineLink);
    expect(inlineLinkStyles?.display).toBe('inline-block');

    const flexSpan = screen.getByTestId(testFlexId);
    const flexSpanStyles = flexSpan && getComputedStyle(flexSpan);
    expect(flexSpanStyles?.flexDirection).toBe('row');
});

test('Renders External Icon After', () => {
    const testAddress = `mailto:${MailToLinkIconAfter?.args?.address}`;
    const testText = MailToLinkIconAfter?.args?.text;

    render(<MailToLinkIconAfter />);

    const link = screen.getByTestId(testId);
    expect(link).not.toBeNull();

    const textLink = screen.getByTestId(testTextWrap);
    expect(textLink.textContent).toBe(testText);

    const anchorLink = screen.getByTestId(testId);
    expect(anchorLink.getAttribute('href')).toBe(testAddress);

    const targetLink = screen.getByTestId(testId);
    expect(targetLink.getAttribute('target')).toBe('_self');

    const iconSVG = screen.getByTestId(testIcon);
    expect(iconSVG).not.toBeNull();
    expect(iconSVG.textContent).toBe('mail icon');

    const colorLink = screen.getByTestId(testId);
    const styles = colorLink && getComputedStyle(colorLink);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.blue);

    const inlineLink = screen.getByTestId(testId);
    const inlineLinkStyles = inlineLink && getComputedStyle(inlineLink);
    expect(inlineLinkStyles?.display).toBe('inline-block');

    const flexSpan = screen.getByTestId(testFlexId);
    const flexSpanStyles = flexSpan && getComputedStyle(flexSpan);
    expect(flexSpanStyles?.flexDirection).toBe('row-reverse');
});

test('Renders No text set for link', () => {
    const testAddress = LinkWithOutText?.args?.address;

    render(<LinkWithOutText />);

    const link = screen.getByTestId(testId);
    expect(link).not.toBeNull();

    const textLink = screen.getByTestId(testTextWrap);
    expect(textLink.textContent).toBe(testAddress);

    const anchorLink = screen.getByTestId(testId);
    expect(anchorLink.getAttribute('href')).toBe(testAddress);

    const targetLink = screen.getByTestId(testId);
    expect(targetLink.getAttribute('target')).toBe('_blank');

    const iconSVG = screen.getByTestId(testIcon);
    expect(iconSVG).not.toBeNull();
    expect(iconSVG.textContent).toBe('link icon');

    const colorLink = screen.getByTestId(testId);
    const styles = colorLink && getComputedStyle(colorLink);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.blue);

    const inlineLink = screen.getByTestId(testId);
    const inlineLinkStyles = inlineLink && getComputedStyle(inlineLink);
    expect(inlineLinkStyles?.display).toBe('inline-block');

    const flexSpan = screen.getByTestId(testFlexId);
    const flexSpanStyles = flexSpan && getComputedStyle(flexSpan);
    expect(flexSpanStyles?.flexDirection).toBe('row');
});

test('Renders link In text', () => {
    const testAddress = LinkInText?.args?.address;
    const testText = LinkInText?.args?.text;

    render(<LinkInText />);

    const link = screen.getByTestId(testId);
    expect(link).not.toBeNull();

    const textLink = screen.getByTestId(testTextWrap);
    expect(textLink.textContent).toBe(testText);

    const anchorLink = screen.getByTestId(testId);
    expect(anchorLink.getAttribute('href')).toBe(testAddress);

    const targetLink = screen.getByTestId(testId);
    expect(targetLink.getAttribute('target')).toBe('_blank');

    const iconSVG = screen.getByTestId(testIcon);
    expect(iconSVG).not.toBeNull();
    expect(iconSVG.textContent).toBe('link icon');

    const colorLink = screen.getByTestId(testId);
    const styles = colorLink && getComputedStyle(colorLink);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.blue);

    const inlineLink = screen.getByTestId(testId);
    const inlineLinkStyles = inlineLink && getComputedStyle(inlineLink);
    expect(inlineLinkStyles?.display).toBe('inline-block');

    const flexSpan = screen.getByTestId(testFlexId);
    const flexSpanStyles = flexSpan && getComputedStyle(flexSpan);
    expect(flexSpanStyles?.flexDirection).toBe('row');
});

test('Renders - Internal Link', () => {
    const testAddress = InternalLink?.args?.address;
    const testText = InternalLink?.args?.text;

    render(<InternalLink />);

    const link = screen.getByTestId(testId);
    expect(link).not.toBeNull();

    const textLink = screen.getByTestId(testTextWrap);
    expect(textLink.textContent).toBe(testText);

    const anchorLink = screen.getByTestId(testId);
    expect(anchorLink.getAttribute('href')).toBe(testAddress);

    const colorLink = screen.getByTestId(testId);
    const styles = colorLink && getComputedStyle(colorLink);
    const colorHex = styles && rgbToHex(styles.color).toUpperCase();
    expect(colorHex).toBe(color.blue);

    // after clicking on the link
    fireEvent.click(link);
    expect(screen.getByTestId(testId)).not.toBeNull();
    expect(screen.getByTestId(testTextWrap).textContent).toBe('Go Back');
});
