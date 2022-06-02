import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import { Breadcrumbs } from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
    title: '4.UI/Breadcrumbs',
    component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
    <Router>
        <Breadcrumbs {...args} />
    </Router>
);

export const One = Template.bind({});
One.args = {
    routes: [
        {
            breadcrumb: 'Moralis Demo App 1',
            path: '#',
            icon: <Icon svg={iconTypes.server} size={20} fill="currentColor" />,
        },
    ],
    currentLocation: '#',
};

export const Two = Template.bind({});
Two.args = {
    routes: [
        {
            breadcrumb: 'Moralis Demo App 1',
            path: '#',
            icon: <Icon svg={iconTypes.server} size={20} fill="currentColor" />,
        },
        {
            breadcrumb: 'Details',
            path: '2',
        },
    ],
    currentLocation: '2',
};

export const Three = Template.bind({});
Three.args = {
    routes: [
        {
            breadcrumb: 'Moralis Demo App 1',
            path: 'demo',
            icon: <Icon svg={iconTypes.server} size={20} fill="currentColor" />,
        },
        {
            breadcrumb: 'Details',
            path: 'server',
        },
        {
            breadcrumb: 'Advanced',
            path: 'advanced',
        },
    ],
    currentLocation: 'advanced',
};

export const Four = Template.bind({});
Four.args = {
    routes: [
        {
            breadcrumb: 'Moralis Demo App 1',
            path: '#',
            icon: <Icon svg={iconTypes.server} size={20} fill="currentColor" />,
        },
        {
            breadcrumb: 'Details',
            path: '2',
        },
        {
            breadcrumb: 'Advanced',
            path: '3',
        },
        {
            breadcrumb: 'More Details',
            path: '4',
        },
    ],
    currentLocation: '4',
};
