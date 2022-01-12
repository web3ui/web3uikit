import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';

export default {
    title: 'Interaction/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const testEvent = (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event.target);

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Regular = Template.bind({});
Regular.args = {
    // theme: "regular",
    // children: [<Dropdown.Option value={"Loco"} key={0}>Hello</Dropdown.Option>, <Dropdown.Option value={"billy"} key={1}>Loco</Dropdown.Option>],
    // title: "Select Currency",
    // onChange: testEvent,
};