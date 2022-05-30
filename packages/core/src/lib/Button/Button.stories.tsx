import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import { IButtonProps } from './types';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'Button Clicked',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IButtonProps) => (
  <Button {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  text: 'Primary',
};
