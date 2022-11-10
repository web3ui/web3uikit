import { composeStories } from '@storybook/testing-react';
import { render, within } from '@testing-library/react';
import * as stories from './PlanCard.stories';
import { test, expect, describe } from 'vitest';

const { PlanCardStory, CurrentPlanStory } = composeStories(stories);

describe('PlanCard', () => {
    test('should render the render', () => {
        const { container } = render(<PlanCardStory />);
        expect(container).toBeDefined();
    });
    test('should render plan description', () => {
        const { getByText } = render(<PlanCardStory />);
        PlanCardStory.args?.description?.forEach((feature) => {
            expect(getByText(feature, { exact: false })).toBeDefined();
        });
    });
    test('should render description title', () => {
        const { getByText } = render(<PlanCardStory />);
        expect(
            within(
                PlanCardStory.args?.descriptionTitle as unknown as HTMLElement,
            ),
        ).toBeDefined();
    });
    test('should render footer', () => {
        render(<PlanCardStory />);
        if (PlanCardStory?.args?.footer) {
            expect(
                within(PlanCardStory?.args?.footer as unknown as HTMLElement),
            ).toBeDefined();
        }
    });
    test('should render title', () => {
        render(<PlanCardStory />);
        if (PlanCardStory?.args?.title) {
            expect(
                within(PlanCardStory?.args?.title as unknown as HTMLElement),
            ).toBeDefined();
        }
    });
    test('should render your plan', () => {
        const { getByText } = render(<CurrentPlanStory />);
        expect(getByText('Your Plan', { exact: false })).toBeDefined();
    });
});
