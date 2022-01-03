import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumbs } from '.';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);

export const One = Template.bind({});
One.args = {};
