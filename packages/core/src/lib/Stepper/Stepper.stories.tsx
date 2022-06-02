import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stepper } from '.';
import { Button } from '../Button';
import { testStepData, noNavTestStepData } from './testStepData';
import { Avatar } from '../Avatar';

const parentWrapper = {
    height: '1px',
    minHeight: '450px',
};

export default {
    title: '3.Layout/Stepper',
    component: Stepper,
    argTypes: { onComplete: { action: 'completed' } },
    decorators: [(storyFn) => <div style={parentWrapper}>{storyFn()}</div>],
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
    <Stepper {...args} />
);

const testHelpContent = () => (
    <p>
        Are you having any trouble?
        <Button
            aria-haspopup="true"
            aria-label="open chat window"
            onClick={() => console.log('help clicked')}
            type="button"
            theme="outline"
            size="small"
        />
    </p>
);

export const Demo = Template.bind({});
Demo.args = {
    step: 1,
    stepData: testStepData,
    onComplete: () => alert('done'),
};

export const PreLoadStep0 = Template.bind({});
PreLoadStep0.args = { stepData: testStepData };

export const StepsWithFooter = Template.bind({});
StepsWithFooter.args = {
    step: 1,
    stepData: testStepData,
    helperContent: testHelpContent(),
};

export const StepsWithoutNav = Template.bind({});
StepsWithoutNav.args = {
    step: 1,
    stepData: noNavTestStepData,
    hasNavButtons: false,
};

export const CustomCompleteString = Template.bind({});
CustomCompleteString.args = {
    step: 5,
    stepData: testStepData,
    completeTitle: 'Custom Complete Title',
    completeMessage: 'and you can customize this message too',
};

export const CustomCompleteDom = Template.bind({});
CustomCompleteDom.args = {
    step: 5,
    stepData: testStepData,
    completeTitle: 'Custom Complete Title',
    completeMessage: <Avatar theme={'image'} />,
};

export const SmallerStepperCount = Template.bind({});
SmallerStepperCount.args = {
    step: 1,
    stepData: noNavTestStepData,
    hasNavButtons: false,
    headerWidth: 400,
};
