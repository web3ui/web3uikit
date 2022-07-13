import { ComponentStory, ComponentMeta } from '@storybook/react';
import { color } from '@web3uikit/styles';
import PopoverDropdown from './PopoverDropdown';
import PopoverElement from '../PopoverElement/PopoverElement';
import {
    Cog,
    HelpCircle,
    LifeRing,
    LogOut,
    Network,
    Server,
    Testnet,
} from '@web3uikit/icons';

export default {
    title: '5.Popup/Popover Dropdown',
    component: PopoverDropdown,
    subcomponents: { PopoverElement },
    argTypes: { onClick: { action: 'clicked' } },
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
            key="0"
            height={50}
            width={260}
            text={'Testnet Server'}
            textSize={20}
            icon={<Testnet fill={color.white} fontSize={20} />}
            iconSize={30}
            backgroundColor={'transparent'}
            textColor={color.white}
            onClick={() => alert('Testnet Server')}
        />,
        <PopoverElement
            key="1"
            height={50}
            width={260}
            text={'Mainnet Server'}
            textSize={20}
            iconSize={30}
            icon={<Network fill={color.white} fontSize={20} />}
            backgroundColor={'transparent'}
            textColor={color.white}
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
            icon={<Server fill={color.white} fontSize={20} />}
            textColor={color.white}
            onClick={() => alert('Local Devchain Server')}
        />,
    ],
    parent: <HelpCircle key="3" fill={color.grey} fontSize={50} />,
};

export const PopoverWithMove = Template.bind({});
PopoverWithMove.args = {
    children: [
        <PopoverElement
            backgroundColor={'transparent'}
            height={50}
            icon={<Testnet fill={color.white} fontSize={20} />}
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
            icon={<Server fill={color.white} fontSize={20} />}
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
            icon={<Server fill={color.white} fontSize={20} />}
            iconSize={30}
            key="2"
            text={'Local Devchain Server'}
            textColor={color.white}
            textSize={20}
            width={260}
        />,
    ],
    moveBody: -80,
    parent: <button>hover me!</button>,
    position: 'bottom',
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

export const PopoverDropdownInsidePopoverDropdown = Template.bind({});
PopoverDropdownInsidePopoverDropdown.args = {
    parent: <button>hover me!</button>,
    position: 'bottom',
    children: [
        <PopoverDropdown
            id="testing-the-id"
            parent={
                <PopoverElement
                    key="0"
                    backgroundColor="transparent"
                    height={50}
                    icon={<Testnet fill={color.white} fontSize={20} />}
                    iconSize={30}
                    text="Testnet Server"
                    textColor="#FFFFFF"
                    textSize={20}
                    width={260}
                />
            }
            position="left"
            children={[
                <PopoverElement
                    backgroundColor="transparent"
                    height={50}
                    icon={<Network fill={color.white} fontSize={20} />}
                    iconSize={30}
                    text="This_is_a_long_text_without_spaces"
                    textColor="#FFFFFF"
                    textSize={20}
                    width={260}
                />,
                <PopoverElement
                    backgroundColor="transparent"
                    height={50}
                    icon={<Server fill={color.white} fontSize={20} />}
                    iconSize={30}
                    text="Local Devchain Server"
                    textColor="#FFFFFF"
                    textSize={20}
                    width={260}
                />,
            ]}
        ></PopoverDropdown>,
        <PopoverElement
            backgroundColor="transparent"
            height={50}
            icon={<Testnet fill={color.white} fontSize={20} />}
            iconSize={30}
            text="Testnet Server"
            textColor="#FFFFFF"
            textSize={20}
            width={260}
        />,
        <PopoverElement
            backgroundColor="transparent"
            height={50}
            icon={<Network fill={color.white} fontSize={20} />}
            iconSize={30}
            text="Mainnet Server"
            textColor="#FFFFFF"
            textSize={20}
            width={260}
        />,
        <PopoverElement
            backgroundColor="transparent"
            height={50}
            icon={<Server fill={color.white} fontSize={20} />}
            iconSize={30}
            text="Local Devchain Server"
            textColor="#FFFFFF"
            textSize={20}
            width={260}
        />,
    ],
};
