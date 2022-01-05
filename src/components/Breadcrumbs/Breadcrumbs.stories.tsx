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

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}></Breadcrumbs>
);

export const One = Template.bind({});
One.args = {
  children: (
    <Breadcrumbs.Item href="">
      <Icon svg={iconTypes.server} size="1.3em" />
      Moralis Demo App 1
    </Breadcrumbs.Item>
  ),
};

export const Two: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Item href="">
      <Icon svg={iconTypes.server} size="1.3em" />
      Moralis Demo App 1
    </Breadcrumbs.Item>
    <Breadcrumbs.Item href="">Server Details</Breadcrumbs.Item>
  </Breadcrumbs>
);

export const Three: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Item href="">
      <Icon svg={iconTypes.server} size="1.3em" />
      Moralis Demo App 1
    </Breadcrumbs.Item>
    <Breadcrumbs.Item href="">Server Details</Breadcrumbs.Item>
    <Breadcrumbs.Item href="">Advanced</Breadcrumbs.Item>
  </Breadcrumbs>
);

export const Four: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Item href="">
      <Icon svg={iconTypes.server} size="1.3em" />
      Moralis Demo App 1
    </Breadcrumbs.Item>
    <Breadcrumbs.Item href="">Server Details</Breadcrumbs.Item>
    <Breadcrumbs.Item href="">Server Details</Breadcrumbs.Item>
    <Breadcrumbs.Item href="">Advanced</Breadcrumbs.Item>
  </Breadcrumbs>
);
