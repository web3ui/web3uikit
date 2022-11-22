import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Windows } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';
import { Credentials } from '.';

export default {
    title: '2.Forms/Credentials',
    component: Credentials,
    argTypes: {
        onCopy: { action: 'clicked' },
        onReveal: { action: 'revealed' },
    },
} as ComponentMeta<typeof Credentials>;

const Template: ComponentStory<typeof Credentials> = (args) => (
    <Credentials {...args} />
);

export const WithTitleAndIcon = Template.bind({});
WithTitleAndIcon.args = {
    icon: <Windows fill={color.blueGray50} />,
    title: 'CLI API Key:',
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
    title: 'CLI API Key:',
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
};

export const WithCustomWidth = Template.bind({});
WithCustomWidth.args = {
    icon: <Windows fill={color.blueGray50} />,
    title: 'CLI API Key:',
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
    width: '700px',
};

export const OneLine = Template.bind({});
OneLine.args = {
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
};

export const WithCustomColors = Template.bind({});
WithCustomColors.args = {
    icon: <Windows fill={color.mint40} />,
    title: 'CLI API Key:',
    titleColor: 'blue',
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
    textColor: 'red',
};

export const Multiline = Template.bind({});
Multiline.args = {
    title: 'Multiline Text:',
    hasHideButton: false,
    text: `[common]
    dapp_addr = onfkgi4pc9ld.moralis.io
    dapp_port = 7000
    token = KKKaDjYz0i
[Ganache]
    type = http
    local_port = 8545
    custom_domains = onfkgi4pc9ld.moralis.io`,
};
