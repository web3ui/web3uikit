import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Illustration } from '../Illustrations';
import { Typography } from '../Typography';
import Checkbox from './Checkbox';

export default {
    title: '2.Forms/Checkbox & Switch',
    component: Checkbox,
    parameters: {
        actions: {
            handles: ['onChange', 'changed', 'onBlur'],
        },
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    return <Checkbox {...args} />;
};

export const Box = Template.bind({});
Box.args = {
    label: 'Can I tick it?',
    name: 'Test checkbox input',
    id: 'test-checkbox',
};

export const BoxOnByDefault = Template.bind({});
BoxOnByDefault.args = {
    checked: true,
    label: 'Can I tick it?',
    name: 'Test checkbox input',
    id: 'test-checkbox',
};

export const BoxDisabled = Template.bind({});
BoxDisabled.args = {
    disabled: true,
    label: "You can't tick this",
    name: 'Test checkbox input',
    id: 'test-checkbox',
};

export const Switch = Template.bind({});
Switch.args = {
    label: 'Switch it up',
    name: 'Test switch input',
    id: 'test-switch',
    layout: 'switch',
};

export const SwitchOnByDefault = Template.bind({});
SwitchOnByDefault.args = {
    checked: true,
    label: 'Switch it up',
    name: 'Test switch input',
    id: 'test-switch',
    layout: 'switch',
};

export const SwitchDisabled = Template.bind({});
SwitchDisabled.args = {
    disabled: true,
    label: 'No switching for you',
    name: 'Test switch input',
    id: 'test-switch',
    layout: 'switch',
};

export const SwitchingText = Template.bind({});
SwitchingText.args = {
    label: 'Opt in here',
    labelWhenChecked: 'Ok you are in',
    checked: undefined,
    name: 'Test switch input',
    id: 'test-switch',
    layout: 'switch',
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
    label: (
        <div style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
            <Illustration logo={'marketplace'} height={48} width={34} />
            <div className="label-data">
                <Typography variant="body16" weight="550">
                    Contract Logs
                </Typography>
                <br />
                <Typography variant="caption14" weight="400">
                    To get all logs
                </Typography>
            </div>
        </div>
    ),
    name: 'Test checkbox input',
    id: 'test-checkbox',
    align: 'center',
};
