import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';

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
    icon: 'download',
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
    icon: 'download',
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
    icon: 'download',
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
                <div
                    style={{
                        backgroundColor: 'blue',
                        width: '20px',
                        height: '20px',
                        borderRadius: '20px',
                    }}
                />
            ),
        },
        {
            label: 'Testnet',
            id: 'Testnet',
            prefix: (
                <div
                    style={{
                        backgroundColor: 'blue',
                        width: '20px',
                        height: '20px',
                        borderRadius: '20px',
                    }}
                />
            ),
        },
        {
            label: 'Mainent',
            id: 'Mainent',
            prefix: (
                <div
                    style={{
                        backgroundColor: 'blue',
                        width: '20px',
                        height: '20px',
                        borderRadius: '20px',
                    }}
                />
            ),
        },
    ],
    label: 'Server: ',
};
