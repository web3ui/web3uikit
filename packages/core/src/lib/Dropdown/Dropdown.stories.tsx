import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';
import { Cog, Download, Server } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';
import { Avatar } from '../Avatar';

const parentWrapper = {
    height: '1px',
    minHeight: '400px',
};

export default {
    title: '5.Popup/Dropdown',
    component: Dropdown,
    argTypes: { onComplete: { action: 'completed' } },
    decorators: [(storyFn) => <div style={parentWrapper}>{storyFn()}</div>],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <div>
        <Dropdown {...args} />
    </div>
);

export const Default = Template.bind({});

Default.args = {
    options: [
        {
            label: 'Api Key',
            id: 'Api Key',
        },
        {
            label: 'Testnet',
            id: 'Testnet',
        },
        {
            label: 'Mainent',
            id: 'Mainent',
        },
    ],
    label: 'Server: ',
    icon: <Download fontSize={24} />,
    isDisabled: false,
};

export const ControlledState = Template.bind({});

ControlledState.args = {
    options: [
        {
            label: 'Api Key',
            id: 'Api Key',
        },
        {
            label: 'Testnet',
            id: 'Testnet',
        },
        {
            label: 'Mainent',
            id: 'Mainent',
        },
    ],
    label: 'Server: ',
    icon: <Download fontSize={24} />,
    selectedState: 0,
};

export const NonFixedLabel = Template.bind({});

NonFixedLabel.args = {
    options: [
        {
            label: 'Api Key',
            id: 'Api Key',
        },
        {
            label: 'Testnet',
            id: 'Testnet',
        },
        {
            label: 'Mainent',
            id: 'Mainent',
        },
    ],
    label: 'Server: ',
    isLabelFixed: false,
    icon: <Download fontSize={24} />,
};

export const Iconless = Template.bind({});

Iconless.args = {
    options: [
        {
            label: 'Api Key',
            id: 'Api Key',
        },
        {
            label: 'Testnet',
            id: 'Testnet',
        },
        {
            label: 'Mainent',
            id: 'Mainent',
        },
    ],
    label: 'Server: ',
};

export const DropdownWithPrefixItems = Template.bind({});

DropdownWithPrefixItems.args = {
    options: [
        {
            label: 'Api Key',
            id: 'Api Key',
            prefix: (
                <Avatar
                    borderRadius={7.5}
                    text={'Hi'}
                    theme="letters"
                    avatarKey={1}
                    size={24}
                    fontSize={8}
                />
            ),
        },
        {
            label: 'Testnet',
            id: 'Testnet',
            prefix: (
                <Avatar
                    borderRadius={7.5}
                    text={'Hi'}
                    theme="letters"
                    size={24}
                    avatarKey={2}
                    fontSize={8}
                />
            ),
        },
        {
            label: 'Mainent',
            id: 'Mainent',
            prefix: (
                <Avatar
                    borderRadius={7.5}
                    text={'Hi'}
                    theme="letters"
                    size={24}
                    avatarKey={3}
                    fontSize={8}
                />
            ),
        },
    ],
};

export const LabelLess = Template.bind({});

LabelLess.args = {
    options: [
        {
            label: 'Api Key',
            id: 'Api Key',
            prefix: <Cog fill={color.navy40} />,
        },
        {
            label: 'Testnet',
            id: 'Testnet',
            prefix: <Server fill={color.navy40} />,
        },
    ],
    label: 'Server: ',
    isLabelVisible: false,
    width: 'fit-content',
    defaultOptionIndex: 0,
};
