import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './Tooltip';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import color from '../../styles/colors';

export default {
    title: '5.Popup/Tooltip',
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            minHeight: '100vh',
        }}
    >
        <Tooltip {...args} />
    </div>
);

const TooltipText = () => {
    return (
        <span
            style={{
                width: '100px',
            }}
        >
            This is tooltip text
        </span>
    );
};

export const Top = Template.bind({});
Top.args = {
    position: 'top',
    content: <TooltipText />,
    children: [
        <Icon key="4" svg={iconTypes.helpCircle} fill={color.grey} size={50} />,
    ],
};

export const Bottom = Template.bind({});
Bottom.args = {
    position: 'bottom',
    content: <TooltipText />,
    children: [
        <Icon key="4" svg={iconTypes.helpCircle} fill={color.grey} size={50} />,
    ],
};

export const Left = Template.bind({});
Left.args = {
    position: 'left',
    content: <TooltipText />,
    children: [
        <Icon key="4" svg={iconTypes.helpCircle} fill={color.grey} size={50} />,
    ],
};

export const Right = Template.bind({});
Right.args = {
    position: 'right',
    content: <TooltipText />,
    children: [
        <Icon key="4" svg={iconTypes.helpCircle} fill={color.grey} size={50} />,
    ],
};
