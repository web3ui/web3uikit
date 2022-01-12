import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';
import { Icon } from '../Icon';
import { Illustration } from '../Illustrations';
import { iconTypes } from '../Icon/collection';
import color from '../../styles/colors';

export default {
    title: 'Interaction/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const testEvent = (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event.target);

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const onTestOptionChange = (e: any) => {
    console.log(e)
}

export const Regular = Template.bind({});
Regular.args = {
    options: [
        {
            label: "Discord",
            value: "discord",
            icon: <Icon svg={iconTypes.discord} fill={color.grey} />
        },
        {
            label: "Emoji",
            value: "emoji",
            icon: "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
        },
        {
            label: "TXT",
            value: "txt",
            icon: "TXT"
        },
        {
            label: "Server",
            value: "server",
            icon: <Icon svg={iconTypes.server} fill={color.grey} />
        }
    ],
    // onOptionChange: onTestOptionChange,
    label: "Label Text"
};