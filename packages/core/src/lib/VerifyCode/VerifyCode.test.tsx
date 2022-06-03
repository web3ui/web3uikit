import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as stories from './VerifyCode.stories';


const { Default } = composeStories(stories);

const testOnComplete = jest.fn();

describe('Test VerifyCode component', () => {
    test('renders the component', () => {
        render(<Default />);
        const element = screen.getByTestId('test-VerifyCode');
        expect(element).not.toBeNull();
    });
    test('triggers the onComplete function', () => {
        render(<Default onCompleted={testOnComplete} />);
        for (let i = 0; i < 5; i++) {
            const element = screen.getByTestId(`test-verify-code-input-${i}`);
            fireEvent.change(element, { target: { value: '1' } });
        }
        expect(testOnComplete).toHaveBeenCalledTimes(1);
    });
});
