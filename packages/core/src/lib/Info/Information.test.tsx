import { composeStories } from '@storybook/testing-react';
import * as stories from './Information.stories';
import { render, screen } from '@testing-library/react';
import { test, expect, describe } from 'vitest';

const { Regular } = composeStories(stories);

const cardId = 'test-info';
const topicId = 'test-info-topic';
const infoId = 'test-info-info';

test('Renders - Information', () => {
    const topic = Regular?.args?.topic;
    const info = Regular?.args?.information;
    render(<Regular />);
    expect(screen.getByTestId(cardId)).not.toBeNull();
    expect(screen.getByTestId(topicId)?.textContent).toBe(topic);
    expect(screen.getByTestId(infoId)?.textContent).toBe(info);
});
