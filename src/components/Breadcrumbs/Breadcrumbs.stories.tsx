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
      path: '#',
    },
  ],
};

export const Three = Template.bind({});
Three.args = {
  routes: [
    {
      name: 'Moralis Demo App 1',
      path: '#',
      icon: <Icon svg={iconTypes.server} size="1.4em" />,
    },
    {
      name: 'Server Details',
      path: '#',
    },
    {
      name: 'Advanced',
      path: '#',
    },
  ],
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
      path: '#',
    },
    {
      name: 'Server Details',
      path: '#',
    },
    {
      name: 'Advanced',
      path: '#',
    },
  ],
};
