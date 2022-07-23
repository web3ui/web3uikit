import { action } from '@storybook/addon-actions';
import Button from './Button.marko';

// More on default export: https://storybook.js.org/docs/marko/writing-stories/introduction#default-export
export default {
  title: 'Button',
  // More on argTypes: https://storybook.js.org/docs/marko/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/marko/writing-stories/introduction#using-args
const Template = (args) => ({
  component: Button,
  input: args,
});

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/marko/writing-stories/args
Text.args = {
  children: 'Button',
  onClick: action('onClick'),
};
