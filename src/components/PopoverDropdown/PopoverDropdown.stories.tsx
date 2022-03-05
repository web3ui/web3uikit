import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import color from '../../styles/colors';
import colors from '../../styles/colors';
import PopoverDropdown from './PopoverDropdown';
import PopoverElement from '../PopoverElement/PopoverElement';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';

export default {
    title: '5.Popup/Popover Dropdown',
    component: PopoverDropdown,
    subcomponents: { PopoverElement },
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof PopoverDropdown>;

const Template: ComponentStory<typeof PopoverDropdown> = (args) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            minHeight: '100vh',
        }}
    >
        <PopoverDropdown {...args} />
    </div>
);

export const PopoverSelection = Template.bind({});
PopoverSelection.args = {
    position: 'bottom',
    children: [
        <PopoverElement
            key="0"
            height={50}
            width={260}
            text={'Testnet Server'}
            textSize={20}
            icon={iconTypes.testnet}
            iconSize={30}
            backgroundColor={'transparent'}
            textColor={colors.white}
            onClick={() => alert('Testnet Server')}
        />,
        <PopoverElement
            key="1"
            height={50}
            width={260}
            text={'Mainnet Server'}
            textSize={20}
            iconSize={30}
            icon={iconTypes.network}
            backgroundColor={'transparent'}
            textColor={colors.white}
            onClick={() => alert('Mainnet Server')}
        />,
        <PopoverElement
            key="2"
            height={50}
            width={260}
            text={'Local Devchain Server'}
            textSize={20}
            iconSize={30}
            backgroundColor={'transparent'}
            icon={iconTypes.server}
            textColor={colors.white}
            onClick={() => alert('Local Devchain Server')}
        />,
    ],
    parent: (
        <Icon key="3" svg={iconTypes.helpCircle} fill={color.grey} size={50} />
    ),
};

export const PopoverSelectionUser = Template.bind({});
PopoverSelectionUser.args = {
    position: 'bottom',
    children: [
        <PopoverElement
            key="4"
            height={50}
            width={260}
            text={'Account Settings'}
            textSize={20}
            icon={iconTypes.cog}
            iconSize={30}
            backgroundColor={'transparent'}
            textColor={colors.white}
            onClick={() => alert('Account Settings')}
        />,
        <PopoverElement
            key="5"
            height={50}
            width={260}
            text={'Support Page'}
            textSize={20}
            iconSize={30}
            icon={iconTypes.lifeRing}
            backgroundColor={'transparent'}
            textColor={colors.white}
            onClick={() => alert('Support Page')}
        />,
        <PopoverElement
            key="6"
            height={50}
            width={260}
            text={'Logout'}
            textSize={20}
            iconSize={30}
            backgroundColor={'transparent'}
            iconColor={colors.red}
            icon={iconTypes.logOut}
            textColor={colors.red}
            onClick={() => alert('Logout')}
        />,
    ],
    parent: (
        <Icon key="7" svg={iconTypes.helpCircle} fill={color.grey} size={50} />
    ),
};
