import React from 'react';
import ReactDOM from 'react-dom';
import { IconProps, Icon, iconTypes } from '.';
import color from '../../styles/colors';

export const iconTestId = 'test-icon';

const defaultState: IconProps = {
    fill: color.black,
    size: 24,
    svg: iconTypes.mail,
};

/**
 * helpers
 */
const setState = (props: Partial<IconProps>): IconProps => {
    return { ...defaultState, ...props };
};

const renderComponent = (props: Partial<IconProps>) => {
    return <Icon {...setState(props)} />;
};

describe('Icon', () => {
    let container: HTMLDivElement;
    const testIcon = 'mail icon';
    const testSize = defaultState.size;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('renders the component', () => {
        ReactDOM.render(renderComponent({}), container);
        const icon = container.querySelector(`[data-testid="${iconTestId}"]`);
        expect(icon).not.toBeNull();
    });
    it('renders correct SVG', () => {
        ReactDOM.render(renderComponent({ svg: iconTypes.mail }), container);
        const icon = container.querySelector(`[data-testid="${iconTestId}"]`);
        expect(icon?.textContent).toBe(testIcon);
    });
    xit('renders the correct size', () => {
        ReactDOM.render(renderComponent({ size: testSize }), container);
        const icon = container.querySelector(`[data-testid="${iconTestId}"]`);
        expect(icon?.clientHeight).toBe(testSize);
        expect(icon?.clientWidth).toBe(testSize);
    });
    it('renders aria hidden attribute', () => {
        ReactDOM.render(renderComponent({ size: testSize }), container);
        const icon = container.querySelector(`[data-testid="${iconTestId}"]`);
        expect(icon?.getAttribute('aria-hidden')).toBe('true');
    });
});
