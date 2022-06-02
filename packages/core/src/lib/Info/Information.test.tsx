import React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Information.stories';
import { render, screen } from '@testing-library/react';

const { Regular } = composeStories(stories);

const cardId = 'card-test-id';
const topicId = 'topic-test-id';
const infoId = 'info-test-id';

test('Renders - Information', () => {
    const topic = Regular?.args?.topic;
    const info = Regular?.args?.information;
    render(<Regular />);
    expect(screen.getByTestId(cardId)).not.toBeNull();
    expect(screen.getByTestId(topicId)?.textContent).toBe(topic);
    expect(screen.getByTestId(infoId)?.textContent).toBe(info);
});
