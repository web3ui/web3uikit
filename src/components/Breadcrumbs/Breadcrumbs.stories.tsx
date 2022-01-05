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
  <Breadcrumbs {...args} />
);

export const One = Template.bind({});
One.args = {
  routes: [
    {
      name: 'Moralis Demo App 1',
      path: '#',
      icon: <Icon svg={iconTypes.server} size="1.4em" />,
    },
  ],
  currentLocation: '#',
};

export const Two = Template.bind({});
Two.args = {
  routes: [
    {
      name: 'Moralis Demo App 1',
      path: '#',
      icon: <Icon svg={iconTypes.server} size="1.4em" />,
    },
    {
      name: 'Server Details',
      path: '2',
    },
  ],
  currentLocation: '2',
};

export const Three = Template.bind({});
Three.args = {
  routes: [
    {
      name: 'Moralis Demo App 1',
      path: 'demo',
      icon: <Icon svg={iconTypes.server} size="1.4em" />,
    },
    {
      name: 'Server Details',
      path: 'server',
    },
    {
      name: 'Advanced',
      path: 'advanced',
    },
  ],
  currentLocation: 'advanced',
};

export const Four = Template.bind({});
Four.args = {
  routes: [
    {
      name: 'Moralis Demo App 1',
      path: '#',
      icon: <Icon svg={iconTypes.server} size="1.4em" />,
    },
    {
      name: 'Server Details',
      path: '2',
    },
    {
      name: 'Server Details',
      path: '3',
    },
    {
      name: 'Advanced',
      path: '4',
    },
  ],
  currentLocation: '4',
};
