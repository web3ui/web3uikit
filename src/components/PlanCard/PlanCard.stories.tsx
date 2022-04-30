import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import data from './mock';
import PlanCard from './PlanCard';

export default {
    title: 'Ui/PlanCard',
    component: PlanCard,
    argTypes: {
        onChange: {
            action: 'onChange value returned',
        },
    },
} as ComponentMeta<typeof PlanCard>;

const Template: ComponentStory<typeof PlanCard> = (args) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PlanCard {...args} />
    </div>
);

export const PlanCardStory = Template.bind({});
PlanCardStory.args = data.success;

export const CurrentPlanStory = Template.bind({});
CurrentPlanStory.args = { ...data.success, isCurrentPlan: true };
