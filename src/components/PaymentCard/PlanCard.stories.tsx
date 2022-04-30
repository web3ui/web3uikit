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
    <PlanCard {...args} />
);

export const PlanCardStory = Template.bind({});
PlanCardStory.args = data.success;
