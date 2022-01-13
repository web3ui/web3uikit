import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Widget from './Widget';
import {iconTypes} from "../Icon/collection";

export default {
    title: 'UI/Widget',
    component: Widget,
} as ComponentMeta<typeof Widget>;

const Template: ComponentStory<typeof Widget> = (args) => <Widget {...args} />
;

export const TextOnly = Template.bind({});
TextOnly.args = {
    title: "Environment",
    description: "54.324 Kb",
};
export const TextOnlyWithHint = Template.bind({});
TextOnlyWithHint.args = {
    title: "Environment",
    description: "4.325 cu",
    hint: "Thanks for checking me"
};

export const withIcon = Template.bind({});
withIcon.args = {
    title: "Environment",
    description: "4.325 cu",
    hint: "Thanks for checking me",
    icon: iconTypes.network,
};