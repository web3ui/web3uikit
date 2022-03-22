import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { CodeArea } from '.';

export default {
    title: '2.Forms/CodeArea',
    component: CodeArea,
} as ComponentMeta<typeof CodeArea>;

const Template: ComponentStory<typeof CodeArea> = (args) => (
    <CodeArea {...args} />
);

export const MultipleLines = Template.bind({});
MultipleLines.args = {
    text: `[common]
  server_addr = onfkgi4pc9ld.moralis.io
  server_port = 7000
  token = KKKaDjYz0i
[hardhat]
  type = http
  local_port = 8545
  custom_domains = onfkgi4pc9ld.moralis.io`,
};

export const OneLine = Template.bind({});
OneLine.args = {
    text: 'https://xj5hyiafwkhn.moralis.io:2053/servers',
};
