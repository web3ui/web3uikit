import { ComponentStory, ComponentMeta } from '@storybook/react';
import data from './mock';
import PlanCard from './PlanCard';
import { color } from '@web3uikit/styles';
import { Checkmark } from '@web3uikit/icons';
import { Button } from '../Button';

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

export const PlanCardWithHorizonLine = Template.bind({});
PlanCardWithHorizonLine.args = {
    ...data.success,
    horizontalLine: true,
    borderColor: color.navy20,
    backgroundColor: 'transparent',
    isActive: false,
};

export const IconCustomPlanStory = Template.bind({});
IconCustomPlanStory.args = {
    description: [
        'Unlimited ideas',
        'Unlimited Plugins',
        'Community Support',
        'IPFS Gateway',
    ],
    footer: <Button text="Talk to Sales" theme="outline" isFullWidth={true} />,
    subTitle: 'Enterprise',
    descriptionTitle: 'Everything in Pro, plus',
    horizontalLine: true,
    borderColor: color.navy20,
    backgroundColor: 'transparent',
    icon: <Checkmark fill={color.mint40} />,
};
