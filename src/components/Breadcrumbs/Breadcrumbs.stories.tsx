import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import { Breadcrumbs } from '.';

export default {
  title: 'UI/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

// export const One = Template.bind({});
// One.args = {};

export const One: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Item>
      <Icon svg={iconTypes.server} fill="#68738D" />
      Moralis Demo App 1
    </Breadcrumbs.Item>
  </Breadcrumbs>
);

export const Two: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Item>
      <Icon svg={iconTypes.server} fill="#68738D" />
      Moralis Demo App 1
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>Server Details</Breadcrumbs.Item>
  </Breadcrumbs>
);

export const Three: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Item>
      <Icon svg={iconTypes.server} fill="#68738D" />
      Moralis Demo App 1
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>Server Details</Breadcrumbs.Item>
    <Breadcrumbs.Item>Advanced</Breadcrumbs.Item>
  </Breadcrumbs>
);

export const Four: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Item>
      <Icon svg={iconTypes.server} fill="#68738D" />
      Moralis Demo App 1
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>Server Details</Breadcrumbs.Item>
    <Breadcrumbs.Item>Server Details</Breadcrumbs.Item>
    <Breadcrumbs.Item>Advanced</Breadcrumbs.Item>
  </Breadcrumbs>
);
