import React from 'react';
import PopoverDropdown from './PopoverDropdown';
import PopoverElement from '../PopoverElement/PopoverElement';
import color from '../../styles/colors';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { iconTypes } from '../Icon/collection';

export default {
    title: '5.Popup/Popover Dropdown',
    component: PopoverDropdown,
} as ComponentMeta<typeof PopoverDropdown>;

const Template: ComponentStory<typeof PopoverDropdown> = (args) => (
    <div
        data-note="do not copy this div, its only for display purpose in Storybook"
        style={{
            alignItems: 'center',
            display: 'flex',
            height: '60vh',
            justifyContent: 'center',
            width: '100%',
        }}
    >
        <PopoverDropdown {...args} />
    </div>
);

export const PopoverWithElements = Template.bind({});
PopoverWithElements.args = {
    position: 'bottom',
    children: [
        <PopoverElement
            backgroundColor={'transparent'}
            height={50}
            icon={iconTypes.testnet}
            iconSize={30}
            key="0"
            text={'Testnet Server'}
            textColor={color.white}
            textSize={20}
            width={260}
        />,
        <PopoverElement
            backgroundColor={'transparent'}
            height={50}
            icon={iconTypes.network}
            iconSize={30}
            key="1"
            text={'Mainnet Server'}
            textColor={color.white}
            textSize={20}
            width={260}
        />,
        <PopoverElement
            backgroundColor={'transparent'}
            height={50}
            icon={iconTypes.server}
            iconSize={30}
            key="2"
            text={'Local Devchain Server'}
            textColor={color.white}
            textSize={20}
            width={260}
        />,
    ],
    parent: <button>hover me!</button>,
};

export const PopoverAnything = Template.bind({});
PopoverAnything.args = {
    id: 'testing-the-id',
    children: [
        <a href="#" style={{ color: 'white' }}>
            Home
        </a>,
        <p style={{ color: 'white' }}>Contact us</p>,
        <button>Logout from your account</button>,
    ],
    parent: <p style={{ margin: '0' }}>hey, wanna hover on over?</p>,
};

export const PopoverBackgroundColor = Template.bind({});
PopoverBackgroundColor.args = {
    backgroundColor: 'pink',
    position: 'bottom',
    children: [
        <a href="#">Home</a>,
        <p>Contact us</p>,
        <button>Logout from your account</button>,
    ],
    parent: <p style={{ margin: '0' }}>think pink!</p>,
};

export const PopoverWidth = Template.bind({});
PopoverWidth.args = {
    position: 'bottom',
    width: '100px',
    children: [<button>only 100px</button>],
    parent: <button>custom min width</button>,
};

export const PopoverPositionTop = Template.bind({});
PopoverPositionTop.args = {
    position: 'top',
    children: [<button>pop on top!</button>],
    parent: <button>hover me!</button>,
};

export const PopoverPositionRight = Template.bind({});
PopoverPositionRight.args = {
    position: 'right',
    children: [
        <button>or why</button>,
        <button>try to</button>,
        <button>the right</button>,
    ],
    parent: <button>hover me!</button>,
};

export const PopoverPositionLeft = Template.bind({});
PopoverPositionLeft.args = {
    position: 'left',
    children: [<button>left position</button>, <button>works too!</button>],
    parent: <button>hover me!</button>,
};
