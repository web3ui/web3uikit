import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stepper } from '.';
import { Button } from '../Button';
import { testStepData, noNavTestStepData } from './testStepData';

const parentWrapper = {
    height: '1px',
    minHeight: '450px',
};

export default {
    title: 'ui/Stepper',
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
Demo.args = { step: 1, stepData: testStepData };

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
