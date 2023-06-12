import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonBase from './ButtonBase';

export default {
    title: '9.NextJS/Button',
    component: ButtonBase,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ButtonBase>;

const Template: ComponentStory<typeof ButtonBase> = (args) => (
    <ButtonBase {...args} />
);

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
    children: <span>hi</span>,
};
