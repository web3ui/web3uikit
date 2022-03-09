import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';
import { Icon, iconTypes } from '../Icon';
import color from '../../styles/colors';

export default {
    title: '2.Forms/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const onTestOptionChange = (e: any) => {
    console.log(e);
};

const smallOptionsList = [
    {
        label: 'Discord',
        id: 'discord',
        prefix: <Icon svg={iconTypes.discord} fill={color.grey} />,
    },
    {
        label: 'Emoji',
        id: 'emoji',
        prefix: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    },
    {
        label: 'TXT',
        id: 'txt',
        prefix: 'TXT',
    },
    {
        label: 'dApp',
        id: 'dapp',
        prefix: <Icon svg={iconTypes.server} fill={color.grey} />,
    },
];

const optionsList = [
    {
        label: 'Discord',
        id: 'discord',
        prefix: <Icon svg={iconTypes.discord} fill={color.grey} />,
    },
    {
        label: 'Emoji',
        id: 'emoji',
        prefix: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    },
    {
        label: 'TXT',
        id: 'txt',
        prefix: 'TXT',
    },
    {
        label: 'dApp',
        id: 'dapp',
        prefix: <Icon svg={iconTypes.server} fill={color.grey} />,
    },
    {
        label: 'Discord',
        id: 'discord',
        prefix: <Icon svg={iconTypes.discord} fill={color.grey} />,
    },
    {
        label: 'Discord',
        id: 'discord',
        prefix: <Icon svg={iconTypes.discord} fill={color.grey} />,
    },
    {
        label: 'Discord',
        id: 'discord',
        prefix: <Icon svg={iconTypes.discord} fill={color.grey} />,
    },
    {
        label: 'Discord',
        id: 'discord',
        prefix: <Icon svg={iconTypes.discord} fill={color.grey} />,
    },
    {
        label: 'Discord',
        id: 'discord',
        prefix: <Icon svg={iconTypes.discord} fill={color.grey} />,
    },
];

export const Default = Template.bind({});
Default.args = {
    options: smallOptionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    defaultOptionIndex: 0,
};

export const NoDefaultIndexOption = Template.bind({});
NoDefaultIndexOption.args = {
    options: optionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
};

export const Error = Template.bind({});
Error.args = {
    options: optionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    state: 'error',
    defaultOptionIndex: 0,
};

export const ErrorWithMessage = Template.bind({});
ErrorWithMessage.args = {
    options: optionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    state: 'error',
    defaultOptionIndex: 0,
    errorMessage: 'Oops...error',
};

export const Confirmed = Template.bind({});
Confirmed.args = {
    options: optionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    state: 'confirmed',
    defaultOptionIndex: 0,
};

export const PrefixText = Template.bind({});
PrefixText.args = {
    options: [
        {
            label: 'All',
            id: 'All',
        },
        {
            label: 'Active',
            id: 'Active',
        },
    ],
    onChange: onTestOptionChange,
    prefixText: 'Server:',
    defaultOptionIndex: 0,
};

export const Disabled = Template.bind({});
Disabled.args = {
    options: optionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    disabled: true,
    defaultOptionIndex: 0,
};

export const Nodata = Template.bind({});
Nodata.args = {
    onChange: onTestOptionChange,
    label: 'Label Text',
    defaultOptionIndex: 0,
};

export const ControlledValue = Template.bind({});
ControlledValue.args = {
    options: smallOptionsList,
    onChange: onTestOptionChange,
    label: 'Label Text',
    value: 'txt',
};

export const HTML5Select = Template.bind({});
HTML5Select.args = {
    label: 'Good old HTML5',
    onChangeTraditional: onTestOptionChange,
    options: smallOptionsList,
    traditionalHTML5: true,
    validation: { required: true },
    value: 'txt',
};
