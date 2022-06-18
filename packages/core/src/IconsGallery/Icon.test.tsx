import { render, screen } from '@testing-library/react';
import * as Icons from '@web3uikit/icons';

const testIconId = 'test-icon';

Object.values(Icons).forEach((Icon, index) => {
    test(`Renders - ${Icon.name} Icon`, () => {
        render(<Icon fill="#000" />);
        const element = screen.getByTestId(testIconId);
        expect(element).not.toBeNull();
        expect(element.getAttribute('aria-hidden')).toBe('true');
        expect(element.getAttribute('height')).toBe('1em');
        expect(element.getAttribute('width')).toBe('1em');
    });
});
