import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Plus } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';
import Button from './Button';

export default {
    title: '2.Forms/Button',
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    text: 'Button',
};

export const ThemePrimary = Template.bind({});
ThemePrimary.args = {
    text: 'Primary Button',
    theme: 'primary',
};

export const ThemeSecondary = Template.bind({});
ThemeSecondary.args = {
    text: 'Secondary Button',
    theme: 'secondary',
};

export const ThemeOutline = Template.bind({});
ThemeOutline.args = {
    text: 'Outline Button',
    theme: 'outline',
};

export const ThemeTranslucent = Template.bind({});
ThemeTranslucent.args = {
    text: 'Translucent Button',
    theme: 'translucent',
};

export const ThemeColoredGreen = Template.bind({});
ThemeColoredGreen.args = {
    text: 'Colored Button: Green',
    theme: 'colored',
    color: 'green',
};

export const ThemeColoredYellow = Template.bind({});
ThemeColoredYellow.args = {
    text: 'Colored Button: Yellow',
    theme: 'colored',
    color: 'yellow',
};

export const ThemeColoredRed = Template.bind({});
ThemeColoredRed.args = {
    text: 'Colored Button: Red',
    theme: 'colored',
    color: 'red',
};

export const ThemeColoredBlue = Template.bind({});
ThemeColoredBlue.args = {
    text: 'Colored Button: Blue',
    theme: 'colored',
    color: 'blue',
};

export const IconButton = Template.bind({});
IconButton.args = {
    icon: <Plus title="plus icon" />,
    iconLayout: 'icon-only',
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
    text: 'Button',
    size: 'small',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
    text: 'Button',
    size: 'large',
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    text: 'Button',
    size: 'xl',
};

export const CustomButton = Template.bind({});
CustomButton.args = {
    customize: {
        backgroundColor: color.navy10,
        border: `4px solid ${color.navy40}`,
        color: color.navy40,
        fontSize: '20px',
        fontWeight: '700',
        onHover: 'darken',
        padding: '8px 12px',
        margin: '20px',
    },
    text: 'Button',
    theme: 'custom',
};

export const AllProps = Template.bind({});
AllProps.args = {
    color: 'blue',
    disabled: false,
    icon: <Plus title="plus icon" />,
    iconColor: 'white',
    iconLayout: 'icon-only',
    id: 'all-props-button',
    isFullWidth: false,
    isLoading: false,
    isTransparent: false,
    loadingText: 'loading',
    radius: 0,
    size: 'regular',
    text: 'all the props',
    theme: 'colored',
    type: 'button',
};

export const ThemeMoneyPrimary = Template.bind({});
ThemeMoneyPrimary.args = {
    text: 'Primary Money Button',
    theme: 'moneyPrimary',
};
