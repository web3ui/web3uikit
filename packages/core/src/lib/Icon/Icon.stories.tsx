import React from 'react';
import { storiesOf } from '@storybook/react';

// component
import Icon from './Icon';

// types
import { iconTypes, TIconType } from './collection';
import type { IconProps } from './types';

// utils
import color from '../../styles/colors';

const defaultState: IconProps = {
    fill: color.black,
    size: 24,
    svg: iconTypes.mail,
};

/**
 * helpers
 */
const setState = (props: Partial<IconProps>): IconProps => {
    return { ...defaultState, ...props };
};

const capitilize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * stories
 */
const stories = storiesOf('6.Graphic/Icon', module).addParameters({
    component: Icon,
    controls: { hideNoControlsWarning: true },
    docs: {
        source: {
            type: 'dynamic',
        },
    },
});

['16', '32', '64'].forEach((_size) => {
    const name = 'Size' + _size;
    const size = parseInt(_size);

    stories.add(name, () => <Icon {...setState({ size })} />);
});

['blue', 'red', 'green'].forEach((_color) => {
    const name = 'Color' + capitilize(_color);
    const fill = color[_color as keyof typeof color];

    stories.add(name, () => <Icon {...setState({ fill })} />);
});

Object.keys(iconTypes).forEach((icon) => {
    const svg = icon as TIconType;
    stories.add(capitilize(svg), () => <Icon {...setState({ svg })} />);
});
