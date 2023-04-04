import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from './Tag';

export default {
    title: '4.UI/Tag',
    component: Tag,
    argTypes: {
        onCancelClick: { action: 'onCancelClick function called' },
    },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Regular = Template.bind({});
Regular.args = {};

export const Discount = Template.bind({});
Discount.args = {
    text: '-35%',
    theme: 'discount',
    padding: '20px',
};

export const ActiveStatus = Template.bind({});
ActiveStatus.args = {
    active: true,
    text: 'Active Tag',
    theme: 'status',
};

export const InactiveStatus = Template.bind({});
InactiveStatus.args = {
    active: false,
    text: 'Inactive Tag',
    theme: 'status',
};

export const Green = Template.bind({});
Green.args = {
    color: 'green',
    text: 'Green',
};

export const GreenDark = Template.bind({});
GreenDark.args = {
    color: 'green',
    text: 'Green',
    tone: 'dark',
};

export const Red = Template.bind({});
Red.args = {
    color: 'red',
    text: 'Red',
};

export const RedDark = Template.bind({});
RedDark.args = {
    color: 'red',
    text: 'Red',
    tone: 'dark',
};

export const Grey = Template.bind({});
Grey.args = {
    color: 'grey',
    text: 'Grey',
};

export const GreyDark = Template.bind({});
GreyDark.args = {
    color: 'grey',
    text: 'Grey',
    tone: 'dark',
};

export const Yellow = Template.bind({});
Yellow.args = {
    color: 'yellow',
    text: 'Yellow',
};

export const YellowDark = Template.bind({});
YellowDark.args = {
    color: 'yellow',
    text: 'Yellow',
    tone: 'dark',
};

export const Blue = Template.bind({});
Blue.args = {
    color: 'blue',
    text: 'Blue',
};

export const BlueDark = Template.bind({});
BlueDark.args = {
    color: 'blue',
    text: 'Blue',
    tone: 'dark',
};

export const Purple = Template.bind({});
Purple.args = {
    color: 'purple',
    text: 'Purple',
};

export const PurpleDark = Template.bind({});
PurpleDark.args = {
    color: 'purple',
    text: 'Purple',
    tone: 'dark',
};

export const Pink = Template.bind({});
Pink.args = {
    color: 'pink',
    text: 'Pink',
};

export const PinkDark = Template.bind({});
PinkDark.args = {
    color: 'pink',
    text: 'Pink',
    tone: 'dark',
};

export const borderGreen = Template.bind({});
borderGreen.args = {
    color: 'green',
    text: 'Border Green',
    tone: 'light',
    customize: {borderRadius: "8px", backgroundColor: "#FFF", border: "1px solid #00D1AE}"}
};

export const borderBlue = Template.bind({});
borderBlue.args = {
    color: 'blue',
    text: 'Border Blue',
    tone: 'light',
    customize: {
        border: "1px solid #52ABFF}",
        backgroundColor: "#FFF",
        borderRadius: "3px",
        color: "#FA3",
        fontSize: "20px",
        fontWeight: "500",
        padding: "8px 16px",
        margin: "2px"
    }
};

export const AllProps = Template.bind({});
AllProps.args = {
    active: true,
    color: 'pink',
    fontSize: '20px',
    hasCancel: true,
    id: 'tag-props',
    padding: '20px 40px',
    text: 'All the props',
    theme: 'regular',
    tone: 'dark',
    width: 'fit-content',
};
