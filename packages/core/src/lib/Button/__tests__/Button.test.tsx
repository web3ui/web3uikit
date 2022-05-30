import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import * as stories from '../Button.stories';

const { Primary } = composeStories(stories);

describe('Primary Button', () => {
  it('should show button', () => {
    render(<Primary />);
    const element = screen.getByText('Primary');
    expect(element).toBeDefined();
  });
});
