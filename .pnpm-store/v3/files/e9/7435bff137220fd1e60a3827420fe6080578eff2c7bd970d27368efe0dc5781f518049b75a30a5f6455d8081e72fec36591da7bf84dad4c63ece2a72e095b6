import m from 'mithril';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/mithril/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/mithril/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

// More on component templates: https://storybook.js.org/docs/mithril/writing-stories/introduction#using-args
const Template = ({ children, ...args }) => ({
  view: () => m(Button, args, children),
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/mithril/writing-stories/args
Primary.args = {
  primary: true,
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};
