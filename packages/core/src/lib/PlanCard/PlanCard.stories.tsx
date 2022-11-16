import { ComponentStory, ComponentMeta } from '@storybook/react';
import data from './mock';
import PlanCard from './PlanCard';
import { color } from '@web3uikit/styles';
import { Checkmark } from '@web3uikit/icons';
import { Button } from '../Button';
import { Typography } from '../Typography';

export default {
    title: '4.UI/PlanCard',
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
        'Unlimited ideas',
        'Unlimited Plugins',
        'Community Support',
        'IPFS Gateway',
        'Unlimited ideas',
        'Unlimited Plugins',
        'Community Support',
        'IPFS Gateway',
    ],
    footer: <Button text="Talk to Sales" theme="outline" isFullWidth={true} />,
    subTitle: (
        <Typography variant="h4" color={color.blue70} weight="600">
            Enterprise
        </Typography>
    ),
    descriptionTitle: (
        <Typography color={color.blue70} weight="550" variant="caption14">
            Everything in pro, plus
        </Typography>
    ),
    horizontalLine: true,
    borderColor: color.navy20,
    backgroundColor: 'transparent',
    icon: <Checkmark fill={color.mint40} />,
    scrollbarWidth: '2px',
    scrollbarBackground: color.blue20,
    scrollbarTrackBackground: color.aero10,
};
