import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as stories from './VerifyCode.stories';
import { test, expect, describe, vi } from 'vitest';

const { Default } = composeStories(stories);

const testOnComplete = vi.fn();

describe('Test VerifyCode component', () => {
    test('renders the component', () => {
        render(<Default />);
        const element = screen.getByTestId('test-verify-code');
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
